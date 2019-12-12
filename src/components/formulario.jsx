import React, { Component } from 'react'
import Error from '../components/error'
import { cities } from '../constants/cities'

class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      hotel: {
        name: '',
        price: '',
        city: '',
        address: '',
        description: '',
        url_image: '',
      },
    }
    this.inputName = React.createRef()
    this.inputPrice = React.createRef()
    this.selectCity = React.createRef()
    this.inputAddress = React.createRef()
    this.textareaDescription = React.createRef()
    this.inputUrlImage = React.createRef()
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
      const hotel = {
        name: this.inputName.current.value,
        price: this.inputPrice.current.value,
        city: this.selectCity.current.value,
        address: this.inputAddress.current.value,
        description: this.textareaDescription.current.value,
        url_image: this.inputUrlImage.current.value,
      }
      this.props.callback({ hotel })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ hotel: nextProps.hotel })
  }

  onChange(fieldName) {
    return event => {
      this.setState({
        hotel: { ...this.state.hotel, [fieldName]: event.target.value },
      })
    }
  }

  render() {
    const {
      name,
      price,
      city: cityHotel,
      address,
      description,
      url_image,
    } = this.state.hotel
    return (
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
            value={name}
            onChange={this.onChange('name')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio (S/)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            ref={this.inputPrice}
            value={price}
            onChange={this.onChange('price')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ciudad</label>
          <select className="form-control" name="city" ref={this.selectCity} onChange={this.onChange('city')} >
            <option value="">- Seleccione ciudad -</option>
            {cities.map(city => (
              <option key={city} value={city} selected={city === cityHotel}>
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
            value={address}
            onChange={this.onChange('address')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            ref={this.textareaDescription}
            value={description}
            onChange={this.onChange('description')}
            ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="url_image">Url de Imagen</label>
          <input
            type="text"
            className="form-control"
            name="url_image"
            ref={this.inputUrlImage}
            value={url_image}
            onChange={this.onChange('url_image')}
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
    )
  }
}

export default Formulario
