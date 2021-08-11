import { Component } from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";
import AdminHome from "../Admin/AdminHome";
import ChangeDoctorPassword from "../Doctor/tabnav/changeDoctorPassword";
import DoctorHome from "../Doctor/tabnav/DoctorHome";
import MedicalInformation from "./MedicalInformation";
import UserHome from "./UserHome";
import UserPic from "./UserPic";

class Profile extends Component {
    constructor(props) {
        super(props)
        const token = sessionStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }


    render() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        const token = sessionStorage.getItem("token")
        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />
        }
        return (
            <Container>
                <Row>
                    <Col>

                        {
                            user.user_type == "Patient" ? (
                                <>
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                                        <Tab eventKey="home" title="My Information">
                                            <UserHome />
                                        </Tab>
                                        <Tab eventKey="profile" title="Medical Details">
                                            <MedicalInformation />
                                        </Tab>
                                        <Tab eventKey="picture" title="Update Profile">
                                            <UserPic />
                                        </Tab>

                                    </Tabs>
                                </>
                            ) : (
                                <>
                                </>
                            )

                        }
                        {
                            user.user_type === "Staff" ? (
                                <>
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                                        <Tab eventKey="home" title="My Information">
                                            <AdminHome />
                                        </Tab>
                                    </Tabs>
                                </>
                            ) :
                                (
                                    <></>
                                )
                        }
                        {
                            user.user_type === "Doctor" ? (
                                <>
                                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                                        <Tab eventKey="home" title="My Information">
                                            <DoctorHome />
                                        </Tab>
                                    </Tabs>
                                </>
                            ) :
                                (
                                    <></>
                                )
                        }
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default Profile;