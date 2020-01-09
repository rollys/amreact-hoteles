import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  ADMIN as ROUTEADMIN,
  LOGIN as ROUTELOGIN,
} from '../../constants/routes'
import { DATA_USER } from '../../constants/tables'
import UserContext from '../../contexts/user'

const AdminLayout = props => {
  const adminLayoutContext = useContext(UserContext)
  console.log(adminLayoutContext)

  const getUserData = () => {
    /* const user = localStorage.getItem(DATA_USER)
    return JSON.parse(user) || {} */
    return adminLayoutContext.user || {}
  }

  const isSignIn = () => {
    if (
      Object.entries(getUserData()).length > 0 &&
      getUserData().constructor === Object
    ) {
      return true
    }
    return false
  }

  const signOut = () => {
    // localStorage.removeItem(DATA_USER)
    adminLayoutContext.setUser({})
    props.history.push(ROUTELOGIN)
  }

  if (!isSignIn()) props.history.push(ROUTELOGIN)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={ROUTEADMIN}>
          HOTELES
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto"></div>
          <div className="form-inline my-2 my-lg-0">
            <span className="mr-3">{getUserData().displayName || ''}</span>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={signOut}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container w-75 card mt-3">
        {props.children[0]}
        {props.children[1]}
      </div>
    </div>
  )
}

export default AdminLayout
