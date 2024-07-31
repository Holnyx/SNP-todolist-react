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
