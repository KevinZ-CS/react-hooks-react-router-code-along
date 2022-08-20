import React from "react";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route } from 'react-router-dom';



function App() {
  return (
  <div>
    <NavBar />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
  </div>
  );
}

export default App


