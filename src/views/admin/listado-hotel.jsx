import React, { Component } from 'react'
import AdminLayout from '../layout/admin'

class ListadoHotel extends Component {
  render() {
    return (
      <AdminLayout>
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
              <td className="text-center">
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
              <td className="text-center">
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
              <td className="text-center">
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
      </AdminLayout>
    )
  }
}

export default ListadoHotel
