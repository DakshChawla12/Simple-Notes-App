import { createSlice, configureStore } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            const { id, text, importance } = action.payload;
            state.push({ id, text, importance });
        },
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        }
    }
});

const importanceSlice = createSlice({
    name:'importance',
    initialState:"",
    reducers:{
        setImportance: (state,action) =>{
            console.log(state,action.payload);
            return state = action.payload;
        }
    }
});

const notesStore = configureStore({
    reducer: {
        notes: noteSlice.reducer,
    }
});

export const notesActions = noteSlice.actions;
export default notesStore;
