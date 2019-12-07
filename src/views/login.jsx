import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container card w-25 mt-5 p-2">
        <h1 className='text-center'>
          <span class="badge badge-secondary">INICIO DE SESIÓN</span>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contrasenia</label>
            <input type="password" className="form-control" name="password" />
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
