import React, { Component, state, registerUser } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Register extends Component {

  state = {
    firstname: "",
    lastname: "",
    address: "",
    date_of_birth: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
  }

  registerUser = (e) => {
    e.preventDefault();
    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      date_of_birth: this.state.date_of_birth,
      email: this.state.email,
      gender: this.state.gender,
      phone: this.state.phone,
      password: this.state.password
    }
    // console.log(userData)
    axios.post("http://localhost:5000/user/register", userData)
      .then(response => {
        if (response.data.success === true) {
          swal({
            "title": "success!!",
            "text": response.data.message,
            "icon": "Register Success"
          })
          window.location.href = "/login"
        } else {
          swal({
            "title": "Error!!",
            "text": response.data.message,
            "icon": "login failed"
          })
        }

      })

      .catch(err => {
        console.log(err)
      })
    //          
  }
  render() {
    const digitizer = (n) => {
      let num = n;
      if (num < 10) {
          num = "0" + num;
      }
      return num
  }
    const getFormattedToday = (date) => {
      return `${date.getFullYear()}-${digitizer(date.getMonth() + 1)}-${digitizer(date.getDate())}`
    }
    let today = new Date();
    today.setFullYear(today.getFullYear() - 16);
    let maxDate = getFormattedToday(today);
    today.setFullYear(today.getFullYear() - 64);
    let minDate = getFormattedToday(today);
    return (

      <>
        <Container bg-white fluid>
          <Container className="bg-white py-5 w-100">
            <Row>
              <Col md={6} sm={12} className="menu loginform mx-auto">
                <h5 className="text-center boldtext pt-3">Register</h5>
                <p className="text-center pt-1">Register to book an appointment.</p>
                <Form className="mt-1">
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Ram" name="firstname" autocomplete="off" value={this.state.firstname}
                        onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="karki" name="lastname" autocomplete="off" value={this.state.lastname}
                        onChange={(event) => { this.setState({ lastname: event.target.value }) }}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="example@email.com" autocomplete="off" required name="email" value={this.state.email}
                      onChange={(event) => { this.setState({ email: event.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="Date" placeholder="Date of Birth" autocomplete="off" min={minDate} max={maxDate} name="Dob" value={this.state.date_of_birth}
                      onChange={(event) => { this.setState({ date_of_birth: event.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Current Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" autocomplete="off" name="address" value={this.state.address}
                      onChange={(event) => { this.setState({ address: event.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select a Gender</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      onChange={(event) => { this.setState({ gender: event.target.value }) }}
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={(event) => { this.setState({ gender: event.target.value }) }}
                    />
                    <Form.Check
                      type="radio"
                      label="Others"
                      name="gender"
                      value="Others"
                      onChange={(event) => { this.setState({ gender: event.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" autocomplete="off" placeholder="Mobile Number" name="phone" value={this.state.phone}
                      onChange={(event) => { this.setState({ phone: event.target.value }) }}
                    />
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" autocomplete="off" placeholder="Password" name="password" value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" autocomplete="off" name="password2" placeholder="Confirm Password" />
                    </Form.Group>
                  </Row>

                  <p className="text-center"><Link className="btn-outline-primary px-5  mt-3  btn btn-lg" type="submit" onClick={this.registerUser}>
                    Register
                  </Link></p>
                </Form>
                <p className="text-center logintext mt-3">Already have an account?  <Link to='/login'>
                  login
                </Link></p>
              </Col>
            </Row>
          </Container>
        </Container>
      </>

    )
  }
}

export default Register;