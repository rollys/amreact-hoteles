import React, { PureComponent } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Titulo from '../../components/titulo'
import Error from '../../components/error'
import { ADMIN as ROUTEADMIN } from '../../constants/routes'
import { cities } from '../../constants/cities'
import { TABLE_HOTELS } from '../../constants/tables'
import AdminLayout from '../layout/admin'

class NuevoHotel extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
    this.db = firebase.firestore()
    this.inputName = React.createRef()
    this.inputPrice = React.createRef()
    this.selectCity = React.createRef()
    this.inputAddress = React.createRef()
    this.textareaDescription = React.createRef()
    this.inputUrlImage = React.createRef()
  }

  addHotel = () => {
    const hotel = {
      name: this.inputName.current.value,
      price: this.inputPrice.current.value,
      city: this.selectCity.current.value,
      address: this.inputAddress.current.value,
      description: this.textareaDescription.current.value,
      url_image: this.inputUrlImage.current.value,
    }
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

  validationData = () => {
    if (
      this.inputName.current.value === '' ||
      this.inputPrice.current.value === '' ||
      this.selectCity.current.value === '' ||
      this.inputAddress.current.value === '' ||
      this.textareaDescription.current.value === '' ||
      this.inputUrlImage.current.value === ''
    ) {
      this.setState({
        hasError: true,
      })
      return false
    }
    this.setState({
      hasError: false,
    })
    return true
  }

  handleClick = () => {
    if (this.validationData()) {
      this.addHotel()
    }
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    return nextState.hasError !== this.state.hasError
  } */

  render() {
    console.log('---> render')
    return (
      <AdminLayout>
        <Titulo title="NUEVO HOTEL" />
        <form>
          <Error
            hasError={this.state.hasError}
            msgError="Llene todo los campos!!!"
          />
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={this.inputName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio (S/)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              ref={this.inputPrice}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <select className="form-control" name="city" ref={this.selectCity}>
              <option value="">- Seleccione ciudad -</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="address"
              ref={this.inputAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              ref={this.textareaDescription}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="url_image">Url de Imagen</label>
            <input
              type="text"
              className="form-control"
              name="url_image"
              ref={this.inputUrlImage}
            />
          </div>
          <div className="form-group text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClick}>
              Guardar
            </button>
          </div>
        </form>
      </AdminLayout>
    )
  }
}

export default NuevoHotel
