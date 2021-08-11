import React from 'react'
import { Col, Container, Row, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Call from '../../../Call'

const Login = (props) => {

  return (
    <Container className="bg-white" fluid>
      <Container className="bg-white p-5 w-100">
        <Row>
          <Col md={6} className="my-auto">
            <Image src="assets/login.png" className="w-100 loginimage " />
          </Col>
          <Col md={6} sm={12} className="menu loginform">
            <h5 className="text-center boldtext pt-3">Log in</h5>
            <p className="text-center pt-1">Enter your credentials to proceed.</p>
            <Form className="mt-1">
              <Form.Group>
                <Form.Label className="labelname text-primary">Mobile Number</Form.Label>
                <Form.Control length="10" placeholder="Mobile Number"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labelname text-primary">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="text-center">
                <Link className="btn-outline-primary px-5  mt-3  btn btn-lg " type="submit">
                  Login
                </Link>
              </div>
            </Form>

            <p className="text-center logintext mb-4 mt-3">Don't have an Account ?  <Link to='/register'>
              Register
            </Link></p>
          </Col>
        </Row>
      </Container>
      <Call />
    </Container>
  )
}

export default Login
