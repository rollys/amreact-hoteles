import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  ADMIN as ROUTEADMIN,
  LOGIN as ROUTELOGIN,
} from '../../constants/routes'
import { DATA_USER } from '../../constants/tables'

class AdminLayout extends Component {
  constructor(props) {
    super(props)
    if (!this.isSignIn()) this.props.history.push(ROUTELOGIN)
  }

  getUserData = () => {
    const user = localStorage.getItem(DATA_USER)
    return JSON.parse(user) || {}
  }

  isSignIn = () => {
    if (
      Object.entries(this.getUserData()).length > 0 &&
      this.getUserData().constructor === Object
    ) {
      return true
    }
    return false
  }

  signOut = () => {
    localStorage.removeItem(DATA_USER)
    this.props.history.push(ROUTELOGIN)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={ROUTEADMIN}>
            HOTELES
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto"></div>
            <div className="form-inline my-2 my-lg-0">
              <span className="mr-3">
                {this.getUserData().displayName || ''}
              </span>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={this.signOut}>
                Cerrar sesión
              </button>
            </div>
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
