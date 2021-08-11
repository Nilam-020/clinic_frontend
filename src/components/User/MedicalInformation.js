import axios from "axios"
import { Component, state, changeHandler, updateUserData } from "react"
import { Col, Container, Form, Row, Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default class MedicalInformation extends Component {
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
        occupation: "",
        marial_status: "",
        smoking_habit: "",
        blood_group: "",
        feet: "",
        inch: "",
        weight: "",
        config: {
            "headers": {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        }
    }
    componentDidMount(){
        var user = JSON.parse(sessionStorage.getItem("user"));
        this.setState({
            "occupation":user.occupation,
            "marital_status":user.marital_status,
            "smoking_habit":user.smoking_habit,
            "blood_group":user.blood_group,
            "feet":user.feet,
            "inch":user.inch,
            "weight":user.weight

        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // componentDidMount(){
    //     axios.get('http://localhost:3000/user/'+this.state.id)
    //     .then((response)=>{
    //         occupation:response.data.occupation,
    //         marial_status:response.data.marial_status,
    //         smoking_habit:response.data.smoking_habit,
    //         feet:response.data.feet,
    //         inch:response.data.inch,
    //         weight:response.data.weight
    //     })
    //     .catch((err)=>{
    //         console.log(err.response)

    //     })
    // }
    updateUserData = (e) => {
        console.log("button clicked")
        var userId = JSON.parse(sessionStorage.getItem("user"));
        axios.put("http://localhost:5000/user/update/" + userId._id, this.state)
            .then((response) => {
                sessionStorage.setItem("user",JSON.stringify(response.data.data))
                window.location.reload()
            }).catch((err) => {
            })
    }   

    render() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        return (
            <>
                <Container>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8} className="menu loginform mb-5 mt-5">
                            <Form className="mt-3 mb-3">
                                {/* <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row> */}

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Occupation</Form.Label>
                                    <Form.Control placeholder={user.occupation} name="occupation" value={this.state.occupation}
                                        onChange={this.changeHandler} />
                                </Form.Group>
                                <Form.Group controlId="formGridState">
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control as="select" name="marital_status" onChange={this.changeHandler} defaultValue={user.marital_status}>
                                        <option>Choose...</option>
                                        <option value="married"
                                        >married</option>
                                        <option value="unmarried"
                                        >unmarried</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridState">
                                    <Form.Label>Blood Group</Form.Label>
                                    <Form.Control as="select" name="blood_group" onChange={this.changeHandler} defaultValue={user.blood_group}>
                                        <option>Choose...</option>
                                        <option value="A+">A+</option>
                                        <option value="A-" >A-</option>
                                        <option value="B+" >B+</option>
                                        <option value="B-" >B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB+">AB-</option>
                                        <option value="O+" >O+</option>
                                        <option value="O-" >O-</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGridState">
                                    <Form.Label>Smoking Habit</Form.Label>
                                    <Form.Control as="select" defaultValue={user.smoking_habit} name="smoking_habit" onChange={this.changeHandler}>
                                        <option>Choose...</option>
                                        <option value="yes" >yes</option>
                                        <option value="no">no</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Height</Form.Label>
                                        {/* <Form.Control /> */}
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridFeet">
                                        <Form.Label>Feet</Form.Label>
                                        <Form.Control as="select" defaultValue={user.feet} name="feet" onChange={this.changeHandler}>
                                            <option>Choose...</option>
                                            <option value="1" >1</option>
                                            <option value="2" >2</option>
                                            <option value="3" >3</option>
                                            <option value="4" >4</option>
                                            <option value="5" >5</option>
                                            <option value="6" >6</option>
                                            <option value="7" >7</option>
                                            <option value="8" >8</option>
                                            <option value="9" >9</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridInch">
                                        <Form.Label>Inch</Form.Label>
                                        <Form.Control as="select" defaultValue={user.inch} name="inch" onChange={this.changeHandler}>
                                            <option>Choose...</option>
                                            <option value="1" >1</option>
                                            <option value="2" >2</option>
                                            <option value="3" >3</option>
                                            <option value="4" >4</option>
                                            <option value="5" >5</option>
                                            <option value="6" >6</option>
                                            <option value="7" >7</option>
                                            <option value="8" >8</option>
                                            <option value="9" >9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Weight (in KG)</Form.Label>
                                        {/* <Form.Control /> */}
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAddress1">
                                        <Form.Control placeholder={user.weight} name="weight" value={this.state.weight} onChange={this.changeHandler} />
                                    </Form.Group>
                                </Form.Row>


                                <div className="text-center">
                                    <Link className="btn btn-outline-primary text-center px-lg-5 py-lg-2 w-50" onClick={() => { this.handleModal() }} type="submit">
                                        Submit
  </Link>
                                </div>
                            </Form>
                        </Col>
                        <Col sm={2}></Col>
                        <Modal show={this.state.show}>
                            <Modal.Body>Are You sure you want to <span className="text-bold">update</span> your profile?</Modal.Body>
                            <Modal.Footer>
                                <div className="text-center align-content-center">
                                    <Link className="btn btn-success px-lg-5 text-left mr-2" onClick={() => { this.handleModal(); this.updateUserData() }}>Confirm</Link>
                                    <Link className="btn btn-danger px-lg-5" onClick={() => { this.handleModal() }}>Close</Link>
                                </div>

                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
            </>
        )
    }
}