import React, { Component } from 'react'
import { Jumbotron, Container } from "react-bootstrap";
import ReactDOM from 'react-dom';

import './About';

export default class Home extends Component {
  render() {
    return (
      <Container>

<br />
        <br />
        <Jumbotron>
        <h2>Luxury Limo</h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero. In hendrerit gravida rutrum quisque. Aliquet enim tortor at auctor urna nunc. </p>
        </Jumbotron>
      </Container>
    )
  }
}

if (document.getElementById('open')) {
  ReactDOM.render(<Home />, document.getElementById('open'));
}
