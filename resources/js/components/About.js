import React, { Component } from 'react'
import { Jumbotron, Container } from "react-bootstrap";
import ReactDOM from 'react-dom';

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <Container>

<br />
        <br />
        <Jumbotron>
        <h2>Luxury Limo is the final project created by Jeffrey McIntosh and Preston Mack</h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero. In hendrerit gravida rutrum quisque. Aliquet enim tortor at auctor urna nunc. </p>
        </Jumbotron>
      </Container>
    )
  }
}

if (document.getElementById('about')) {
  ReactDOM.render(<About />, document.getElementById('about'));
}
