import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Book.css";
import ReactDOM from 'react-dom';
import Map from "./Map.js"
import DatePicker from "react-date-picker";

// onChange = date => this.setState({ date })

export default class Book extends Component {

  constructor (props) {
    super(props);
    this.state = {
        start: '',
        end: '',
        date: new Date(),
        time: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange (event) {
  const { name, value } = event.target;
  this.setState({
      [name]: value
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
                <Form.Control 
                  type= "text" 
                  name="start"
                  placeholder="Pick up" 
                  value={this.state.start} 
                  onChange={this.handleChange.bind(this)}/>
              </Form.Group>

              <Form.Group controlId="end">
                <Form.Control 
                type="text" 
                name="end"
                placeholder="Drop off" 
                value={this.state.end} 
                onChange={this.handleChange.bind(this)}/>
              </Form.Group>

                <br />
                <br />
                <Form.Row>
                {/* <Form.Group controlId="date">
                <Form.Control 
                type="text" 
                name="date"
                placeholder="Date" 
                value={this.state.date} 
                onChange={this.handleChange.bind(this)}/>
                </Form.Group> */}

                <Form.Group as={Col} controlId="time">
                <Form.Control 
                type="text" 
                name="time"
                placeholder="Time" 
                value={this.state.time} 
                onChange={this.handleChange.bind(this)}/>
                </Form.Group>

                <div> 
                  <DatePicker
                  onChange= {this.onChange}
                  value= {this.state.date}
                  />
                </div>
                </Form.Row>

              <br></br>
              <br></br>
              
              <Button variant="primary" type="submit" value="Submit">
                Continue
              </Button>

            </Form>
          </Col>

          <Col>

        
          <Map 
            origin={this.state.start}
            destination={this.state.end}
          />

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
