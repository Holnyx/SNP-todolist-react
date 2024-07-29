import { combineReducers, legacy_createStore } from 'redux';
import tasksReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = legacy_createStore(rootReducer);
export type AppRootStateItems = ReturnType<typeof rootReducer>;

export default store;
