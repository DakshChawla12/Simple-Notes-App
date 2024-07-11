import { useRef } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../store";
import { FaStar } from "react-icons/fa";
import { personalActions } from "../store/personal";
import { workSliceActions } from "../store/Work";
import { miscActions } from "../store/misc";

const Input = () => {

    const text = useRef();

    const dispatch = useDispatch();

    const handleOnSave = (category) => {
        const noteId = Math.floor(Math.random() * 100) + 1;
        const noteText = text.current.value;

        dispatch(notesActions.addNote({ id: noteId, text: noteText }));
        text.current.value = '';

        if(category === "personal"){
            dispatch(personalActions.addToPersonal({ id: noteId, text: noteText }));
        }
        else if(category === "work"){
            dispatch(workSliceActions.addToWork({ id: noteId, text: noteText }));
        }
        else if(category === "misc"){
            dispatch(miscActions.addToMisc({ id: noteId, text: noteText }))
        }
    };

    return (<center className="inputBox">
        <label htmlFor="input" className="label">Enter here : </label>
        <textarea name="" id="input" className="input" ref={text}></textarea>
        <div className="btn-container">
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("personal")}>personal</button>
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("work")}>work</button>
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("misc")}>miscellaneous</button>
        </div>
    </center>);

};

export default Input;