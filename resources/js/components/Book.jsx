import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Book.css";
import ReactDOM from 'react-dom';
import Map from "./Map.js"


export default class Book extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputvalue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange (event) {
  this.setState({
      inputvalue: event.target.value
  })
}

handleSubmit (event){
  console.log('Form Value: ' + this.state.inputvalue);
  event.preventDefault();
}


  render() {
    return (
      <Container>
        <br />
        <br />
        <Jumbotron>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="start">
                <Form.Label>Pick Up / Drop Off Information</Form.Label>
                <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                <Form.Control placeholder="Pick up" />
              </Form.Group>

              <Form.Group controlId="end">
              <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                <Form.Control placeholder="Drop off" />
              </Form.Group>

                <br />
                <br />
                <Form.Row>
                <Form.Group controlId="Date">
                <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                  <Form.Control placeholder="Date" />
                </Form.Group>

                <Form.Group as={Col} controlId="Time">
                <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
                  <Form.Control placeholder="Time" />
                </Form.Group>
                </Form.Row>

              <br></br>
              <br></br>
              
              <Button variant="primary" type="submit">
                Continue
              </Button>

            </Form>
          </Col>

          <Col>

        
          <Map />

          </Col>
        </Row>
        </Jumbotron>
      </Container>
    );
  }
}

if (document.getElementById('book')) {
  ReactDOM.render(<Book />, document.getElementById('book'));
}
