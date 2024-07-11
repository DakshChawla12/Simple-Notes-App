import { useSelector , useDispatch } from "react-redux";
import Note from "../components/Note.jsx";

const Work = () =>{

    const noteslist = useSelector(store => store.work);

    return (<div className="work">
        <center className="header">
            <h1>Work</h1>
        </center>
        <div className="NotesList">
            {noteslist.map(note => <Note key={note.id} note={note} />)}
        </div>
    </div>);

}

export default Work;