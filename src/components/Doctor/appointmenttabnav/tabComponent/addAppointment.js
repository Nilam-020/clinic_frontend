import axios from "axios";
import { Component, state, changeHander, addAppointmentData } from "react";
import { Form, Container, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AddAppointment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false

        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    state = {
        startdate: "",
        enddate: "",
        startTime: "",
        endTime: "",

        config: {
            "headers": {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
    }
    changeHander = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addAppointmentData = (e) => {

        var doctorId = JSON.parse(localStorage.getItem("user"));

        axios.post('http://localhost:5000/schedule/add/' + doctorId._id, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload()
    }
    componentDidMount() {
        axios.get('http://localhost:5000/appointment/user', {}, this.state.config)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <>
                <Container>
                    <Form className="menu loginform p-5">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="Date" placeholder="Enter Start Date" name="startdate" value={this.state.startdate} onChange={this.changeHander} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="Date" placeholder="Enter Start Date" name="enddate" value={this.state.enddate} onChange={this.changeHander} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="startTime" onChange={this.changeHander}>
                                    <option>Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>

                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="endTime" onChange={this.changeHander}>
                                    <option>Choose...</option>

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <div className="text-center">
                            <Link type="submit" onClick={() => { this.handleModal() }} className="btn btn-outline-primary py-3 mt-3">
                                Add Appointment
  </Link>
                        </div>
                    </Form>
                    <Modal show={this.state.show}>
                        <Modal.Body>You are adding <span className="text-bold">Appointment</span></Modal.Body>
                        <Modal.Footer>
                            <div className="text-center align-content-center">
                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.handleModal(); this.addAppointmentData() }} to="/appointment/doctor">Confirm</Link>
                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                            </div>

                        </Modal.Footer>
                    </Modal>
                </Container>


            </>
        )
    }
}
