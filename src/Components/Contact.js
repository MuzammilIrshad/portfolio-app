import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { GiEarthAmerica } from 'react-icons/gi';
export default function Contact() {
    return (
        <div id="contact">
            <Container>
                <Row>
                    <Col sm={12} lg={3}>
                       
                    </Col>
                    <Col xs={6} lg={3}>
                       
                        <Card

                            style={{
                                width: '12rem', backgroundColor: "white", width: "12rem", borderRadius: "20%", height: "9rem",
                                textAlign:"center"
                            }}
                            className="mb-2"
                        >
                           
                            <Card.Body>
                                <Card.Title><MdEmail style={{ color: "#c92f3d82", height: "30px", width: "80px", marginBottom: "1em" }} /><br />
                                    <p style={{ fontSize: "14px"} }>muzammilirshad931@gmail.com</p> </Card.Title>

                            </Card.Body>
                            </Card>
                    </Col>
                    <Col xs={6} lg={3}>
                        <Card

                            style={{
                                width: '12rem', backgroundColor: "white", width: "12rem", borderRadius: "20%", height: "9rem",
                                textAlign: "center"
                            }}
                            className="mb-2"
                        >
                           
                            <Card.Body>
                                <Card.Title><MdCall style={{ color: "#c92f3d82", height: "30px", width: "80px", marginBottom: "1em" }} /><br />
                                    <p style={{ fontSize: "13px" }}>+923330269809</p><p style={{ fontSize: "13px" }}>+923098741389</p> </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} lg={3}>
                        <Card

                            style={{
                                width: '12rem', backgroundColor: "white", width: "12rem", borderRadius: "20%", height: "9rem", textAlign:"center"
                            }}
                            className="mb-2"
                        >
                           
                            <Card.Body>
                                <Card.Title><GiEarthAmerica style={{ color: "#c92f3d82", height: "30px", width: "80px", marginBottom: "1em" }} /><br />
                                    <br />
                                    <FaFacebook style={{ color: "blue", height: "30px", width: "80px", marginLeft:"-0.8em", marginBottom: "1em", marginRight: "-2em" }} />
                                    <SiFiverr style={{ color: "green", height: "30px", width: "80px", marginBottom: "1em", marginRight:"-2em" }} />
                                    <SiGithub style={{ color: "black", height: "30px", width: "80px", marginBottom: "1em" }} />
                                </Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
