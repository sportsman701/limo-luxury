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
          <h1>Luxury Limo</h1>

          <h4>To book the transportation, click on the "Book" link in the nav bar and enter the Origin, destination pickup time and date.</h4>
        </Jumbotron>
      </Container>
    )
  }
}

if (document.getElementById('open')) {
  ReactDOM.render(<Home />, document.getElementById('open'));
}
