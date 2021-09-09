import { Component, state, loginDoctor } from "react";
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom";
import swal from "sweetalert";

class DoctorLogin extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            phone: "",
            password: "",
            loggedIn
        }
    }

    loginDoctor = (e) => {
        e.preventDefault();
        const userData = {
            phone: this.state.phone,
            password: this.state.password
        }
        axios.post("http://localhost:5000/doctor/login", userData)
            .then((response) => {

                if (response.data.success === true) {
                    sessionStorage.setItem('token', response.data.token);
                    sessionStorage.setItem('user', JSON.stringify(response.data.data));
                    swal({
                        "title": "success!!",
                        "text": response.data.data.userType,
                        "icon": "success"
                    })
                    this.setState({
                        loggedIn: true
                    })
                    window.location.href = "/appointment/doctor"
                } else {
                    swal({
                        "title": "Error!!",
                        "text": response.data.message,
                        "icon": "error"
                    })

                }

            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (


            <Container className="bg-white" fluid>
                <Row>
                    <Col className="text-center mt-5">
                        <p className="h2 welcome_text">WELCOME, DOCTOR</p>
                    </Col>
                </Row>
                <Container className="bg-white p-5 w-100">
                    <Row>
                        <Col md={6} className="my-auto">
                            <Image src="/assets/OBJECTS.png" className="w-100 loginimage " />
                        </Col>
                        <Col md={6} sm={12} className="menu loginform">
                            <h5 className="text-center boldtext pt-3">Log in</h5>
                            <p className="text-center pt-1">Enter your credentials to proceed.</p>
                            <Form className="mt-1">
                                <Form.Group>
                                    <Form.Label className="labelname text-primary">Mobile Number</Form.Label>
                                    <Form.Control length="10" placeholder="Mobile Number" value={this.state.phone}
                                        onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="labelname text-primary">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <button className="btn-outline-primary px-5 mb-4 mt-3 btn-lg " type="submit" onClick={this.loginDoctor}>
                                        Login
    </button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
export default DoctorLogin;