import React, { Component } from 'react'
import { Jumbotron, Container } from "react-bootstrap";
import ReactDOM from 'react-dom';

import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <br />
            <Jumbotron fluid>
                <h2>Welcome to Luxury Limo</h2>
                <p>This is the company page for Luxury Limo. Click about to read about this project</p>

                <Link to="/About">
            <Button bsStyle="primary">About</Button>
            </Link>

            </Jumbotron>
          </Container>
          
      </div>
    )
  }
}

if (document.getElementById('home')) {
  ReactDOM.render(<Home />, document.getElementById('home'));
}
