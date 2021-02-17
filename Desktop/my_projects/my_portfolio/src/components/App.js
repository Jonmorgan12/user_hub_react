import React from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
