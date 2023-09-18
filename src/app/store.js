import { configureStore } from '@reduxjs/toolkit';
import inboxReducer from '../feature/inboxSlice';

export const store = configureStore({
    reducer: { messages: inboxReducer },
});
