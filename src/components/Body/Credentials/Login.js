import React,{useState,useEffect} from 'react'
import { Col, Container, Row, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Call from '../../../Call'
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = (props) => {
  let [login,setLogin] = useState({
    "phone":"",
    "password":""
  })

 

  const loginUser = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:5000/user/login",login)
    .then((response)=>{
      if(response.data.success == true)
      {
        sessionStorage.setItem('user',JSON.stringify(response.data.data));
        sessionStorage.setItem('token',JSON.stringify(response.data.token));
        toast.success("Logged In"); 
        if(response.data.data.userType == "Admin")
        {
          window.location.href = "/"
        }
        else
        {
          window.location.href = "/"
        }
      }
      else
      {
        toast.error(response.data.message);
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const changeData = (e)=>{
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

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
                <Form.Label  className="labelname text-primary">Mobile Number</Form.Label>
                <Form.Control length="10" placeholder="Mobile Number" name="phone" onChange={(e)=>{changeData(e)}}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="labelname text-primary">Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={(e)=>{changeData(e)}} />
              </Form.Group>
              <div className="text-center">
                <Link className="btn-outline-primary px-5  mt-3  btn btn-lg " type="submit" onClick={(e)=>{loginUser(e)}}>
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
