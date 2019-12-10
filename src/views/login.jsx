import React, { Component } from 'react'
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
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = INIT_STATE
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.hasError !== this.state.hasError ||
      nextState.msgError !== this.state.msgError
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.inputEmail.value,
        this.inputPassword.value
      )
      .then(r => {
        this.setState(INIT_STATE)
        this.setUserData({
          displayName: r.user.displayName,
          email: r.user.email,
        })
        this.props.history.push(ROUTEADMIN)
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code
        const errorMessage = error.message
        this.setState({
          hasError: true,
          msgError: errorMessage,
        })
      })
  }

  setUserData = data => {
    localStorage.setItem(DATA_USER, JSON.stringify(data))
  }

  render() {
    console.log('---> render')
    return (
      <div className="container card w-25 mt-5 p-2">
        <Titulo title="INICIO DE SESIÓN" />
        <form onSubmit={this.handleSubmit}>
          <Error {...this.state} />
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              className="form-control"
              name="email"
              ref={input => {
                this.inputEmail = input
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              ref={input => {
                this.inputPassword = input
              }}
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
}

export default Login
