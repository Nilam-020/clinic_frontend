import { Component } from "react";
import { Container, Form, Row, Col,Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ChangeUserPassword extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
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
                                    <Link className="btn btn-outline-primary text-center px-lg-5 py-lg-2 w-50 mt-3" onClick={() => { this.handleModal() }} type="submit">
                                        Submit
  </Link>
                                </div>
                        </Col>
                        <Col md={3}>
                        </Col>
                    </Row>
                    <Modal show={this.state.show}>
                            <Modal.Body>Are You sure you want to <span className="text-bold h5">Change</span> your password?</Modal.Body>
                            <Modal.Footer>
                               <div className="text-center align-content-center"> 
                               <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.handleModal() }} to="/profile" type="submit">Confirm</Link>
                               <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                               </div>
                               
                                </Modal.Footer>
                        </Modal>
                </Container>
            </>
        )
    }
}