import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Vista admin
import Login from './views/login'
import ListadoHotel from './views/admin/listado-hotel'
import NuevoHotel from './views/admin/nuevo-hotel'
import ActualizarHotel from './views/admin/actualizar-hotel'
//Vista usuario final
import Buscador from './views/buscador'
import DetalleHotel from './views/detalle-hotel'
//Firebase
// import firebase from 'firebase' // importa todo los paquetes
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './constants/firebase-config'

let db = {}
class App extends Component {
  constructor() {
    super()
    firebase.initializeApp(firebaseConfig)
    db = firebase.firestore()
    this.addHotel()
  }

  addHotel = hotel => {
    db.collection('users')
      .add({
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Buscador} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={ListadoHotel} />
          <Route path="/admin/hotel/new" component={NuevoHotel} />
          <Route path="/admin/hotel/update/:id" component={ActualizarHotel} />
          <Route path="/hotel/:id" component={DetalleHotel} />
        </Switch>
      </Router>
    )
  }
}

export default App
