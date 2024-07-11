import { useSelector , useDispatch } from "react-redux";
import Note from "../components/Note.jsx";

const Work = () =>{

    const noteslist = useSelector(store => store.work);

    return (<div className="work">
        <div className="NotesList">
            {noteslist.map(note => <Note key={note.id} note={note} />)}
        </div>
    </div>);

}

export default Work;