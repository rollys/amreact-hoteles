import React from 'react'
import { Link } from 'react-router-dom'
import { HOME as ROUTEHOME } from '../../constants/routes'

const FrontLayout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <Link className="navbar-brand" to={ROUTEHOME}>
          HOTELES
        </Link>
      </nav>
      <div className="jumbotron container w-75">
        {children[0]}
        {children[1]}
      </div>
    </div>
  )
}

export default FrontLayout
