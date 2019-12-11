import React, { PureComponent } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Titulo from '../../components/titulo'
import Formulario from '../../components/formulario'
import { ADMIN as ROUTEADMIN } from '../../constants/routes'
import { TABLE_HOTELS } from '../../constants/tables'
import AdminLayout from '../layout/admin'

class NuevoHotel extends PureComponent {
  constructor(props) {
    super(props)
    this.db = firebase.firestore()
  }

  addHotel = ({ hotel }) => {
    this.db
      .collection(TABLE_HOTELS)
      .add(hotel)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
        this.props.history.push(ROUTEADMIN)
      })
      .catch(error => {
        console.error('Error adding document: ', error)
      })
    console.log(hotel)
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    return nextState.hasError !== this.state.hasError
  } */

  render() {
    console.log('---> render')
    return (
      <AdminLayout>
        <Titulo title="NUEVO HOTEL" />
        <Formulario callback={this.addHotel} />
      </AdminLayout>
    )
  }
}

export default NuevoHotel
