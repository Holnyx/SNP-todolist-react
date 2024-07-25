import React, { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';

import useDispatchAction from '@/hooks/hooks';

import { addTaskAC, changeAllTaskStatusAC, changeTaskStatusAC, changeTaskTitleAC, changeTodolistFilterAC, removeAllTasksCompleteAC, removeTaskAC } from '@/store/actions';
import { getTasksForTodoList } from '@/store/selectors'

import Header from "@/components/commons/Header/Header"
import CustomCheckboxAllTasks from '@/components/commons/CustomCheckboxAllTasks/CustomCheckboxAllTasks';
import Task from '@/components/commons/Task/Task';
import Input from '@/components/commons/Input/Input';
import Button from '@/components/commons/Button/Button';

import s from './HomePage.module.sass'
import cx from 'classnames';


export type TaskStateItems = {
  id: string
  title: string
  isDone: boolean
}

export type TaskState = {
  todoList: TaskStateItems[];
  activeFilter: FilterValues;
};

export type FilterValues = "all" | "active" | "completed"

function HomePage({ }) {

  const [taskTitle, setTaskTitle] = useState("")

  const tasks: TaskState = useSelector(getTasksForTodoList);
  const dispatch = useDispatch();

  const taskFilter = (task: TaskStateItems, filter: FilterValues) => {
    switch (filter) {
      case 'active':
        return !task.isDone;
      case 'completed':
        return task.isDone;
      default:
        return task
    }
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const todoList = JSON.parse(storedTasks);
      if (Array.isArray(todoList)) {
        todoList.reverse().forEach(task => dispatch(addTaskAC(task)));
      } else {
        console.error("Parsed data is not an array", todoList);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks.todoList));
  }, [tasks.todoList]);

  const { dispatchAction } = useDispatchAction();

  const changeTodoListFilter = useCallback((filter: FilterValues) => {
    dispatchAction(changeTodolistFilterAC, filter)
  }, [])

  const changeAllTasksStatus = useCallback(() => {
    dispatchAction(changeAllTaskStatusAC)
  }, []);

  const changeTaskStatus = useCallback((id: string, isDone: boolean) => {
    dispatchAction(changeTaskStatusAC, id, isDone)
  }, []);

  const removeTask = useCallback((id: string) => {
    dispatchAction(removeTaskAC, id)
  }, []);

  const addTask = useCallback((task: TaskStateItems) => {
    dispatchAction(addTaskAC, task)
  }, []);

  const deleteAllTAsksComplete = useCallback(() => {
    dispatchAction(removeAllTasksCompleteAC)
  }, []);

  const updateTaskTitle = useCallback((id: string, newTitle: string) => {
    dispatchAction(changeTaskTitleAC, id, newTitle)
  }, []);

  const setTaskTitleHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value)
  }, [])

  const addTaskHandler = () => {
    if (taskTitle.trim() !== "") {
      addTask({ id: v1(), title: taskTitle, isDone: false })
    }
    setTaskTitle('')
  }

  let count = () => {
    return tasks.todoList.filter(item => item.isDone === false).length
  }
  const isCompletedTaskExists = tasks.todoList.some(task => task.isDone)

  const addTaskForm = cx({
    [s["add-task"]]: true,
    [s["got-items"]]: tasks.todoList.length > 0
  })
  const downMenuShow = cx({
    [s["down-menu"]]: true,
    [s["show"]]: tasks.todoList.length > 0
  })

  return (
    <div className={s.container}>
      <Header />
      <div className={s.form}>
        <section className={addTaskForm}>
          <div className={s["box"]}>
            <CustomCheckboxAllTasks tasks={tasks.todoList} onClickHandler={changeAllTasksStatus} />
            <Input
              className={cx(s["add-task__input"], s["italic"])}
              placeholder={'What needs to be done?'}
              type={'text'}
              value={taskTitle}
              onChange={setTaskTitleHandler}
              onKeyDown={(event) => event.key === "Enter" && addTaskHandler()}
              onBlur={addTaskHandler}
            />
            <Button
              className={s.button}
              onClick={() => addTaskHandler()}
              title={'+'} />
          </div>
          <div>
            <ul className={s.list}>
               {tasks.todoList.filter(task => taskFilter(task, tasks.activeFilter)).map((task) => {
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
          <div className={downMenuShow}>
            <div>
              <span className={s.count}>{count()} item left</span>
            </div>
            <div className={s["btn-container"]}>
              <Button
                className={cx(s["filter-btn"], { [s["btn-focus"]]: tasks.activeFilter === 'all' })}
                onClick={() => changeTodoListFilter("all")}
                title={'All'} />
              <Button
                className={cx(s["filter-btn"], { [s["btn-focus"]]: tasks.activeFilter === 'active' })}
                onClick={() => changeTodoListFilter("active")}
                title={'Active'} />
              <Button
                className={cx(s["filter-btn"], { [s["btn-focus"]]: tasks.activeFilter === 'completed' })}
                onClick={() => changeTodoListFilter("completed")}
                title={'Complete'} />
            </div>
            {isCompletedTaskExists
              ?
              <Button className={s["clear-btn"]}
                onClick={deleteAllTAsksComplete}
                title={'Clear completed'} />
              :
              <div className={s["clear-btn"]}></div>}
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(HomePage);
