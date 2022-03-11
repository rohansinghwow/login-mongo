import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

export const CredentialContext = React.createContext()

export default function App() {
    
  const [cred,setCred] = React.useState({
    username : null,
    password : null
  })
  return (
    <Router>
    <Switch>
          <Route exact path="/"><Welcome credVal={cred.username}/></Route>
          <Route exact path="/register"><Register credSetup={setCred}/></Route> 
     </Switch>
     </Router>
  );
}
