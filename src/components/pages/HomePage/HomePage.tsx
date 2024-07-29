import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';

import { useAction, useActionWithPayload } from '@/hooks/hooks';

import {
  InitTodosFromStorageAC,
  addTaskAC,
  changeAllTaskStatusAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  changeTodolistFilterAC,
  removeAllTasksCompleteAC,
  removeTaskAC,
} from '@/store/actions';

import {
  count,
  getTaskFilterSelector,
  getTasksForTodoListSelector,
  getTasksSelector,
} from '@/store/selectors';

import Header from '@/components/commons/Header/Header';
import CustomCheckboxAllTasks from '@/components/commons/CustomCheckboxAllTasks/CustomCheckboxAllTasks';
import Task from '@/components/commons/Task/Task';
import Input from '@/components/commons/Input/Input';
import Button from '@/components/commons/Button/Button';

import s from './HomePage.module.sass';
import cx from 'classnames';

export type TaskStateItems = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TaskState = {
  todoList: TaskStateItems[];
  activeFilter: FilterValues;
};

export type FilterValues = 'all' | 'active' | 'completed';

function HomePage({}) {
  const [taskTitle, setTaskTitle] = useState('');

  const tasks = useSelector(getTasksForTodoListSelector);
  const filter = useSelector(getTaskFilterSelector);
  const getTasks = useSelector(getTasksSelector);
  const counter = useSelector(count);
  const dispatch = useDispatch();

  const changeTodolistFilterAction = useActionWithPayload(
    changeTodolistFilterAC
  );
  const changeAllTasksStatusAction = useAction(changeAllTaskStatusAC);
  const changeTaskStatusAction = useActionWithPayload(changeTaskStatusAC);
  const removeTaskAction = useActionWithPayload(removeTaskAC);
  const addTaskAction = useActionWithPayload(addTaskAC);
  const deleteAllTAsksCompleteAction = useAction(removeAllTasksCompleteAC);
  const updateTaskTitleAction = useActionWithPayload(changeTaskTitleAC);

  const changeTodoListFilter = useCallback((filter: FilterValues) => {
    changeTodolistFilterAction(filter);
  }, []);
  const changeAllTasksStatus = useCallback(() => {
    changeAllTasksStatusAction();
  }, []);
  const changeTaskStatus = useCallback((id: string, isDone: boolean) => {
    changeTaskStatusAction({ taskId: id, isDone });
  }, []);
  const removeTask = useCallback((id: string) => {
    removeTaskAction({ taskId: id });
  }, []);
  const addTask = useCallback((task: TaskStateItems) => {
    addTaskAction({ task });
  }, []);
  const deleteAllTAsksComplete = useCallback(() => {
    deleteAllTAsksCompleteAction();
  }, []);
  const updateTaskTitle = useCallback((id: string, newTitle: string) => {
    updateTaskTitleAction({ taskId: id, title: newTitle });
  }, []);
  const setTaskTitleHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskTitle(event.currentTarget.value);
    },
    []
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      dispatch(InitTodosFromStorageAC(parsedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    if (getTasks && getTasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(getTasks));
    } else {
      localStorage.removeItem('tasks');
    }
  }, [getTasks]);

  const addTaskHandler = () => {
    if (taskTitle.trim() !== '') {
      addTask({ id: v1(), title: taskTitle, isDone: false });
    }
    setTaskTitle('');
  };

  const isCompletedTaskExists = tasks.some(task => task.isDone);

  const addTaskForm = cx({
    [s['add-task']]: true,
    [s['got-items']]: getTasks.length > 0,
  });
  const downMenuShow = cx({
    [s['down-menu']]: true,
    [s['show']]: getTasks.length > 0,
  });

  return (
    <div className={s.container}>
      <Header />
      <div className={s.form}>
        <section className={addTaskForm}>
          <div className={s['box']}>
            <CustomCheckboxAllTasks
              tasks={getTasks}
              onClickHandler={changeAllTasksStatus}
            />
            <Input
              className={cx(s['add-task__input'], s['italic'])}
              placeholder={'What needs to be done?'}
              type={'text'}
              value={taskTitle}
              onChange={setTaskTitleHandler}
              onKeyDown={event => event.key === 'Enter' && addTaskHandler()}
              onBlur={addTaskHandler}
            />
            <Button
              className={s.button}
              onClick={() => addTaskHandler()}
              getTitle={'+'}
            />
          </div>
          <div>
            <ul className={s.list}>
              {tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    oldTitle={task.title}
                    isDone={task.isDone}
                    changeTaskStatus={changeTaskStatus}
                    removeTask={removeTask}
                    getTitle={newTitle => updateTaskTitle(task.id, newTitle)}
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
              <Button
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'all',
                })}
                onClick={() => changeTodoListFilter('all')}
                getTitle={'All'}
              />
              <Button
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'active',
                })}
                onClick={() => changeTodoListFilter('active')}
                getTitle={'Active'}
              />
              <Button
                className={cx(s['filter-btn'], {
                  [s['btn-focus']]: filter === 'completed',
                })}
                onClick={() => changeTodoListFilter('completed')}
                getTitle={'Complete'}
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
