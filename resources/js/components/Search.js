import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form, Table} from "react-bootstrap";
import ReactDOM from 'react-dom';

export default class Search extends Component {
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
                          <Form.Control placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="seacrch2">
                          <Form.Label></Form.Label>
                          <Form.Control placeholder="Confirmation number" />
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
