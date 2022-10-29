import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, } from "react-router-dom";
import './App.css'
// pages
import Home from "./Components/Home";
import Users from "./Components/Users";
import About from "./Components/About";
import User from "./Components/User";
import Error404 from "./Components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="users/*" element={<Users />}>
            <Route path={':id'} element={<User />}/>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
