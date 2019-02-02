import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form, Table} from "react-bootstrap";
import ReactDOM from 'react-dom';

export default class Search extends Component {



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
      <div>
              <Container>
                <br />
                <br />

                <Jumbotron>
                  <Row>
                    <Col>
                    <Form>
                        <Form.Group controlId="seacrch1">
                          <Form.Label>Search</Form.Label>
                          <Form.Control type="text"  placeholder="Name" value={this.state.inputvalue} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="seacrch2">
                          <Form.Label></Form.Label>
                          <Form.Control type="text" placeholder="Confirmation number" value={this.state.inputvalue} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>

                      </Form>
                    </Col>

                    
                  </Row>
                  </Jumbotron>
      </Container>
      </div>
    )
  }
}

if (document.getElementById('search')) {
  ReactDOM.render(<Search />, document.getElementById('search'));
}
