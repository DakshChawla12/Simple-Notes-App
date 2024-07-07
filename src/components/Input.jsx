import { useRef } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../store";
import { FaStar } from "react-icons/fa";

const Input = () => {

    const text = useRef();

    const dispatch = useDispatch();

    const handleOnSave = (importance) => {
        const noteId = Math.floor(Math.random() * 100) + 1;
        const noteText = text.current.value;

        dispatch(notesActions.addNote({ id: noteId, text: noteText, importance }));
        text.current.value = '';
    };

    return (<center className="inputBox">
        <label htmlFor="input" className="label">Enter here : </label>
        <textarea name="" id="input" className="input" ref={text}></textarea>
        <div className="btn-container">
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("not much important")}><FaStar /></button>
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("fairly important")}><FaStar /> <FaStar /></button>
            <button type="button" className="btn btn-success save" onClick={() => handleOnSave("very important")}><FaStar /> <FaStar /> <FaStar /></button>
        </div>
    </center>);

};

export default Input;