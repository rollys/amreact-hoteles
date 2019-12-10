import React, { Component } from 'react'

class Error extends Component {
  render() {
    return this.props.hasError ? (
      <div className="alert alert-danger" role="alert">
        {this.props.msgError}
      </div>
    ) : (
      <></>
    )
  }
}

export default Error
