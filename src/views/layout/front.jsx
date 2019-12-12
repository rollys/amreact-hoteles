import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HOME as ROUTEHOME } from '../../constants/routes'

class FrontLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <Link className="navbar-brand" to={ROUTEHOME}>
            HOTELES
          </Link>
        </nav>
        <div className="jumbotron container w-75">
          {this.props.children[0]}
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

export default FrontLayout
