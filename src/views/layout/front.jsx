import React, { Component } from 'react'

class FrontLayout extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark justify-content-center">
          <a class="navbar-brand" href="javascript:;">
            HOTELES
          </a>
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
