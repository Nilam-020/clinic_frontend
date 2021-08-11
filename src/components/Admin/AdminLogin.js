import { Component, state, loginAdmin } from "react";
import { Form, Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'


class LoginAdmin extends Component {
    state = {
        phone: "",
        password: ""
    }

    loginAdmin = (e) => {
        
        e.preventDefault();
        const userData = {
            phone: this.state.phone,
            password: this.state.password
        }
        
        
        axios.post("http://localhost:3000/staff/login", userData)
            .then((response) => {
               
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                window.location.href = "/"
               
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
                        <p className="h2 welcome_text">WELCOME, ADMIN</p>
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
                                    <button className="btn-outline-primary px-5 mb-4  mt-3  btn btn-lg" onClick ={this.loginAdmin} type="Submit">
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
export default LoginAdmin;