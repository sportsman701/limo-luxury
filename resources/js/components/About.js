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
                                {" "}
                                The business way to book your resort's
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
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://irp-cdn.multiscreensite.com/b9968a14/dms3rep/multi/tablet/Lincoln%20Town%20Car%20Limousine%20White-631x307.dm.edit_BWyuFx.png"
                                />
                                <Card.Body>
                                    <Card.Title>Technologies Used</Card.Title>
                                    <Card.Text>
                                        This project was created by Jeff
                                        McINtosh and Preston Mack - Thisutilizes
                                        Laravel and MySQL on the backend, and
                                        React on the front end. React Google
                                        Maps, React Bootstrap, React Date
                                        Picker, React Time Picker and React
                                        Places Autocomplete
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://media.licdn.com/dms/image/C4E03AQG-eKFq9Ynx0w/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=Mou5-0JV-XRz8oWEwOmC40gj7Sm2MGcgBJ-HK6FX-l4"
                                />
                                <Card.Body>
                                    <Card.Title>Jeffrey McIntosh</Card.Title>
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
                                        Management, Food and Beverage Operations,
                                        and Revenue Management.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://media.licdn.com/dms/image/C4E03AQE2e6vgkeUpTg/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=wdkCm9n6AII6UFuUHJkBHWeg8cdbH1zq2pmgo72Dz7M"
                                />
                                <Card.Body>
                                    <Card.Title>Preston Mack</Card.Title>
                                    <Card.Text>
                                        A Full Stack Developer with a career in advertising. I have worked with HTML, CSS, Javascipt, JQuery, Bootstrap, Firebase, MySQL, Mongo and React. I spent the last 25 years as a professional photographer. 
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
