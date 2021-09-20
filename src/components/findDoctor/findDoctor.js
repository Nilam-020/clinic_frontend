import React, { Component, state } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

class findDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    }
  }
  componentDidMount() {
    axios.get("https://hospital-eticketing.herokuapp.com/doctor")
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
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={12} >
            <div className="text-center finddocheading my-3">
              <h1>Find Doctors</h1>
            </div>
          </Col>
          {
            this.state.doctors.map((doctor) => {
              return (
                <Col md={10} sm={12} className="mb-5 doclist pr-1 py-3 mx-auto">
                  <Row>
                    <Col>
                      {
                        doctor.profile !== "no-photo.jpg" ?
                          (
                            <img src={`http://localhost:5000/${doctor.profile}`} className="DocImage mx-auto" />

                          ) :
                          (
                            <img src="assets/noDoctor.png" className="DocImage" />
                          )
                      }
                    </Col>
                    <Col sm={5}>
                      <Card className="findDoctor" style={{ border: '0px solid #DDE5F5' }}>
                        <Card.Body className="card_style">
                          <Card.Title style={{ fontWeight: '700' }}>Dr. {doctor.firstname} {doctor.lastname}</Card.Title>
                          <Card.Subtitle className="mt-1" style={{ fontSize: '0.8rem' }}>{doctor.department} </Card.Subtitle>
                          <Card.Subtitle className="mt-2 mb-3" style={{ fontSize: '0.8rem' }}>NMC Number {doctor.nmc}</Card.Subtitle>
                          <Card.Subtitle className="my-2 h2" style={{ fontWeight: '600' }}>{doctor.worked}</Card.Subtitle>
                          <Card.Text className="mt-2" style={{ fontSize: '0.8rem', alignTextAlign: 'justify', fontWeight: '500' }}>
                            {doctor.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      {
                        doctor.isActive === true ? (
                          <>
                            <div className="text-center docbtn_find">
                              <h1 className="text-left stardocno mt-1"> <StarRatings
                                rating={doctor.rating}
                                starRatedColor="#F25044"
                                starHoverColor="#F25044"
                                starDimension="30px"
                                starSpacing="5px"
                                numberOfStars={5}
                                name={this.props.match.params.id}
                              /></h1>
                              <a className="btn btn-success w-100 enabled_btn mb-2 text-center" href={'/doctorInfo/' + doctor._id}> Available</a>
                              <h1 className="text-left stardoc mt-1"> <StarRatings
                                rating={doctor.rating}
                                starRatedColor="#F25044"
                                starHoverColor="#F25044"
                                starDimension="30px"
                                starSpacing="5px"
                                numberOfStars={5}
                                name={this.props.match.params.id}
                              /></h1>

                            </div>
                          </>

                        ) :
                          (
                            <div className="text-center docbtn_find">
                                <h1 className="text-left stardocno mt-1"> <StarRatings
                                  rating={doctor.rating}
                                  starRatedColor="#F25044"
                                  starHoverColor="#F25044"
                                  starDimension="30px"
                                  starSpacing="5px"
                                  numberOfStars={5}
                                  name={this.props.match.params.id}
                                /></h1>
                                <Link className="btn btn-danger disabled_btn w-100 mb-2 py-auto" disabled> Not Available</Link>
                                <h1 className="text-left stardoc mt-1"> <StarRatings
                                  rating={doctor.rating}
                                  starRatedColor="#F25044"
                                  starHoverColor="#F25044"
                                  starDimension="30px"
                                  starSpacing="5px"
                                  numberOfStars={5}
                                  name={this.props.match.params.id}
                                /></h1>
                            </div>

                          )
                      }

                    </Col>
                  </Row>

                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}
export default findDoctor;