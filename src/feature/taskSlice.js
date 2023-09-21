import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

const fetchTaskDataLocally = createAsyncThunk(
    'tasks/fetchTaskDataLocally',
    async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const data = [
                {
                    id: 1,
                    title: 'Close off Case #012920- RODRIGUES, Amiguel',
                    deadlineDate: '2 Days Left',
                    date: '12/06/2021',
                    task: 'Closing off this case since this application has been cancelled. No one really understands how this case could possibly be cancelled. The options and the documents within this document were totally guaranteed for success!',
                },
            ];
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return data;
        } catch (error) {
            throw error;
        }
    }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskDataLocally.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTaskDataLocally.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTaskDataLocally.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export { fetchTaskDataLocally };

export const selectAllTaskData = (state) => state.tasks.items;
export const selectStatusTaskData = (state) => state.tasks.status;

export default taskSlice.reducer;
