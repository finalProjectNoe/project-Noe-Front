import React from 'react'
import Home from './components/Home'
import LoginVeterinaire from './components/espace_veterinaire/LoginVeterinaire'
import LoginParticuliers from './components/espace_particulier/LoginParticuliers'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/veterinaire" exact component={LoginVeterinaire} />
        <Route path="/particulier" exact component={LoginParticuliers} />
      </Switch>
    </Router>
  )
}

export default App
