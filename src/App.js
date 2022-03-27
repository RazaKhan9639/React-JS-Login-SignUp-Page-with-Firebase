import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Todo/>} />

        <Route path="/Login" element={<Login/>} />

        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
