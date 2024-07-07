import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import NotesList from "./components/NotesList";
import { useReducer } from "react";

const App = () => {

  // const [importance , dispatchImportance] = useReducer(importanceReducer , "");

  return (<>
    <Header />
    <Input />
    <NotesList />
  </>);
}

export default App;