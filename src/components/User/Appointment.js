import axios from "axios";
import { Component, state, token, deleteAppointment } from "react"
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import { Link, Redirect } from "react-router-dom";
class Appointment extends Component {
    // constructor() {
    //     super()
    //     // this.state = {
    //     //     show: false
    //     // }





    // }

    deleteModal() {
        this.setState({ show: !this.state.show })
    }
    state = {
        appointments: [],
        config: {
            "headers": {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }
    }
    componentDidMount() {
        axios.get("https://hospital-eticketing.herokuapp.com/appointment/user", this.state.config)
            .then((response) => {
                // console.log(response)
                this.setState({
                    appointments: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deleteAppointment = (id) => {
        axios.post("https://hospital-eticketing.herokuapp.com/appointment/delete/" + id,{})
            .then((response) => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    render() {

        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />
        }
        return (
            <Container>
                <Row>

                    {
                        this.state.appointments.length > 0 ?
                            (

                                this.state.appointments.map((appointment) => {
                                    return (
                                        <>

                                            <Col md={4} sm={12}>
                                                <Card className="findDoctor">
                                                {
                                                appointment.AppointmentInstanceId.doctor_id.profile !== "no-photo.jpg" ?
                                                    (
                                                        <Card.Img src={`https://hospital-eticketing.herokuapp.com/${appointment.AppointmentInstanceId.doctor_id.profile}`} className="DocImage" />

                                                    ) :
                                                    (
                                                        <Card.Img src="assets/favicon.png" className="DocImage w-50" />

                                                    )
                                            }
                                                    <Card.Body>
                                                        <Card.Title>{appointment.AppointmentInstanceId.doctor_id.firstname} {appointment.AppointmentInstanceId.doctor_id.lastname} </Card.Title>
                                                        <Card.Subtitle>{appointment.AppointmentInstanceId.doctor_id.department}</Card.Subtitle>
                                                        <Card.Subtitle className="mt-2 text-muted">{appointment.AppointmentInstanceId.doctor_id.worked}</Card.Subtitle>
                                                        <Card.Text>
                                                            <p className="mt-3">{appointment.AppointmentInstanceId.fancyDate} <span className="ml-3">{appointment.AppointmentInstanceId.time}</span></p>
                                                            <Link className="btn btn-danger btn-md w-100" onClick={() => { this.deleteModal() }}>Delete</Link>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Modal show={this.state.show}>
                                                <Modal.Body>Are you sure you want to<span className="text-bold">Cancel </span>this appointment ?</Modal.Body>
                                                <Modal.Footer>
                                                    <div className="text-center align-content-center">
                                                        <Link className="btn btn-success px-lg-5 text-left mr-2" type="submit" onClick={() => { this.deleteAppointment(appointment._id); this.deleteModal() }}>Confirm</Link>
                                                        <Link className="btn btn-danger px-lg-5" onClick={() => { this.deleteModal() }}>Close</Link>
                                                    </div>

                                                </Modal.Footer>
                                            </Modal>
                                        </>
                                    )
                                })

                            ) : (
                                <Col md={12}>
                                    <h1 className="text-muted text-center">you don't have appointment</h1>
                                </Col>
                            )
                    }


                </Row>

            </Container>
        )
    }
}
export default Appointment;