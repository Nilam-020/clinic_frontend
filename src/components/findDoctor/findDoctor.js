
import React, { Component, state } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

class findDoctor extends Component {
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
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12} >
                        <div className="text-center my-3">
                            <h1>Find Doctors</h1>
                        </div>
                    </Col>


                    {
                        this.state.doctors.map((doctor) => {
                            return (
                                <Col md={4} sm={12} className="mb-5 doclist pr-1">
                                    <Link className="docLink " to={'/doctorDetail/' + doctor._id}>
                                        <Card className="findDoctor">
                                            {
                                                doctor.profile !== "no-photo.jpg" ?
                                                    (
                                                        <Card.Img src={`http://localhost:5000/${doctor.profile}`} className="DocImage" />

                                                    ) :
                                                    (
                                                        <Card.Img src="assets/favicon.png" className="DocImage" />

                                                    )
                                            }
                                            <Card.Body className="card_style">
                                                <Card.Title>Dr. {doctor.firstname} {doctor.lastname}</Card.Title>
                                                <Card.Subtitle>{doctor.department}</Card.Subtitle>
                                                <Card.Subtitle className="mt-2 text-muted">{doctor.worked}</Card.Subtitle>
                                                <Card.Text>
                                                    <p className="mt-3">{doctor.startTime} - {doctor.endTime}</p>
                                                    <h1 className="text-center mt-1"> <StarRatings
                                                        rating={doctor.rating}
                                                        starRatedColor="#FFD700"
                                                        starHoverColor="#FFD700"
                                                        numberOfStars={5}
                                                        name={this.props.match.params.id}


                                                    /></h1>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
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