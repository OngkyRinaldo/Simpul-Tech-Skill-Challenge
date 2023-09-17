import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showButtons: false,
};

const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        toggleButtons: (state) => {
            state.showButtons = !state.showButtons;
        },
    },
});

export const { toggleButtons } = buttonSlice.actions;

export default buttonSlice.reducer;
