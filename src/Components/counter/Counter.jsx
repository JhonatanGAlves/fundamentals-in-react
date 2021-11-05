import React, { Component, useState } from 'react'
import { Buttons } from './Buttons'
import './Counter.css'
import { Display } from './Display'
import { Step } from './Step'

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.initialStep || 5
  }
  
  dec = () => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step
    })
  }

  setInitialStep = (e) => {
    this.setState({
      step: +e.target.value
    })
  }

  render() {
    return (
      <div className="counter">
        <Display
          number={this.state.number}
        />
        <Step
          step={this.state.step}
          initialStep={this.setInitialStep}
        />
        <Buttons
          decrement={this.dec}
          increment={this.inc}
        />
      </div>
    )
  }
}

export default Counter