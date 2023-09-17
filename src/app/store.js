import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../feature/menuSlice';

export const store = configureStore({
    reducer: { button: buttonReducer },
});
