import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";

const NotesList = () => {

    const noteslist = useSelector(store => store.notes);

    return (<>
        <div className="NotesList">
            {noteslist.map(note => <Note key={note.id} note={note} />)}
        </div>
    </>);

};

export default NotesList;