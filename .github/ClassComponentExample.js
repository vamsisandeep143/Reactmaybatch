import React, { Component } from 'react'

export default class ClassComponentExample extends Component {
    constructor(props){
        console.log("constructor");
    super(props)   

    this.state = {
    counter : 0


    }

    this.increment = () => {

        this.setState({counter: this.state.counter + 1})
    }

    this.decrement = () => {

        this.setState({counter: this.state.counter - 1})
    }

   


    }

    componentDidMount() {
        console.log("This is called first");
         }
  render() {
    console.log("Render");
    return (
        <div>
            <button onClick={this.increment}>Counter up</button>
            <button onClick={this.decrement}>Counter down</button>
      <div className='counter'>
        Counter : {this.state.counter}
      </div>
      </div>
    )
  }
}
