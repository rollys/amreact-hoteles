import React, { Component } from 'react'

class ListadoHotel extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            HOTELES
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto"></div>
            <form className="form-inline my-2 my-lg-0">
              <span className="mr-3">Administrador</span>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Cerrar sesión
              </button>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="text-center m-4">
            <h1 className="d-inline-block">
              <span className="badge badge-secondary">LISTADO DE HOTELES</span>
            </h1>
            <button
              type="button"
              className="btn btn-outline-primary float-right"
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}>
              Agregar Hotel
            </button>
          </div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio (S/)</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Los Delfines</td>
                <td>350</td>
                <td className='text-center'>
                  <button type="button" className="btn btn-warning">
                    Editar
                  </button>
                  <button type="button" className="btn btn-danger ml-3">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Las Palmeras</td>
                <td>60</td>
                <td className='text-center'>
                  <button type="button" className="btn btn-warning">
                    Editar
                  </button>
                  <button type="button" className="btn btn-danger ml-3">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Risso</td>
                <td>100</td>
                <td className='text-center'>
                  <button type="button" className="btn btn-warning">
                    Editar
                  </button>
                  <button type="button" className="btn btn-danger ml-3">
                    Eliminar
                  </button>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListadoHotel
