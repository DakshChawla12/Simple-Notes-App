import { createSlice } from '@reduxjs/toolkit';

const miscSlice = createSlice({
    name:"misc",
    initialState:[],
    reducers:{
        addToMisc: (state, action) => {
            const { id, text} = action.payload;
            state.push({ id, text });
        },
        deleteFromMisc: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        }
    }
});

export const miscActions = miscSlice.actions;
export default miscSlice;