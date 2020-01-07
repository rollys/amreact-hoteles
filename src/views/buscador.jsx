import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FrontLayout from './layout/front'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { TABLE_HOTELS } from '../constants/tables'
import { DETAIL_HOTEL as ROUTESDETAILHOTEL } from '../constants/routes'

const Buscador = props => {
  /* constructor() {
    this.listCollections()
  } */

  const db = firebase.firestore()
  const [data, setData] = useState([])
  const inputSearch = useRef()

  const listCollections = () => {
    console.log('listCollections()')
    db.collection(TABLE_HOTELS)
      .get()
      .then(data => {
        const newData = []
        data.forEach(doc => {
          newData.push({ ...doc.data(), id: doc.id })
        })
        setData(newData)
      })
  }

  const listCollectionsSearch = key => {
    db.collection(TABLE_HOTELS)
      .get()
      .then(data => {
        const newData = []
        data.forEach(doc => {
          if (doc.data().name === key) {
            newData.push({ ...doc.data(), id: doc.id })
          }
        })
        setData(newData)
      })
  }

  const search = () => {
 
    const key = inputSearch.current.value
    console.log(key)
    if (key === '') {
      listCollections()
    } else {
      listCollectionsSearch(key)
    }
  }

  //listCollections()



  return (
    <FrontLayout>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="search"
          ref={inputSearch}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            name="btn-search"
            onClick={search}>
            Buscar
          </button>
        </div>
      </div>
      <div className="card-deck justify-content-center">
        {data.map(item => {
          return (
            <div
              key={item.id}
              className="card"
              style={{
                minWidth: '18rem',
                maxWidth: '18rem',
                marginBottom: 10,
              }}>
              <img
                src={item.url_image}
                className="card-img-top"
                alt={item.name}
                width="250"
                height="100"
              />
              <div className="card-header text-center">
                <strong>{item.name}</strong>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-success">
                    <strong>Ciudad:</strong> {item.city}
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    <strong>Dirección:</strong> {item.address}
                  </li>
                  <li className="list-group-item list-group-item-info">
                    <strong>Precio:</strong> S/ {item.price}
                  </li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <Link
                  type="button"
                  className="btn btn-success"
                  to={ROUTESDETAILHOTEL(item.id)}>
                  Ver
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </FrontLayout>
  )
}

export default Buscador
