import React, { useState, useEffect, useContext } from 'react'
import { Card, Col, Container, Form, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import StarRatings from 'react-star-ratings';
import Call from "../../Call";
import { toast } from 'react-toastify';
import { SocketContext } from '../../Context';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const UserCall = (props) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

  let { } = props

  const user = JSON.parse(sessionStorage.getItem("user"));

  const [rating, setRating] = useState(0);

  let [appointment, setAppointment] = useState({
    "description": "",
    "VID": ""
  })

  let [doctorInfo, setInfo] = useState([])

  let [auth, setAuth] = useState({
    "config": {
      "headers": {
        "authorization": `Bearer ${sessionStorage.getItem("token")}`
      }
    }
  })

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    })
  }

  useEffect(() => {

    axios.get("http://localhost:5000/myratings/" + props.match.params.id + "/" + JSON.parse(sessionStorage.getItem("user"))._id)
      .then((response) => {
        console.log(response)
        if (response.data.success == true) {
          setRating(
            response.data.rating
          )
        }

      }).catch((err) => {
        console.log(err.response)
      })
  }, [])


  const changeRating = (newRating, name) => {
    axios.post('http://localhost:5000/doctor/rating/' + props.match.params.id, { "rating": newRating, "id": JSON.parse(sessionStorage.getItem("user"))._id })
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

  const addappointment = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/appointment/add/" + props.match.params.id + "/" + JSON.parse(sessionStorage.getItem("user"))._id, { "description": appointment.description, "VID": document.querySelector('#myId').value })
      .then((response) => {
        if (response.data.success === true) {
          toast.success("Your request have been successfully submitted, please wait..")

        }
        else {
          toast.warning(response.data.message)
        }
      }).catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/doctor/" + props.match.params.id).then((response) => {
      setInfo(response.data.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col>
            <Call />

          </Col>
          {
            callAccepted ? (
              <>
              </>
            ) :
              (
                <Col className="problem_card">

                  <div>
                    <Form className="bookappointment loginform mt-5 p-5 mb-5">
                      <p className="text-center text pb-3"><h3>Request for Callback</h3></p>
                      <input type='hidden' placeholder="video id" id="myId" value={sessionStorage.getItem('me')} />
                      <Form.Group>

                        <Form.Label>Problem Description </Form.Label>
                        <Form.Control as="textarea" row="4" name="description" maxlength="150" value={appointment.description} onChange={(e) => { changeHandler(e) }} required />
                      </Form.Group>
                      <p className="text-center">
           
                        <Link className="btn btn-primary px-5 mt-4 py-2 justify-content-center text-decoration-none secondtext" onClick={(e) => { addappointment(e) }} type="submit">
                          Request Callback
                        </Link></p>

                      <h1 className="text-center">     <StarRatings
                        rating={rating}
                        starRatedColor="#F25044"
                        starHoverColor="#F25044"
                        numberOfStars={5}
                        name={props.match.params.id}
                        changeRating={changeRating}

                      />
                      </h1>
                    </Form>
                  </div>

                </Col>
              )
          }

        </Row>
      </Container>
    </>
  )
}

export default UserCall
