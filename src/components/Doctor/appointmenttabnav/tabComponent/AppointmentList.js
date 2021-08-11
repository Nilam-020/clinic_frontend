
import axios from 'axios';
import React, { Component, state, changeHander, addAppointmentData,showModal,hideModal } from 'react';
import { Container, Row, Table, Col, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class AppointmentList extends Component {
    state = {
        schedules:[],
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
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    deleteModal() {
        this.setState({ show: !this.state.show })
    }

    addAppointmentData = (e) => {

        var doctorId = JSON.parse(localStorage.getItem("user"));
        axios.put('http://localhost:5000/schedule/add/' + doctorId._id, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    componentDidMount() {
     //   alert(localStorage.getItem("token"))
        axios.get('http://localhost:3000/schedule/doctor',{
            "headers": {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }})
            .then((response) => {
            console.log(response)
                this.setState({
                    schedules: response.data.data
                    
                })
                console.log(response.data.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }
    render() {
      //  alert(this.state.schedules[0].startTime)

        return (
            <>
                <Container fluid mx-auto className="mb-3">
                    <Row>
                        <h3 className="text-center mx-auto my-3 h4">Scheduled Appointment</h3>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Appointment_Start_Date</th>
                                        <th>Appointment_End_Date</th>
                                        <th>Appointment_Start_Time</th>
                                        <th>Appointment_End_Time</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                      this.state.schedules.map((schedule)=>{
                                          return(
                                            <>
                                            <tr>
                                            <td>{schedule.startdate.split("T")[0]}</td>
                                            <td>{schedule.startdate.split("T")[0]}</td>
                                            <td>{schedule.startTime}</td>
                                            <td>{schedule.endTime}</td>
                                           
    
                                        </tr>
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
