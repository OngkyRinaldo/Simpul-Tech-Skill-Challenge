import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: '109220-Naturalization',
        date: 'January 1, 2023',
        time: '19:10',
        user: 'Cameron Phillips',
        messages: ' Please Check This Out!',
    },
    {
        id: '2',
        title: 'Jeannetter Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up -Brief Service] ',
        date: '02/06/2021',
        time: '10:45',
        user: 'Ellen',
        messages: 'Hey, please read.',
    },
    {
        id: '3',
        title: '8405-Diana SALAZAR MUNGUIA ',
        date: '01/06/2021',
        time: '12:19',
        user: 'Cameron Phillips',
        messages:
            'I understand your initial concerns and thats very valid, But you...',
    },
    {
        id: '4',
        title: 'FastVisa Support ',
        date: '01/06/2021',
        time: '12:19',
        user: 'Cameron Phillips',
        messages: 'Hey there! Welcome to your inbox',
    },
];

const inboxSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
});

export const selectAllMessages = (state) => state.messages;
export default inboxSlice.reducer;
