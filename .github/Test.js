import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
      <div>Hello  {this.props.name} {this.props.age}</div>
    )
  }
}

export default Test
