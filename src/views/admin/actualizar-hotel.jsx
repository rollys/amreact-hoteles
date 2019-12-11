import React, { Component } from 'react'
import AdminLayout from '../layout/admin'
import Titulo from '../../components/titulo'
import Formulario from '../../components/formulario'
import { ADMIN as ROUTEADMIN } from '../../constants/routes'
import { TABLE_HOTELS } from '../../constants/tables'
import firebase from 'firebase/app'
import 'firebase/firestore'

class ActualizarHotel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotel: {},
    }
    this.db = firebase.firestore()
    this.getHotelBydId(this.props.match.params.id)
  }

  getHotelBydId = id => {
    // this.db.collection(TABLE_HOTELS).where('name', '==', 'Los Delfines')
    this.db
      .collection(TABLE_HOTELS)
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Datos del hotel:', doc.data())
          this.setState({
            hotel: doc.data(),
          })
        } else {
          // doc.data() will be undefined in this case
          console.log('Hotel no encontrado!')
          this.props.history.push(ROUTEADMIN)
        }
      })
      .catch(error => {
        console.log('Error getting document:', error)
      })
  }

  updateHotel = ({ id, hotel }) => {
    this.db
      .collection(TABLE_HOTELS)
      .doc(this.props.match.params.id)
      .update(hotel)
      .then(docRef => {
        this.props.history.push(ROUTEADMIN)
      })
      .catch(error => {
        console.error('Error update document: ', error)
      })

    console.log(hotel)
  }
  render() {
    console.log('333', this.state.hotel)
    return (
      <AdminLayout {...this.props}>
        <Titulo title="ACTUALIZAR HOTEL" />
        <Formulario callback={this.updateHotel} hotel={this.state.hotel} />
      </AdminLayout>
    )
  }
}

export default ActualizarHotel
