import React, { useState, useEffect, useContext } from 'react'
import { Col, Row, Container, Table, Form } from 'react-bootstrap'
import axios from 'axios'
import Doctorcall from './Doctorcall'
import { SocketContext } from '../../../../Context'
import { Link } from 'react-router-dom'
import { AllInboxOutlined } from '@material-ui/icons'
import { toast } from 'react-toastify'

const UserInfo = (props) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  let { } = props
  let [userInfo, setuserInfo] = useState([])
  let [auth, setAuth] = useState({
    "config": {
      "headers": {
        "authorization": `Bearer ${sessionStorage.getItem("token")}`
      }
    }
  })
  let [complete, setComplete] = useState({
    "status": 'completed'
  })

  useEffect(() => {

    axios.get("http://localhost:5000/retrieveAppointmentInstance/" + props.match.params.aid)
      .then((response) => {
        console.log(response)
        if (response.data.success == true) {
          setuserInfo(response.data.data)
          sessionStorage.setItem('setuserInfo')
          console.log(response.data.data)
        }
      }).catch((err) => {
        console.log(err.response)
      })
  }, [])


  let userAppointment = userInfo[0];

  // const status =(e)=>{
  //   e.preventDefault()
  //   axios.put("http://localhost:5000/doctor/profile/update/"+props.match.params.id)
  //   .then((response)=>{
  //     if(response.data.success===true){
  //       toast.success("This call is completed")
  //     }else{
  //       toast.error(response.data.error)
  //     }
  //   }).catch((error)=>{
  //     console.log(err.response)
  //   })
  // }

  const markComplete = (e) => {
    axios.put("http://localhost:5000/makeCompleted/" + userAppointment._id, {}, auth.config)
      .then((response) => {
        toast.success(response.data.message)
        window.location.href = "/appointment/doctor"
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <Container fluid>
        <Row className="mt-2">
          <Col>
            <Doctorcall />
          </Col>
          {
            callAccepted ? (
              <>
              </>
            ) : (
              <Col sm={5} className="menu mb-2">

                <Table className="table table-striped mt-2">
                  <thead>

                    {
                      userAppointment &&
                      (
                        <>
                          <tr>
                            <th>Patient Name</th>
                            <td>{userAppointment.UID.firstname} {userAppointment.UID.lastname}</td>
                          </tr>
                          <tr>
                            <th>Address</th>
                            <td>{userAppointment.UID.address}</td>
                          </tr>
                          <tr>
                            <th>Age</th>
                            <td>{userAppointment.UID.date_of_birth}</td>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <td>{userAppointment.UID.phone}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>{userAppointment.UID.email}</td>
                          </tr>
                          <tr>
                            <th>Blood Group</th>
                            <td>{userAppointment.UID.blood_group}</td>
                          </tr>
                          <tr>
                            <th>occupation</th>
                            <td>{userAppointment.UID.occupation}</td>
                          </tr>
                          <tr>
                            <th>Smoking Habit</th>
                            <td>{userAppointment.UID.smoking_habit}</td>
                          </tr>
                          <tr>
                            <th>Height</th>
                            <td>{userAppointment.feet}.{userAppointment.UID.feet}ft</td>
                          </tr>
                          <tr>
                            <th>Weight</th>
                            <td>{userAppointment.UID.weight}</td>
                          </tr>
                        </>
                      )
                    }


                  </thead>

                </Table>

                {
                  userAppointment &&
                  (
                    <>
                      <h4>Problem</h4>
                      <textarea rows="5" className="w-100" value={userAppointment.description} disabled={true} />
                      <Form className="mt-3 text-center">
                        {
                          userAppointment.status == "unread" ?
                            (
                              <button type="button" name="complete" className="btn btn-primary p-2" onClick={(e) => { markComplete(e) }}>  Mark as Completed  </button>
                            ) :
                            (
                              <>
                                <button type="button" name="complete" className="btn btn-success p-2" onClick={(e) => { markComplete(e) }}>  Completed  </button>

                              </>
                            )
                        }

                      </Form>
                    </>
                  )
                }
              </Col>

            )
          }
        </Row>
      </Container>
    </>
  )
}

export default UserInfo
