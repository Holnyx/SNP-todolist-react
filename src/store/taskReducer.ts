import {
  TaskState,
} from '@/pages/HomePage/HomePage';
import { Actions } from './actions';


const initialState: TaskState = {
  todoList: [],
  activeFilter: 'all',
};

const tasksReducer = (
  state: TaskState = initialState,
  action: Actions
): TaskState => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      return {
        ...state,
        todoList: state.todoList.filter(
          task => task.id !== action.payload.taskId
        ),
      };
    }
    case 'ADD-TASK': {
      return {
        ...state,
        todoList: [action.payload.task, ...state.todoList],
      };
    }
    case 'CHANGE-TASK-STATUS': {
      return {
        ...state,
        todoList: state.todoList.map(task =>
          task.id === action.payload.taskId
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    }
    case 'CHANGE-TASK-TITLE': {
      return {
        ...state,
        todoList: state.todoList.map(task =>
          task.id === action.payload.taskId
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
    }
    case 'CHANGE-ALL-TASK-STATUS': {
      const allDone = state.todoList.every(task => task.isDone);
      return {
        ...state,
        todoList: state.todoList.map(task => ({
          ...task,
          isDone: !allDone,
        })),
      };
    }
    case 'REMOVE-ALL-TASKS-COMPLETE': {
      return {
        ...state,
        todoList: state.todoList.filter(task => !task.isDone),
      };
    }
    case 'CHANGE-FILTER': {
      return { ...state, activeFilter: action.payload };
    }
    default:
      return state;
  }
};

export default tasksReducer;
