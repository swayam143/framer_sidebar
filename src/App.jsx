import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analaytics from "./pages/Analaytics";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Message from "./pages/Message";
import Users from "./pages/Users";
import FileManager from "./pages/FileManager";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analaytics />} />
            <Route path="/message" element={<Message />} />
            <Route path="/user" element={<Users />} />
            <Route path="/file" element={<FileManager />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default App;
