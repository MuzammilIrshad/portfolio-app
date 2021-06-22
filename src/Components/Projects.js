import React from 'react';
import expense from "../Images/expense.png";
import covid from "../Images/covid.png";
import quiz from "../Images/quiz.png";
import signup from "../Images/signup.png";
import shoe from "../Images/shoe.png";
import housing from "../Images/housing.png";
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from 'react-bootstrap';


export default function Projects() {
    return (
        <Container id="projects">
            <Row>
             
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop: "1em"} }>
                    <Card style={{ width: '18rem', marginLeft: "1em", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <Card.Img variant="top" src={expense} style={{width:"100%", height:"90%", marginTop:"1em"}} />
                <Card.Title className="names">Expense App</Card.Title>
                    </Card>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop: "1em"}}>
                    <Card style={{ width: '18rem', marginLeft: "1em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <Card.Img variant="top" src={quiz} style={{ width: "90%", height: "309px", marginLeft: "1em", marginTop:"1em" }} />
                        <Card.Title className="names">Quiz App</Card.Title>
                    </Card>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop: "1em" }}>
                    <Card style={{ width: '18rem', marginLeft: "1em", height: "365px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <Card.Img variant="top" src={covid} style={{ width: "90%", height: "270px", marginLeft: "1em", marginTop: "1em" }} />
                        <Card.Title className="names">Covid-19 App</Card.Title>
                    </Card>
                </Col>
                <Col md={1} lg={12}></Col>
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop: "1em" }}>
                    <Card style={{ width: '18rem', marginLeft: "1em", height: "365px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <Card.Img variant="top" src={signup} style={{ width: "90%", height: "270px", marginLeft: "1em", marginTop: "1em" }} />
                        <Card.Title className="names">Multipage SignUp</Card.Title>
                    </Card>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop: "1em" }}>
                    <Card style={{ width: '18rem', marginLeft: "1em", height: "365px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <Card.Img variant="top" src={housing} style={{ width: "90%", height: "270px", marginLeft: "1em", marginTop: "1em" }} />
                        <Card.Title className="names">Housing Website</Card.Title>
                    </Card>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6} md={4} lg={3} style={{ marginLeft: "1em", marginTop:"1em" }}>
                    <Card style={{ width: '18rem', marginLeft: "1em", height: "365px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <Card.Img variant="top" src={shoe} style={{ width: "90%", height: "250px", marginLeft: "1em", marginTop: "1em" }} />
                        <Card.Title className="names">Shoe Store</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
