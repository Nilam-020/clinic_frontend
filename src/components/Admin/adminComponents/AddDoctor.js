import { Component, state, addDoctor,handleModal } from 'react';
import { Container, Row, Col, Form, Button, Image,Modal } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

class AddDoctor extends Component {

    state = {
        profile:"",
        firstname: "",
        lastname: "",
        address: "",
        department: "",
        nmc:"",
        email: "",
        gender: "",
        worked:"",
        phone: "",
        password: ""
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    addDoctor = (e) => {
        console.log("button clicked")
        const doctorData = {
            profile:this.state.profile,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            nmc:this.state.nmc,
            department: this.state.department,
            email: this.state.email,
            gender: this.state.gender,
            worked:this.state.worked,
            phone: this.state.phone,
            password: this.state.password
        }
        var fData = new FormData();
        fData.append("profile",doctorData.profile)
        fData.append("firstname",doctorData.firstname)
        fData.append("lastname",doctorData.lastname)
        fData.append("address",doctorData.address)
        fData.append("nmc",doctorData.nmc)
        fData.append("department",doctorData.department)
        fData.append("email",doctorData.email)
        fData.append("gender",doctorData.gender)
        fData.append("worked",doctorData.worked)
        fData.append("phone",doctorData.phone)
        fData.append("password",doctorData.password)
        axios.post("http://localhost:5000/doctor/register", fData)
            .then(response => {
                console.log("use login success")
            })
            .catch(err => {
                console.log(err)
            })
            window.location.href="/doctor"
    }
    render() {
        return (

            <>
                <Container bg-white fluid>
                    <Container className="bg-white p-5 w-100">
                        <Row>
                            <Col md={3} className="my-auto">
                            </Col>
                            <Col md={6} sm={12} className="menu loginform">
                                <h5 className="text-center boldtext pt-3">Register</h5>
                                <p className="text-center pt-1">Doctor Information</p>
                                <Form className="mt-1">
                                <Form.File id="formcheck-api-regular">
                                <Form.File.Input onChange={(event) => { this.setState({ profile: event.target.files[0] }) }} />
                            </Form.File>
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="First name" value={this.state.firstname}
                                            onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group >

                                        <Form.Control type="text" placeholder="Last name" value={this.state.lastname}
                                            onChange={(event) => { this.setState({ lastname: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Email address" value={this.state.email}
                                            onChange={(event) => { this.setState({ email: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="NMC Number" value={this.state.nmc}
                                            onChange={(event) => { this.setState({ nmc: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Department" value={this.state.department}
                                            onChange={(event) => { this.setState({ department: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Address" value={this.state.address}
                                            onChange={(event) => { this.setState({ address: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="worked" value={this.state.worked}
                                            onChange={(event) => { this.setState({ worked: event.target.value }) }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Select a Gender</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            value="Male"
                                            name="gender"
                                            onChange={(event) => { this.setState({ gender: event.target.value }) }}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            value="Female"
                                            name="gender"
                                            onChange={(event) => { this.setState({ gender: event.target.value }) }}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Others"
                                            value="Others"
                                            name="gender"
                                            onChange={(event) => { this.setState({ gender: event.target.value }) }}
                                        />
                                         
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Mobile Number" value={this.state.phone}
                                            onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                            onChange={(event) => { this.setState({ password: event.target.value }) }}
                                        />
                                    </Form.Group>
                                   
                                    <Form.Group>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <p className="text-center"><Link className="btn-outline-primary px-5  mt-3  btn btn-lg" type="submit" onClick={() => { this.handleModal() }}>
                                        Register
</Link></p>
                                </Form>

                                <Modal show={this.state.show}>
                                                <Modal.Body>Are you sure you want to<span className="text-bold">Add </span>a new Doctor ?</Modal.Body>
                                                <Modal.Footer>
                                                    <div className="text-center align-content-center">
                                                        <Link className="btn btn-success px-lg-5 text-left mr-2" type="submit" onClick={() => { this.addDoctor(); this.handleModal() }}>Confirm</Link>
                                                        <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                                                    </div>

                                                </Modal.Footer>
                                            </Modal>
                            </Col>
                            <Col md={3} className="my-auto">
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>

        )
    }
}

export default AddDoctor;