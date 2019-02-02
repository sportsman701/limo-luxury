import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form, Table} from "react-bootstrap";
import ReactDOM from 'react-dom';

export default class Reports extends Component {

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
                          <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>

                          <Form.Control placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="seacrch2">
                          <Form.Label></Form.Label>
                          <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>

                          <Form.Control placeholder="Confirmation number" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>

                      </Form>
                    </Col>

                    <Col>
                      
                    <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Last</th>
      <th>First</th>
      <th>Conf#</th>
      <th>Pickup</th>
      <th>Destination</th>
      <th>Distance</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>;
                    </Col>
                  </Row>
                  </Jumbotron>
      </Container>
      </div>
    )
  }
}

if (document.getElementById('reports')) {
  ReactDOM.render(<Reports />, document.getElementById('reports'));
}
