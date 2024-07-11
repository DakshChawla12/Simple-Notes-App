import { useSelector , useDispatch } from "react-redux";
import Note from "../components/Note.jsx";

const Personal = () =>{

    const noteslist = useSelector(store => store.personal);

    return (<div className="personal">
        <div className="NotesList">
            {noteslist.map(note => <Note key={note.id} note={note} />)}
        </div>
    </div>);

}

export default Personal;