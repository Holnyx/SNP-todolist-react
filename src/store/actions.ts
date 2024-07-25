import { FilterValues, TaskStateItems } from "@/pages/HomePage/HomePage";

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
  };
  export type RemoveAllTasksComplete = {
    type: 'REMOVE-ALL-TASKS-COMPLETE';
  };
  export type ChangeTodolistFilter = {
    type: 'CHANGE-FILTER';
    payload: FilterValues;
  };

  export type Actions =
  | ChangeTaskStatus
  | ChangeTaskTitle
  | RemoveTask
  | AddTask
  | ChangeAllTaskStatus
  | RemoveAllTasksComplete
  | ChangeTodolistFilter;

export const removeTaskAC = (taskId: string): RemoveTask => {
  return {
    type: 'REMOVE-TASK',
    payload: { taskId },
  };
};
export const addTaskAC = (task: TaskStateItems): AddTask => {
  return {
    type: 'ADD-TASK',
    payload: { task },
  };
};
export const changeTaskStatusAC = (
  taskId: string,
  isDone: boolean
): ChangeTaskStatus => {
  return {
    type: 'CHANGE-TASK-STATUS',
    payload: { taskId, isDone },
  };
};
export const changeTaskTitleAC = (
  taskId: string,
  title: string
): ChangeTaskTitle => {
  return {
    type: 'CHANGE-TASK-TITLE',
    payload: { taskId, title },
  };
};
export const changeAllTaskStatusAC = (): ChangeAllTaskStatus => {
  return {
    type: 'CHANGE-ALL-TASK-STATUS',
  };
};
export const removeAllTasksCompleteAC = (): RemoveAllTasksComplete => {
  return {
    type: 'REMOVE-ALL-TASKS-COMPLETE',
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
