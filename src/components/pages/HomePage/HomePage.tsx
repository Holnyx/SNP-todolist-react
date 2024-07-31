import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAction, useActionWithPayload } from '@/hooks/hooks';
import {
  InitTodosFromStorageAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeAllTasksCompleteAC,
  removeTaskAC,
} from '@/store/actions';
import {
  countSelector,
  tasksFilterSelector,
  tasksForTodoListSelector,
  tasksSelector,
} from '@/store/selectors';

import Header from '@/components/commons/Header/Header';
import CustomCheckboxAllTasks from '@/components/commons/CustomCheckboxAllTasks/CustomCheckboxAllTasks';
import Task from '@/components/commons/Task/Task';
import Button from '@/components/commons/Buttons/Button';
import AddTaskInput from '@/components/commons/Inputs/AddTaskInput';
import AddTaskButton from '@/components/commons/Buttons/AddTaskButton';
import FilterTaskButton from '@/components/commons/Buttons/FilterTaskButton';

import s from './HomePage.module.sass';
import cx from 'classnames';

function HomePage({}) {
  const filteredTasks = useSelector(tasksForTodoListSelector);
  const filter = useSelector(tasksFilterSelector);
  const allTasks = useSelector(tasksSelector);
  const counter = useSelector(countSelector);
  const dispatch = useDispatch();

  const changeTaskStatusAction = useActionWithPayload(changeTaskStatusAC);
  const removeTaskAction = useActionWithPayload(removeTaskAC);
  const deleteAllTAsksCompleteAction = useAction(removeAllTasksCompleteAC);
  const updateTaskTitleAction = useActionWithPayload(changeTaskTitleAC);

  const changeTaskStatus = useCallback((id: string, isDone: boolean) => {
    changeTaskStatusAction({ taskId: id, isDone });
  }, []);
  const removeTask = useCallback((id: string) => {
    removeTaskAction({ taskId: id });
  }, []);
  const deleteAllTAsksComplete = useCallback(() => {
    deleteAllTAsksCompleteAction();
  }, []);
  const updateTaskTitle = useCallback((id: string, newTitle: string) => {
    updateTaskTitleAction({ taskId: id, title: newTitle });
  }, []);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      dispatch(InitTodosFromStorageAC(parsedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    if (allTasks && allTasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(allTasks));
    } else {
      localStorage.removeItem('tasks');
    }
  }, [allTasks]);

  const isCompletedTaskExists = filteredTasks.some(task => task.isDone);

  const addTaskForm = cx({
    [s['add-task']]: true,
    [s['got-items']]: allTasks.length > 0,
  });
  const downMenuShow = cx({
    [s['down-menu']]: true,
    [s['show']]: allTasks.length > 0,
  });

  return (
    <div className={s.container}>
      <Header />
      <div className={s.form}>
        <section className={addTaskForm}>
          <div className={s['box']}>
            <CustomCheckboxAllTasks tasks={allTasks} />
            <AddTaskInput
              className={cx(s['add-task__input'], s['italic'])}
              placeholder={'What needs to be done?'}
              type={'text'}
            />
            <AddTaskButton
              className={s.button}
              getTitle={'+'}
            />
          </div>
          <div>
            <ul className={s.list}>
              {filteredTasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    oldTitle={task.title}
                    isDone={task.isDone}
                    removeTask={removeTask}
                    getTitle={newTitle => updateTaskTitle(task.id, newTitle)}
                    changeTaskStatus={changeTaskStatus}
                  />
                );
              })}
            </ul>
          </div>
          <div className={downMenuShow}>
            <div>
              <span className={s.count}>{counter} item left</span>
            </div>
            <div className={s['btn-container']}>
              <FilterTaskButton
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'all',
                })}
                getTitle={'All'}
                filterTypes={'all'}
              />
              <FilterTaskButton
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'active',
                })}
                getTitle={'Active'}
                filterTypes={'active'}
              />
              <FilterTaskButton
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'completed',
                })}
                getTitle={'Complete'}
                filterTypes={'completed'}
              />
            </div>
            {isCompletedTaskExists ? (
              <Button
                className={s['clear-btn']}
                onClick={deleteAllTAsksComplete}
                getTitle={'Clear completed'}
              />
            ) : (
              <div className={s['clear-btn']}></div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(HomePage);
