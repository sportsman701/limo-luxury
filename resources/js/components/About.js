import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Card, Image } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

export default class About extends Component {
    render() {
        return (
            <Container> 
                <Jumbotron>
                    <Row>
                        <Col>                            
                            <div className="container">
                                <div className="centered"> 
                                    <h1>Luxury Limo</h1>
                                    <h3>The better way to book your resort's transportation </h3>
                                </div>

                                <Image
                                    src="https://static1.squarespace.com/static/56561946e4b04cd6ce7c9bb6/574f80a82fe1315ed9457c78/574f80e2746fb9ccc23054c5/1464828141795/suburban-png.png"
                                    fluid
                                />                          
                            </div>
                        </Col>
                    </Row>

                    <Toggle>
                        <Row>
                            <Card bg="light">
                                <Card.Img
                                    variant="top"
                                    src="https://media.licdn.com/dms/image/C4E03AQG-eKFq9Ynx0w/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=Mou5-0JV-XRz8oWEwOmC40gj7Sm2MGcgBJ-HK6FX-l4"
                                />

                                <Card.Header as="h2">
                                    Jeffrey McIntosh
                                </Card.Header>
                                
                                <Card.Body>
                                    <Card.Text>
                                        I am a Full Stack Web Developer with a strong background in Hospitality. As a Full Stack Web Developer, my skills include utilizing technologies such as HTML5, CSS3, JavaScript, jQuery, AJAX, Bootstrap, Materialize, Firebase, MySQL relational databases, Mongo non-relational databases, and Git/GitHub. As a Hospitality
                                        Professional, my skills include Customer Service, Front Office Operations, Event Management, Food and Beverage Operations, and Revenue Management.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Technologies Used</Card.Title>
                                    <Card.Text>
                                        This project was created by Jeff McIntosh and Preston Mack - This project utilizes Laravel and MySQL on the backend and ReactJS on the front end.  React Google Maps, React Bootstrap, React Date Picker, React Time Picker and React Places Autocomplete are all implimented. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="light">
                                <Card.Img
                                    variant="top"
                                    src="https://media.licdn.com/dms/image/C4E03AQE2e6vgkeUpTg/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=wdkCm9n6AII6UFuUHJkBHWeg8cdbH1zq2pmgo72Dz7M"
                                />
                                <Card.Header as="h2">
                                    Preston Mack
                                </Card.Header>

                                <Card.Body>
                                    <Card.Text>
                                        A Front End Developer with a previous career in advertising. I have experience with HTML, CSS, Javascipt, JQuery, Bootstrap, Firebase, MySQL, Mongo and React. I spent the last 25 years as a professional photographer, proficient with Adobe Photoshop. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>                            
                        </Row>
                    </Toggle>
                </Jumbotron>
            </Container>
        );
    }
}

if (document.getElementById('about')) {
  ReactDOM.render(<About />, document.getElementById('about'));
}
