import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Button  } from 'react-bootstrap';
import './Home.css';


export default class home extends Component {
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
  ReactDOM.render(<Example />, document.getElementById('home'));
}
