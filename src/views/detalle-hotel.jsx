import React, { Component } from 'react'
import FrontLayout from './layout/front'

class DetalleHotel extends Component {
  render() {
    return (
      <FrontLayout className="jumbotron container w-75">
        <img src="https://fakeimg.pl/500x250/" class="card-img-top" alt="..." />
        <div class="card text-center">
          <div class="card-header">
            <strong>Hotel Los Delfines</strong>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <strong>Ciudad:</strong> Lima , <strong>Dirección:</strong> Av.
              Juan de Aliaga , <strong>Precio:</strong> S/ 350
            </h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non mi vel tortor efficitur scelerisque at non ex. Donec eget
              fringilla ex. Quisque neque nulla, sodales quis purus sit amet,
              varius bibendum augue. Ut ut lacus eleifend, finibus velit sit
              amet, gravida lorem. Etiam lobortis consequat turpis facilisis
              blandit. Maecenas ullamcorper nibh sit amet sapien eleifend
              interdum. Pellentesque nisi turpis, iaculis consectetur imperdiet
              vestibulum, molestie sit amet arcu. Morbi ultrices imperdiet
              faucibus. Aliquam ac dictum nisl, volutpat auctor sem. Praesent
              molestie maximus neque, et euismod elit condimentum vitae.
              Pellentesque id nisl mi. Duis augue lorem, feugiat eu tincidunt
              quis, accumsan vel lacus. Praesent tortor sem, rhoncus eu quam a,
              euismod interdum tortor.
            </p>
            <a href="/" class="btn btn-primary">
              Regresar al buscador
            </a>
          </div>
        </div>
      </FrontLayout>
    )
  }
}

export default DetalleHotel
