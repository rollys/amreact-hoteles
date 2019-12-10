import React, { Component } from 'react'

class AdminLayout extends Component {
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

        <div className="container w-75 card mt-3">
          {this.props.children[0]}
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

export default AdminLayout
