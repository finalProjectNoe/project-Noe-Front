import React from 'react'
import Home from './components/Home'
import ProfilParticuliers from './components/espace_particulier/ProfilParticulier'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilVeterinaire from './components/espace_veterinaire/ProfilVeterinaire'
import Admin from './components/Admin'
import AjoutAnimal from './components/espace_veterinaire/AjoutAnimal'
import Register from './components/Register'


function Dapp() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/profil_particulier" exact component={ProfilParticuliers} />
        <Route path="/profil_veterinaire" exact component={ProfilVeterinaire} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/ajout_animal" exact component={AjoutAnimal} />
      </Switch>
    </Router>
  )
}

export default Dapp
