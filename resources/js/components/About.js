import React, { Component } from "react";
import { Jumbotron, Container, Card, Row, Col, Image } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./About.css";
import Toggle from "./Toggle";

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
                            <h3>
                                The better way to book your resort's
                                transportation
                            </h3>
                            <Image
                                src="http://www.allwhitebackground.com/images/1/1183.png"
                                fluid
                            />
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
                                        I am a Full Stack Web Developer with a
                                        strong background in Hospitality. As a
                                        Full Stack Web Developer, my skills
                                        include utilizing technologies such as
                                        HTML5, CSS3, JavaScript, jQuery, AJAX,
                                        Bootstrap, Materialize, Firebase, MySQL
                                        relational databases, Mongo
                                        non-relational databases, and
                                        Git/GitHub. As a Hospitality
                                        Professional, my skills include Customer
                                        Service, Front Office Operations, Event
                                        Management, Food and Beverage
                                        Operations, and Revenue Management.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Technologies Used</Card.Title>
                                    <Card.Text>
                                        This project was created by Jeff
                                        McIntosh and Preston Mack - This project
                                        utilizes Laravel and MySQL on the
                                        backend and ReactJS on the front end.
                                        React Google Maps, React Bootstrap,
                                        React Date Picker, React Time Picker and
                                        React Places Autocomplete are all implimented. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card bg="light">
                                <Card.Img
                                    variant="top"
                                    src="data:image/jpeg;base64,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"
                                />
                                <Card.Header as="h2">Preston Mack</Card.Header>

                                <Card.Body>
                                    <Card.Text>
                                        A Front End Developer with a previous
                                        career in advertising. I have experience 
                                        with HTML, CSS, Javascipt, JQuery,
                                        Bootstrap, Firebase, MySQL, Mongo and
                                        React. I spent the last 25 years as a
                                        professional photographer, proficient with Adobe Photoshop. 
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

if (document.getElementById("about")) {
    ReactDOM.render(<About />, document.getElementById("about"));
}
