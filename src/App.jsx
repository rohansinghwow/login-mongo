import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
    
    <Router>
        <Switch>
        <Route exact path="/">
        <Welcome/>
        </Route>
          <Route  path="/register">
            <Register />
          </Route>
        </Switch>
      
    </Router>
    </>
  );
}
