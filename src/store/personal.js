import { createSlice } from '@reduxjs/toolkit';

const personalSlice = createSlice({
    name:"personal",
    initialState:[],
    reducers:{
        addToPersonal: (state, action) => {
            const { id, text} = action.payload;
            state.push({ id, text });
        },
        deleteFromPersonal: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        }
    }
});

export const personalActions = personalSlice.actions;
export default personalSlice;