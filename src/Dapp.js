import React from 'react'
import Home from './components/Home'
import ProfilParticuliers from './components/espace_particulier/ProfilParticulier'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilVeterinaire from './components/espace_veterinaire/ProfilVeterinaire'
import RechercheAnimal from './components/espace_veterinaire/RechercheAnimal'
import Admin from './components/Admin'
import ModificationAnimal from './components/espace_veterinaire/ModificationAnimal'
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
        <Route path="/recherche_animal" exact component={RechercheAnimal} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/modification_animal" exact component={ModificationAnimal} />
        <Route path="/ajout_animal" exact component={AjoutAnimal} />
      </Switch>
    </Router>
  )
}

export default Dapp
