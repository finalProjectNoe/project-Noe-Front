
import React from 'react'
import Home from './components/Home'
import LoginVeterinaire from './components/espace_veterinaire/LoginVeterinaire'
import LoginParticuliers from './components/espace_particulier/LoginParticuliers'
import ProfilParticuliers from './components/espace_particulier/ProfilParticulier'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilVeterinaire from './components/espace_veterinaire/ProfilVeterinaire'


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/veterinaire" exact component={LoginVeterinaire} />
        <Route path="/particulier" exact component={LoginParticuliers} />
        <Route path="/profil_particulier" exact component={ProfilParticuliers} />
        <Route path="/profil_veterinaire" exact component={ProfilVeterinaire} />
      </Switch>
    </Router>
  )
}

export default App
