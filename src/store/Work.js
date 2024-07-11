import { createSlice } from '@reduxjs/toolkit';

const workSlice = createSlice({
    name:"work",
    initialState:[],
    reducers:{
        addToWork: (state, action) => {
            const { id, text} = action.payload;
            state.push({ id, text });
        },
        deleteFromWork: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        }
    }
});

export const workSliceActions = workSlice.actions;
export default workSlice;