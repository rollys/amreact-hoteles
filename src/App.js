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
import firebase from 'firebase/app'
import firebaseConfig from './constants/firebase-config'

class App extends Component {
  constructor() {
    super()
    firebase.initializeApp(firebaseConfig)
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
          <Route
            path="/register"
            render={() => {
              const email = 'admin@hoteles.com'
              const password = '123456'
              const displayName = 'Administrador'
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(result => {
                  return result.user.updateProfile({
                    displayName,
                  })
                })
                .catch(error => {
                  console.log(error)
                })
              return <div>Registrando administrador</div>
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
