import { FilterValues, TaskStateItems } from './types';

export type RemoveTask = {
  type: 'REMOVE-TASK';
  payload: { taskId: string };
};
export type AddTask = {
  type: 'ADD-TASK';
  payload: { task: TaskStateItems };
};
export type ChangeTaskStatus = {
  type: 'CHANGE-TASK-STATUS';
  payload: { taskId: string; isDone: boolean };
};
export type ChangeTaskTitle = {
  type: 'CHANGE-TASK-TITLE';
  payload: { taskId: string; title: string };
};
export type ChangeAllTaskStatus = {
  type: 'CHANGE-ALL-TASK-STATUS';
  payload: undefined;
};
export type RemoveAllTasksComplete = {
  type: 'REMOVE-ALL-TASKS-COMPLETE';
  payload: undefined;
};
export type ChangeTodolistFilter = {
  type: 'CHANGE-FILTER';
  payload: FilterValues;
};

export type InitTodosFromStorage = {
  type: 'INIT-TODOS-FROM-STORAGE';
  payload: TaskStateItems[];
};

export type Actions =
  | ChangeTaskStatus
  | ChangeTaskTitle
  | RemoveTask
  | AddTask
  | ChangeAllTaskStatus
  | RemoveAllTasksComplete
  | ChangeTodolistFilter
  | InitTodosFromStorage;

export const removeTaskAC = (payload: { taskId: string }): RemoveTask => {
  return {
    type: 'REMOVE-TASK',
    payload,
  };
};
export const addTaskAC = (payload: { task: TaskStateItems }): AddTask => {
  return {
    type: 'ADD-TASK',
    payload,
  };
};
export const changeTaskStatusAC = (payload: {
  taskId: string;
  isDone: boolean;
}): ChangeTaskStatus => ({
  type: 'CHANGE-TASK-STATUS',
  payload,
});
export const changeTaskTitleAC = (payload: {
  taskId: string;
  title: string;
}): ChangeTaskTitle => ({
  type: 'CHANGE-TASK-TITLE',
  payload,
});
export const changeAllTaskStatusAC = (): ChangeAllTaskStatus => {
  return {
    type: 'CHANGE-ALL-TASK-STATUS',
    payload: undefined,
  };
};
export const removeAllTasksCompleteAC = (): RemoveAllTasksComplete => {
  return {
    type: 'REMOVE-ALL-TASKS-COMPLETE',
    payload: undefined,
  };
};

export const changeTodolistFilterAC = (
  filter: FilterValues
): ChangeTodolistFilter => {
  return {
    type: 'CHANGE-FILTER',
    payload: filter,
  };
};

export const InitTodosFromStorageAC = (
  tasks: TaskStateItems[]
): InitTodosFromStorage => ({
  type: 'INIT-TODOS-FROM-STORAGE',
  payload: tasks,
});
