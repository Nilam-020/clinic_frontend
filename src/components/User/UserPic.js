import axios from "axios";
import { Component, handleModal, updateUserPicture, state,profileData } from "react";
import { Form, Container, Col, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class UserPic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            profile: "",
            config: {
                "headers": {
                    "authorization": `Bearer ${sessionStorage.getItem("token")}`
                }
            },
            user:JSON.parse(sessionStorage.getItem('user'))
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    updateUserPicture = (e) => {
        const userProfile = {
            profile: this.state.profile
        };
        let pData = new FormData();
        pData.append("profile", this.state.profile);
        axios.put("http://localhost:5000/user/picture/"+this.state.user._id, pData)
            .then((response) => {
                sessionStorage.setItem("user",JSON.stringify(response.data.data))
                window.location.reload()
            }).catch((err) => {
                console.log(err);
            })
    }
    render() 
    {
        return (
            <>
                <Container className="my-5">
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={6} className="menu loginform py-5">
                            <Form>
                                <Form.File id="formcheck-api-regular">
                                    <Form.File.Input onChange={(event) => { this.setState({ profile: event.target.files[0] }) }} />
                                </Form.File>

                                <div className="text-center">
                                    <Link className="btn btn-outline-primary text-center px-lg-5 py-lg-2 w-50 mt-3" onClick={() => { this.handleModal() }} type="submit">
                                        Update
                                    </Link>
                                </div>
                            </Form>

                        </Col>
                        <Col md={3}>
                        </Col>
                    </Row>
                    <Modal show={this.state.show}>
                        <Modal.Body>Are You sure you want to <span className="text-bold h5">Update</span> your profile picture?</Modal.Body>
                        <Modal.Footer>
                            <div className="text-center align-content-center">
                                <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.updateUserPicture();  this.handleModal() }} type="submit">Confirm</Link>
                                <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                            </div>

                        </Modal.Footer>
                    </Modal>
                </Container>

            </>
        )
    }
}