import React, { Component } from 'react'

class Titulo extends Component {
  render() {
    return (
      <h1 className="text-center">
        <span className="badge badge-secondary">{this.props.title}</span>
      </h1>
    )
  }
}

export default Titulo
