import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import Project from "./pages/Projects";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Switch />
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
      <Switch />
    </>
  );
}

export default App;
