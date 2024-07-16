import React, { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAC, changeAllTaskStatusAC, changeTaskStatusAC, changeTaskTitleAC, removeAllTasksCompleteAC, removeTaskAC } from '@/components/commons/State/task-reducer';
import { AppRootStateItems } from '@/components/store';
import Header from "@/components/commons/Header/Header"
import CustomCheckboxAllTasks from '@/components/commons/CustomCheckboxAllTasks/CustomCheckboxAllTasks';
import InputAddTasks from '@/components/commons/InputAddTasks/InputAddTasks';
import ButtonFiltered from '@/components/commons/ButtonFiltered/ButtonFiltered';
import Task from '@/components/commons/Task/Task';
import s from './HomePage.module.sass'
import cx from 'classnames';


type FilterValues = "all" | "active" | "completed"

export type TaskStateItems = {
  id: string
  title: string
  isDone: boolean
}

function HomePage({ }) {

  const [taskTitle, setTaskTitle] = useState("")
  const [filter, setFilter] = useState<FilterValues>("all")
  const tasks = useSelector<AppRootStateItems, TaskStateItems[]>(state => state.tasks)

  const dispatch = useDispatch();
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasksFromStorage: TaskStateItems[] = JSON.parse(storedTasks);
      tasksFromStorage.forEach(task => dispatch(addTaskAC(task.title)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const tasksForTodoList: TaskStateItems[] = (filter === 'active' ? tasks.filter(tasks => !tasks.isDone)
    : filter === 'completed' ? tasks.filter(tasks => tasks.isDone)
      : tasks)

  const changeTodoListFilter = ((filter: FilterValues) => {
    setFilter(filter)
  })

  const changeAllTasksStatus = useCallback(() => {
    const action = changeAllTaskStatusAC();
    dispatch(action);
  }, []);

  const changeTaskStatus = useCallback((id: string, isDone: boolean) => {
    const action = changeTaskStatusAC(id, isDone);
    dispatch(action);
  }, []);

  const removeTask = useCallback((id: string) => {
    const action = removeTaskAC(id);
    dispatch(action);
  }, []);

  const addTask = useCallback((title: string) => {
    const action = addTaskAC(title);
    dispatch(action);
  }, []);


  const setTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value)
  }

  let count = () => {
    return tasks.filter(item => item.isDone === false).length
  }

  const addTaskHandler = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle)
    } else {
      setTaskTitle('')
    }
    setTaskTitle('')
  }

  const deleteAllTAsksComplete = useCallback(() => {
    const action = removeAllTasksCompleteAC();
    dispatch(action);
  }, []);

  const updateTaskTitle = useCallback((id: string, newTitle: string) => {
    const action = changeTaskTitleAC(id, newTitle);
    dispatch(action);
  }, []);

  return (
    <div className={s.container}>
      <Header />
      <div className={s.form}>
        <section className={s["add-task"]} style={tasks.length > 0 ? { gap: '18px' } : { gap: '0px' }}>
          <div style={{ display: 'flex', position: 'relative' }}>
            <CustomCheckboxAllTasks tasks={tasks} onClickHandler={changeAllTasksStatus} />
            <InputAddTasks
              className={s["add-task__input"]}
              placeholder={'What needs to be done?'}
              type={'text'}
              value={taskTitle}
              onChange={setTaskTitleHandler}
              onKeyDown={(event) => event.key === "Enter" && addTaskHandler()}
              onBlur={addTaskHandler}
            />
            <ButtonFiltered
              className={s.button}
              onClick={() => addTaskHandler()}
              title={'+'} />
          </div>
          <div>
            <ul className={s.list}>
              {tasksForTodoList.map((task) => {
                return (
                  <Task key={task.id}
                    id={task.id}
                    oldTitle={task.title}
                    isDone={task.isDone}
                    changeTaskStatus={changeTaskStatus}
                    removeTask={removeTask}
                    title={(newTitle) => updateTaskTitle(task.id, newTitle)}
                  />
                )
              })}
            </ul>
          </div>
          <div className={s["down-menu"]} style={tasks.length > 0 ? { display: 'flex' } : { display: 'none' }}>
            <div>
              <span className={s.count}>{count()} item left</span>
            </div>
            <div className={s["btn-container"]}>
              <ButtonFiltered
                className={cx(s["filter-btn"], { [s["btn-focus"]]: filter === 'all' })}
                onClick={() => changeTodoListFilter("all")}
                title={'All'} />
              <ButtonFiltered
                className={cx(s["filter-btn"], { [s["btn-focus"]]: filter === 'active' })}
                onClick={() => changeTodoListFilter("active")}
                title={'Active'} />
              <ButtonFiltered
                className={cx(s["filter-btn"], { [s["btn-focus"]]: filter === 'completed' })}
                onClick={() => changeTodoListFilter("completed")}
                title={'Complete'} />
            </div>
            {tasks.some(t => t.isDone)
              ?
              <ButtonFiltered className={s["clear-btn"]}
                onClick={deleteAllTAsksComplete}
                title={'Clear completed'} />
              :
              <div className={s["clear-btn"]} style={{ paddingTop: "16px" }}></div>}
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(HomePage);
