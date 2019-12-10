import React, { Component } from 'react'
import AdminLayout from '../layout/admin'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { TABLE_HOTELS } from '../../constants/tables'
import { Link } from 'react-router-dom'
import {
  ADMIN_HOTEL_NEW,
  ADMIN_HOTEL_UPDATE,
  ADMIN_HOTEL_DELETE,
} from '../../constants/routes'

class ListadoHotel extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
    this.listCollections()
  }

  listCollections = () => {
    firebase
      .firestore()
      .collection(TABLE_HOTELS)
      .get()
      .then(data => {
        const newData = []
        data.forEach(doc => {
          newData.push({ ...doc.data(), id: doc.id })
        })
        this.setState({ data: newData })
      })
  }
  render() {
    const { data } = this.state
    console.log('data2', data)
    return (
      <AdminLayout {...this.props}>
        <div className="text-center m-4">
          <h1 className="d-inline-block">
            <span className="badge badge-secondary">LISTADO DE HOTELES</span>
          </h1>
          <Link
            className="btn btn-outline-primary float-right"
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
            to={ADMIN_HOTEL_NEW}>
            Agregar Hotel
          </Link>
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
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-warning"
                        to={ADMIN_HOTEL_UPDATE(item.id)}>
                        Editar
                      </Link>
                      <Link
                        className="btn btn-danger ml-3"
                        to={ADMIN_HOTEL_DELETE(item.id)}>
                        Eliminar
                      </Link>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  <strong>No hay hoteles registrados.</strong>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </AdminLayout>
    )
  }
}

export default ListadoHotel
