import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import Titulo from '../components/titulo'
import Error from '../components/error'
import { ADMIN as ROUTEADMIN } from '../constants/routes'
import { DATA_USER } from '../constants/tables'

const INIT_STATE = {
  hasError: false,
  msgError: '',
}
const Login = props => {

  const [dataError, setDataError] = useState(INIT_STATE)

  const inputEmail = useRef()
  const inputPassword = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(
        inputEmail.current.value,
        inputPassword.current.value
      )
      .then(r => {
        setDataError(INIT_STATE)
        setUserData({
          displayName: r.user.displayName,
          email: r.user.email,
        })
        props.history.push(ROUTEADMIN)
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code
        const errorMessage = error.message
        setDataError({
          hasError: true,
          msgError: errorMessage,
        })
      })
  }

  const setUserData = data => {
    localStorage.setItem(DATA_USER, JSON.stringify(data))
  }

  return (
    <div className="container card w-25 mt-5 p-2">
      <Titulo title="INICIO DE SESIÓN" />
      <form onSubmit={handleSubmit}>
        <Error {...dataError} />
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            className="form-control"
            name="email"
            ref={inputEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            ref={inputPassword}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
