import { Component, state, changeHandler, UpdateDoctorData,handleModal } from 'react';
import { Container, Row, Col, Form, Button, Image, Modal } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

class UpdateDoctor extends Component {

    state = {
        address: "",
        department: "",
        worked: "",
        specialisation: "",
        description: "",
        consultationFee: "",
        id: this.props.match.params.id
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:3000/doctor/' + this.state.id)
            .then((response) => {
                this.setState({
                    address: response.data.data.address,
                    department: response.data.data.department,
                    worked: response.data.data.worked,
                    specialisation: response.data.data.specialisation,
                    description: response.data.data.description,
                    consultationFee: response.data.data.consultationFee
                })
            }).catch((err) => {
                console.log(err.response)
            })
            
    }
    // HandleModal() {
    //     this.setState({ show: !this.state.show })
    // }

    UpdateDoctorData = (e) => {
        console.log("button clicked")
        axios.put("http://localhost:5000/doctor/update/" + this.state.id, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
            window.location.reload()
    }
    render() {
        return (

            <>
                <Container bg-white fluid>
                    <Container className="bg-white p-5 w-100">
                        <Row>
                            <Col md={2} className="my-auto">
                            </Col>
                            <Col md={8} sm={12} className="menu loginform">
                                <h5 className="text-center boldtext pt-3">Update Doctor</h5>
                                <Form className="mt-1">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Address" name="address" value={this.state.address}
                                            onChange={this.changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Department" name="department" value={this.state.department}
                                            onChange={this.changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Worked Place" name="worked" value={this.state.worked}
                                            onChange={this.changeHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Specialisation</Form.Label>)
                                        <Form.Control as="textarea" rows={3} name="specialisation" value={this.state.specialisation}
                                            onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="description" value={this.state.description}
                                            onChange={this.changeHandler} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Consultation Fee" name="consultationFee" value={this.state.consultationFee}
                                            onChange={this.changeHandler}
                                        />
                                    </Form.Group>
                                    <p className="text-center"><Link className="btn-outline-primary px-5  mt-3  btn btn-lg" type="submit" onClick={()=>{this.handleModal()}}>
                                        Update
</Link></p>
                                    <p className="text-center"><Link className="btn-outline-danger px-5  mt-3  btn btn-lg" type="cancel" to="/doctor">
                                        Cancel
</Link></p>
                                </Form>
                                <Modal show={this.state.show}>
                        <Modal.Body>Are You sure you want to <span className="text-bold">update</span> the Doctor Information?</Modal.Body>
                        <Modal.Footer>
                            <div className="text-center align-content-center">
                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => {this.UpdateDoctorData(); this.handleModal();  }}>Confirm</Link>
                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                            </div>

                        </Modal.Footer>
                    </Modal>
                            </Col>
                            <Col md={2} className="my-auto">
                            </Col>
                        </Row>

                    </Container>
                </Container>
            </>

        )
    }
}

export default UpdateDoctor;