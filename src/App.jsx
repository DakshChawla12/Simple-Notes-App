import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import NotesList from "./components/NotesList";
import SideBar from "./components/SideBar.jsx";
import Personal from "./pages/Personal.jsx";
import Misc from "./pages/Misc.jsx";
import Work from "./pages/Work.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [selectedTab,setSelectedTab] = useState("Home");

  return (
    <div className="container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Routes>
        <Route path="/"
          element={
            <div className="main-content">
              <Header />
              <Input />
              <NotesList />
            </div>
          }
        />
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/misc" element={<Misc/>}/>
      </Routes>
    </div>
  );
};

export default App;
