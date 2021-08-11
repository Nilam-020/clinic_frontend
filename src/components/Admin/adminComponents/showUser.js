import axios from "axios";
import React, { Component,state } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

class Users extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get("http://localhost:5000/user")
            .then((response) => {
                this.setState({
                    users: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {

        return (
            <>
                <Container fluid mx-auto className="mb-3">
                    <Row>
                        <h3 className="text-center mx-auto my-3">User Details</h3>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>image</th>
                                        <th>User_Fullname</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Date_of_Birth</th>
                                        <th>Gender</th>
                                        <th>Blood_Group</th>
                                        <th>Occupation</th>
                                        <th>marital_status</th>
                                        <th>Smoking_habit</th>
                                        <th>height</th>
                                        <th>weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user) => {
                                            return (
                                                <tr>
                                                    <td className=""><img src="assets/Group 51.png" /></td>
                                                    <td>{user.firstname} {user.lastname}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.date_of_birth}</td>
                                                    <td>{user.gender}</td>
                                                    <td>{user.blood_group}</td>
                                                    <td>{user.occupation}</td>
                                                    <td>{user.marital_status}</td>
                                                    <td>{user.smoking_habit}</td>
                                                    <td>{user.feet}.{user.inch}</td>
                                                    <td>{user.weight}</td>
                                                </tr>
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
export default Users;