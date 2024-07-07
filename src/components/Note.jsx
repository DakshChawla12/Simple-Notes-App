import { useDispatch , useSelector } from "react-redux";
import { notesActions } from "../store";


const Note = ({ note }) => {

    const dispatch = useDispatch();

    const handleOnDelete = (Id) => {
        dispatch(notesActions.deleteNote({ id: note.id }));
    }

    return (<>
        <div className="Note">
            <h5>{note.importance}</h5>
            <p className="text">{note.text}</p>
            <button className="btn btn-danger delete" onClick={() => { handleOnDelete(note.id) }}>delete</button>
        </div>
    </>);

};

export default Note;