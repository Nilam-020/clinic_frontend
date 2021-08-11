import { Component } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ChangeDoctorPassword extends Component{
    render() {
        return (
            <>
                <Container className="my-5">
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={6} className="menu loginform py-5">
                            <Form>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Enter New Password</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                    <Link className="btn btn-outline-primary text-center px-lg-5 py-lg-2 w-50 mt-3" variant="primary" type="submit">
                                        Submit
  </Link>
                                </div>
                        </Col>
                        <Col md={3}>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}