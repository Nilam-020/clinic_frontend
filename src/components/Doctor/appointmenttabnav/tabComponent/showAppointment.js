import { render } from "@testing-library/react"
import axios from "axios"
import { Component,state } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"


export default class ShowAppointment extends Component {
 
    state = {
        appointments: [],
        config: {
            "headers": {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }
    }

    componentDidMount() {
       console.log(this.state.config)
        axios.get("http://localhost:5000/appointment/doctor", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    appointments: response.data.data
                })
            })
            .catch((err) => {
                console.log(err)
             
            })
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={12} sm={12}><h1>Today's Appointment</h1></Col>
                        {
                        this.state.appointments.map((appointment) => {
                            return (
                                <Col md={4} sm={12}>
                                    <Card className="findDoctor">
                                    {
                                                appointment.UID.profile !== "no-photo.jpg" ?
                                                    (
                                                        <Card.Img src={`http://localhost:5000/${appointment.UID.profile}`} className="DocImage" />

                                                    ) :
                                                    (
                                                        <Card.Img src="assets/favicon.png" className="DocImage w-50" />

                                                    )
                                            }
                                    
                                        <Card.Body>
                                            <Card.Title>{appointment.UID.firstname} {appointment.UID.lastname} </Card.Title>
                                            <Card.Subtitle>{appointment.UID.phone}</Card.Subtitle>
                                            <Card.Subtitle>{appointment.VID}</Card.Subtitle>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }                     
                     
                    </Row>
                </Container>

            </>
        )
    }
}