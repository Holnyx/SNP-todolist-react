import { createSelector } from "reselect";

export const getTasks = (state) => state.tasks
export const getTaskFilter = (state) => state.activeFilter

export const getTasksForTodoList = createSelector(
  [getTasks, getTaskFilter],
  (tasks, filter) => {
    if (filter === 'active') {
      return tasks.filter(task => !task.isDone);
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.isDone);
    }
    return tasks;
  }
);
