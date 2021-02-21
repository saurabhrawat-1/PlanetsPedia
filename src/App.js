import React, { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/favourite">
            <Navbar hide="true" />
            <Favourites />
          </Route>
          <Route path="/">
            <Navbar />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
