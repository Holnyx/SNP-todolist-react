import { createSelector } from 'reselect';
import { AppRootStateItems } from '.';

const rootSelector = createSelector(
  (state: AppRootStateItems) => state,
  state => state.tasks
);
export const tasksSelector = createSelector(
  rootSelector,
  state => state.todoList
);
export const tasksFilterSelector = createSelector(
  rootSelector,
  state => state.activeFilter
);

export const tasksForTodoListSelector = createSelector(
  [tasksSelector, tasksFilterSelector],
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

export const countSelector = createSelector([tasksSelector], tasks => {
  return tasks.filter(item => item.isDone === false).length;
});
