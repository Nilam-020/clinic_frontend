import axios from "axios";
import { Component, state, updateUserInfo } from "react";
import { Col, Container, Row, Image, Form, Modal, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }    
        
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }

    state = {
        email: "",
        address:"",
        config: {
            "headers": {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }

    }

    componentDidMount(){
        var user = JSON.parse(sessionStorage.getItem("user"));
        this.setState({
            "email":user.email,
            "address":user.address
        })
    }


    updateUserInfo = (e) => {
        console.log("button clicked")
        var userId = JSON.parse(sessionStorage.getItem("user"));
        axios.put("http://localhost:5000/user/profile/update/" + userId._id, this.state)
            .then((response) => {
                sessionStorage.setItem("user",JSON.stringify(response.data.data))
                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
    }
    render() {
        const token = sessionStorage.getItem("token");
        const user = JSON.parse(sessionStorage.getItem("user"));
        
        return (
            <Container className="mt-3 mb-3 text-center">
                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={6} className="align-content-center mx-auto pt-4 loginform menu">
                        {
                            user.profile !== "no-photo.jpg" ?
                                (
                                    <Image src={`http://localhost:5000/${user.profile}`} className="userImage" roundedCircle />
                                ) :
                                (
                                    <Image src="assets/favicon.png" className="userImage w-50" roundedCircle />

                                )
                        }
                        <h4 className="pt-3">{user.firstname} {user.lastname}</h4>
                        <h5 className="text-muted">{user.date_of_birth}</h5>
                        <h5 className="text-muted">{user.gender}</h5>
                        <div className="mb-3 mt-3 justify-content-center">

                        </div>
                        <Form className="mt-1">
                            <Form.Group>
                                <Form.Control type="email" placeholder={this.state.email} value={this.state.email}
                                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder={this.state.address} value={this.state.address}
                                    onChange={(event) => { this.setState({ address: event.target.value }) }}
                                />
                            </Form.Group>
                            <p className="text-center"><Link className="btn-primary px-5  mt-3  btn btn-lg" type="submit" onClick={() => { this.handleModal() }}>
                                Update
</Link></p>
                        </Form>
                    </Col>
                    <Col md={3}>

                    </Col>
                    <Modal show={this.state.show}>
                        <Modal.Body>Are You sure you want to <span className="text-bold">update</span> your profile?</Modal.Body>
                        <Modal.Footer>
                            <div className="text-center align-content-center">
                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => {this.updateUserInfo(); this.handleModal();  }}>Confirm</Link>
                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                            </div>

                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        )
    }
}