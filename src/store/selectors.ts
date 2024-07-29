import { createSelector } from 'reselect';
import { AppRootStateItems } from '.';

const rootSelector = createSelector(
  (state: AppRootStateItems) => state,
  state => state.tasks
);
export const getTasksSelector = createSelector(
  rootSelector,
  state => state.todoList
);
export const getTaskFilterSelector = createSelector(
  rootSelector,
  state => state.activeFilter
);

export const getTasksForTodoListSelector = createSelector(
  [getTasksSelector, getTaskFilterSelector],
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

export const count = createSelector([getTasksSelector], tasks => {
  return tasks.filter(item => item.isDone === false).length;
});
