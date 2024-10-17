import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
