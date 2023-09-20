import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(apiUrl);
    return response.data;
});

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

const inboxSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllUserData = (state) => state.users.items;
export const selectStatusUserData = (state) => state.users.status;

export default inboxSlice.reducer;
