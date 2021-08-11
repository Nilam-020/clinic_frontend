import axios from "axios";
import { Component, state,deleteDoctor } from "react";
import { Col, Container, Row, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Doctor extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         show: false
    //     }
    // }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    state = {
        doctors: []
    }
    componentDidMount() {
        axios.get("http://localhost:5000/doctor")
            .then((response) => {
                console.log(response)
                this.setState({
                    doctors: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    deleteDoctor = (id)=>{
            axios.delete("http://localhost:5000/doctor/delete/"+id)
            .then((response)=>{
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err.response)
            })

    }
    render() {
        return (
            <>
                <Container fluid mx-auto className="mb-3">
                    <Row>
                        <h3 className="text-center mx-auto my-3">Doctor</h3>
                        <Col sm="12" className="text-right"><Link to="/addDoctor" className="btn btn-outline-danger mb-2">Add Doctor</Link></Col>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>image</th>
                                        <th>Doctor_Fullname</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>NMC</th>
                                        <th>Department</th>
                                        <th>Specialisation</th>
                                        <th>Description</th>
                                        <th>Consultation_Fee</th>
                                        <th>Worked</th>
                                        <th>Rating</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.doctors.map((doctor) => {
                                            return (
                                                <>
                                                    <tr>
                                                        {
                                                            doctor.profile != "no-photo.jpg" ?
                                                                (
                                                                    <td className=""><img src={`http://localhost:5000/${doctor.profile}`} className="showDoctorImg rounded-circle"/></td>
                                                                ) :
                                                                (
                                                                    <td className=""><img src="assets/Group 51.png" className="showDoctorImg rounded-circle" /></td>
                                                                )
                                                        }


                                                        <td>{doctor.firstname} {doctor.lastname}</td>
                                                        <td>{doctor.address}</td>
                                                        <td>{doctor.phone}</td>
                                                        <td>{doctor.email}</td>
                                                        <td>{doctor.gender}</td>
                                                        <td>{doctor.nmc}</td>
                                                        <td>{doctor.department}</td>
                                                        <td>{doctor.specialisation}</td>
                                                        <td>{doctor.description}</td>
                                                        <td>{doctor.consultationFee}</td>
                                                        <td>{doctor.worked}</td>
                                                        <td>{doctor.rating}</td>
                                                        <td colSpan="2"><Link className="btn btn-success" to={"/updateDoctor/" + doctor._id}>Update</Link>
                                                            <Link className="btn btn-danger" onClick={() => { this.handleModal() }}>Delete</Link></td>

                                                    </tr>

                                                    < Modal show={this.state.show}>
                                                        <Modal.Body>Are you sure you want to  <span className="text-bold">Delete</span>?</Modal.Body>
                                                        <Modal.Footer>
                                                            <div className="text-center align-content-center">
                                                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.deleteDoctor(doctor._id) && this.handleModal() }} >Confirm</Link>
                                                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                                                            </div>

                                                        </Modal.Footer>
                                                    </Modal>
                                                </>

                                            )
                                        })


                                    }


                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>

            </>
        )
    }
}
export default Doctor;