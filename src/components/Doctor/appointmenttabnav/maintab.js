import { Component } from "react"
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap"
import AddAppointment from "./tabComponent/addAppointment"
import AppointmentList from "./tabComponent/AppointmentList"
import ShowAppointment from "./tabComponent/showAppointment"

export default class maintab extends Component {
    render() {
        return (
           <>
                <Container>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">

                                {/* <Tab eventKey="home" title="Add Appointment">
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8} sm={12} className="mt-5 mb-5">
                                            <AddAppointment />
                                        </Col>
                                        <Col md={2}></Col>
                                        <Col md={12} sm={12}>
                                            <AppointmentList/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                    </Row>
                                </Tab> */}
                                <Tab eventKey="profile" title=" Show Appointment">
                                    
                                        {/* <showAppointment/> */}
                                        <ShowAppointment/>
                                </Tab>

                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}