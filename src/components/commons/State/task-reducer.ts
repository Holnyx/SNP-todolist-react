import { TaskStateItems } from '@/pages/HomePage/HomePage';
import { v1 as uuidv1 } from 'uuid';

export type RemoveTask = {
  type: 'REMOVE-TASK';
  payload: { taskId: string };
};
export type AddTask = {
  type: 'ADD-TASK';
  payload: { title: string };
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

const initialState: TaskStateItems[] = [];

const tasksReducer = (
  state: TaskStateItems[] = initialState,
  action: Actions
): TaskStateItems[] => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return state.filter(task => task.id !== action.payload.taskId);
    }
    case 'ADD-TASK': {
      const newTask: TaskStateItems = {
        id: uuidv1(),
        title: action.payload.title,
        isDone: false,
      };
      return [newTask, ...state];
    }
    case 'CHANGE-TASK-STATUS': {
      return state.map(task =>
        task.id === action.payload.taskId
          ? { ...task, isDone: !task.isDone }
          : task
      );
    }
    case 'CHANGE-TASK-TITLE': {
      return state.map(task =>
        task.id === action.payload.taskId
          ? { ...task, title: action.payload.title }
          : task
      );
    }
    case 'CHANGE-ALL-TASK-STATUS': {
      const allDone = state.every(task => task.isDone);
      return state.map(t => ({
        ...t,
        isDone: !allDone,
      }));
    }
    case 'REMOVE-ALL-TASKS-COMPLETE': {
      return state.filter(t => !t.isDone);
    }
    default:
      return state;
  }
};

type Actions =
  | ChangeTaskStatus
  | ChangeTaskTitle
  | RemoveTask
  | AddTask
  | ChangeAllTaskStatus
  | RemoveAllTasksComplete;

export const removeTaskAC = (taskId: string): RemoveTask => {
  return {
    type: 'REMOVE-TASK',
    payload: { taskId },
  };
};
export const addTaskAC = (title: string): AddTask => {
  return {
    type: 'ADD-TASK',
    payload: { title },
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

export default tasksReducer;
