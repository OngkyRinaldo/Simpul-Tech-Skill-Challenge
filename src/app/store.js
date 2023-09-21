import { configureStore } from '@reduxjs/toolkit';
import inboxReducer from '../feature/inboxSlice';
import taskReducer from '../feature/taskSlice';

export const store = configureStore({
    reducer: { users: inboxReducer, tasks: taskReducer },
});
