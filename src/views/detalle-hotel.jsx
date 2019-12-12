import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FrontLayout from './layout/front'
import { TABLE_HOTELS } from '../constants/tables'
import { HOME as ROUTESHOME } from '../constants/routes'
import firebase from 'firebase/app'
import 'firebase/firestore'

class DetalleHotel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotel: {},
    }
    this.db = firebase.firestore()
    this.getHotelBydId(this.props.match.params.id)
  }

  getHotelBydId = id => {
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
          this.props.history.push(ROUTESHOME)
        }
      })
      .catch(error => {
        console.log('Error getting document:', error)
      })
  }

  render() {
    const { name, price, description, city, url_image, address } = this.state.hotel
    return (
      <FrontLayout className="jumbotron container w-75">
        <img src={url_image} className="card-img-top" alt="..." />
        <div className="card text-center">
          <div className="card-header">
            <strong>{name}</strong>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>Ciudad:</strong> {city}, <strong>Dirección:</strong>{' '}
              {address}, <strong>Precio:</strong> S/ {price}
            </h5>
            <p className="card-text">{description}</p>
            <Link to="/" className="btn btn-primary">
              Regresar al buscador
            </Link>
          </div>
        </div>
      </FrontLayout>
    )
  }
}

export default DetalleHotel
