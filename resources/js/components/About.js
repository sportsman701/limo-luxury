import React, { Component } from 'react'
import { Jumbotron, Container, Card, Row, Col, Image } from "react-bootstrap";
import ReactDOM from 'react-dom';
import './About.css';
import Toggle from './Toggle';

export default class About extends Component {
  render() {
    return (
      <Container>

<br />
        <br />
        <Jumbotron>
            <Row>
              <Col>
                
                <h1> Luxury Limo</h1>
                <h3> The business way to book your resort's transportation</h3>
                <Image src="http://www.allwhitebackground.com/images/1/1183.png" fluid />

                </Col>
              </Row>



              <Toggle>
              <Row>
              

                
                  <Card>
                  <Card.Img
                    variant="top"
                    src="https://irp-cdn.multiscreensite.com/b9968a14/dms3rep/multi/tablet/Lincoln%20Town%20Car%20Limousine%20White-631x307.dm.edit_BWyuFx.png"
                  />
                    <Card.Body>
                        <Card.Title>Technologies Used</Card.Title>
                        <Card.Text>
                        This project was created by Jeff McINtosh and Preston Mack - Thisutilizes Laravel and MySQL on the backend, and React on the front end. React Google Maps, React Bootstrap, React Date Picker, React Time Picker and React Places Autocomplete
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    
   
                
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://irp-cdn.multiscreensite.com/b9968a14/dms3rep/multi/tablet/Lincoln%20Town%20Car%20Limousine%20White-631x307.dm.edit_BWyuFx.png"
                  />
                    <Card.Body>
                        <Card.Title>Jeffrey McIntosh</Card.Title>
                        <Card.Text>
                       Jeffrey McIntosh Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore eos aliquid assumenda enim officia saepe error unde excepturi, velit laudantium porro asperiores ipsum iusto! Hic omnis quasi suscipit molestiae.
                        </Card.Text>
                    </Card.Body>
                </Card>
               
               

                
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://irp-cdn.multiscreensite.com/b9968a14/dms3rep/multi/tablet/Lincoln%20Town%20Car%20Limousine%20White-631x307.dm.edit_BWyuFx.png"
                  />
                    <Card.Body>
                        <Card.Title>Preston Mack</Card.Title>
                        <Card.Text>
                        Presotn Mack Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, cumque eius nesciunt nulla ab possimus. Quaerat repellendus deserunt temporibus ad sed incidunt porro repudiandae voluptas, quam dolore autem rem sit!
                        </Card.Text>
                    </Card.Body>
                </Card>
                
              </Row>
              </Toggle>

        </Jumbotron>
      </Container>
    )
  }
}

if (document.getElementById('about')) {
  ReactDOM.render(<About />, document.getElementById('about'));
}
