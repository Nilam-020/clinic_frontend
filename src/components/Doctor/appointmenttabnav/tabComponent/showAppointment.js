import { render } from "@testing-library/react"
import axios from "axios"
import { Component, state } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
// const moment = require("moment")
import moment from 'moment'
import noimage from '../../../../images/noimage.png'
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
        console.log(response.data.data)
        this.setState({
          appointments: response.data.data,
          
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
    const user = JSON.parse(sessionStorage.getItem("user"));
    return (
      <>
        <Container>
          <Row className="py-5">
            {/* <Col md={12} sm={12}><h1>Today's Appointment</h1></Col> */}
            {
              this.state.appointments.reverse().map((appointment) => {
                return (
                  <Col md={4} sm={12}>
                    <Card className="findDoctor docInfocard mb-5 py-2">
                      {
                        appointment.UID.profile !== "no-image.jpg" ?
                          (
                            <Card.Img src={`http://localhost:5000/${appointment.UID.profile}`} className="DocImage" />

                          ) :
                          (
                            <Card.Img src={noimage} className="DocImage" />

                          )
                      }

                      <Card.Body className="" syle={{ borderTop: '1px solid #f0f0f0' }}>
                        <Card.Title className="text-center">{appointment.UID.firstname} {appointment.UID.lastname} </Card.Title>
                        <Card.Subtitle className="text-center mt-1">{appointment.UID.phone}</Card.Subtitle>
                        <Card.Subtitle className="text-center  mt-1">{appointment.UID.address}</Card.Subtitle>
                        <Card.Subtitle className="mt-3 text-muted mx-auto">
                         <span className=""> <i class="far fa-calendar-alt mr-5"style={{marginRight:'10px'}}></i>{moment(appointment.created_Date).format('MMM DD, YYYY')}</span> 
                        <span className="float-end"><i class="fas fa-clock" style={{marginRight:'10px'}}></i>{appointment.created_Time}</span>
                        </Card.Subtitle>
                        
                        <Card.Subtitle className="mt-3 text-muted text-end" style={{fontStyle:'italic',fontSize:'13px'}}>requested {moment(appointment.created_Date).endOf('day').fromNow()}</Card.Subtitle>
                        <div className="mt-3 py-2 px-1 docInfocard">
                          {
                            appointment.status === "completed" ? (
                              <>
                                <Row>
                                  <Col>
                                    <Link className="btn btn-success">Completed</Link>
                                  </Col>
                                  <Col>
                                    <Link to={"/userInfo/" + appointment._id._id} className="btn btn-primary text-right float-end">Show More</Link>
                                  </Col>
                                </Row>
                              </>

                            ) :
                              (

                                <>
                                  <Row>
                                    <Col>
                                      <Link className="btn btn-primary">Pending</Link>
                                    </Col>
                                    <Col className="">
                                      <a href={"/userInfo/" + appointment._id._id} className="btn btn-primary text-right float-end">Show More</a>
                                    </Col>
                                  </Row>
                                </>
                              )
                          }

                        </div>

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