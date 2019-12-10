import React, { Component } from 'react'
import FrontLayout from './layout/front'

class Buscador extends Component {
  render() {
    return (
      <FrontLayout>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name="search" />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              name="btn-search">
              Buscar
            </button>
          </div>
        </div>
        <div className="card-deck justify-content-center">
          {[1, 2, 3, 4, 5, 6].map(item => {
            return (
              <div
                class="card"
                style={{
                  minWidth: '18rem',
                  maxWidth: '18rem',
                  marginBottom: 10,
                }}>
                <img
                  src="https://fakeimg.pl/250x100/"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-header text-center">
                  <strong>Hotel Los Delfines</strong>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-success">
                      <strong>Ciudad:</strong> Lima
                    </li>
                    <li class="list-group-item list-group-item-warning">
                      <strong>Dirección:</strong> Av. Juan de Aliaga
                    </li>
                    <li class="list-group-item list-group-item-info">
                      <strong>Precio:</strong> S/ 350
                    </li>
                  </ul>
                </div>
                <div class="card-footer text-center">
                  <button type="button" class="btn btn-success">
                    Ver
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </FrontLayout>
    )
  }
}

export default Buscador
