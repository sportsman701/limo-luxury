import React, { Component } from 'react'

export default class Toggle extends Component {
    state= {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

  render() {
    return (
      <div>

        <button onClick={this.toggle}>About this project</button>

        <br></br>
        <br></br>

        {this.state.on &&  (this.props.children) }
      </div>
    )
  }
}
