import { createSlice, configureStore } from '@reduxjs/toolkit';
import personalSlice from './personal';
import workSlice from './Work';
import miscSlice from './misc';

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



const notesStore = configureStore({
    reducer: {
        notes: noteSlice.reducer,
        personal: personalSlice.reducer,
        work: workSlice.reducer,
        misc: miscSlice.reducer
    }
});

export const notesActions = noteSlice.actions;
export default notesStore;
