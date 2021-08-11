import React, { Component, state, changeHandler, bookappointment, handlemodal, changeRating } from "react";
import { Card, Col, Container, Form, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRatings from 'react-star-ratings';
import Call from "../../Call";

class doctorDetails extends Component {

    state = {
        doctor: [],
        ratings: 0,
        config: {
            "headers": {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }

    }
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         show: false

    //     }
    // }



    handleModal() {
        this.setState({ show: !this.state.show })
    }
    componentDidMount() {
        axios.get("http://localhost:5000/doctor/" + this.props.match.params.id).then((response) => {

            this.setState({
                doctor: response.data.data
            })
            this.setState({
                dI: this.state.doctor[0]
            })
            this.setState({
                singleDoctor: this.state.dI.doctor_id
            })


        }).catch((err) => {
            console.log(err);
        })

        axios.get("http://localhost:5000/myRatings/"+this.props.match.params.id,this.state.config)
        .then((response)=>{
            console.log(response.data.rating)
            if(response.data.success == true)
            {
                this.setState({
                    ratings:response.data.rating
                })
            }

        })
        .catch((err)=>{
            console.log(err);
        })
    }



    changeRating = (newRating, name) => {
        axios.post('http://localhost:5000/doctor/rating/' + this.props.match.params.id, { "rating": newRating }, this.state.config)
            .then((response) => {
                if (response.data.success == true) {
                    console.log(response)
                    window.location.reload();
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }



    bookappointment = (e) => {
        axios.post("http://localhost:5000/appointment/add/" + this.state.id, {}, this.state.config)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err.response)
            })
            window.location.href="/myAppointment"
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {

        document.getElementById('star-rating')
        return (
            <>

                <Container>
                    <Row className="mt-2">
                        <Col sm={12} md={6}>
                            <Card className="docback">
                                {
                                    this.state.doctor.profile != "no-photo.jpg" ?
                                        (
                                            <Card.Img src={`http://localhost:5000/${this.state.doctor.profile}`} alt={`http://localhost:5000/${this.state.doctor.profile}`} className="DocImage" />

                                        ) :
                                        (
                                            <Card.Img src="assets/favicon.png" className="DocImage" />

                                        )
                                }
                                <h1 className="text-center mt-5"> <StarRatings
                                    rating={this.state.doctor.rating}
                                    starRatedColor="#FFD700"
                                    starHoverColor="#FFD700"
                                    numberOfStars={5}
                                    name={this.props.match.params.id}
                             

                                /></h1>
                                <Card.Body>


                                    <Card.Title className="text-center">Dr. {this.state.doctor.firstname} {this.state.doctor.lastname} </Card.Title>
                                    <Card.Subtitle className="text-center">{this.state.doctor.department}</Card.Subtitle>


                                    <Card.Subtitle className="mt-2 text-center text-muted">{this.state.doctor.worked}</Card.Subtitle>
                                    <Card.Subtitle className="mt-2 text-center text-muted">NMC Number {this.state.doctor.nmc}</Card.Subtitle>


                                    <Card.Text className="mt-5">
                                        <Card.Subtitle className="text-center pt-2">{this.state.doctor.specialisation}</Card.Subtitle>
                                        <p>{this.state.doctor.description}</p>


                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={12} md={6}>

                            <Form className="bookappointment menu loginform mt-5 p-5">
                                <p className="text-center text"><h3>Request for Callback</h3></p>  
                                <input type='text' placeholder="video id"/>                             
                             <Form.Group>
                                
                                 <Form.Label>Problem Description</Form.Label>
                                 <Form.Control as="textarea" row={5}/>
                             </Form.Group>
                                <p className="text-center">
                                    <Link className="btn btn-lg px-5 mt-2 justify-content-center text-decoration-none secondtext" onClick={() => { this.handleModal() }} type="submit">
                                        Book
  </Link></p>

                                <h1 className="text-center">     <StarRatings
                                    rating={this.state.ratings}
                                    starRatedColor="#FFD700"
                                    starHoverColor="#FFD700"
                                    numberOfStars={5}
                                    name={this.props.match.params.id}
                                    changeRating={this.changeRating}

                                />
                                </h1>


                            </Form>



                        </Col>

                    </Row>
                    {/* <Modal show={this.state.show}>
                        <Modal.Body>Add Your Appointment</Modal.Body>
                        <Modal.Footer>
                            <div className="text-center align-content-center">
                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.bookappointment(); this.handleModal() }}>Confirm</Link>
                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                            </div>

                        </Modal.Footer>
                    </Modal> */}
                </Container>
                <Call />
            </>
        )
    }
}
export default doctorDetails;