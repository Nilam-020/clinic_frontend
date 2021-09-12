import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


// let userType=localStorage.getItem("usertype")

class Header extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      
    }
  }
  handleModal() {
    this.setState({ show: true })
  }


  logOut(){
   
    axios.get("http://localhost:5000/endDoctor/"+JSON.parse(sessionStorage.getItem('user'))._id)
    .then((response)=>{
      window.location.href = "/"
      sessionStorage.clear();
    })
    .catch((err)=>{
      console.log(err);
    })
  }
 

  render() {
    const token = sessionStorage.getItem("token");
    const user = JSON.parse(sessionStorage.getItem("user"));

    return (
      <>
        <Navbar className="menu-header menu pt-3 pb-3 " expand="sm">
          <Container fluid>
            <Link className="navbar-brand logo" to='/'><img src="/assets/youheal.png" class="w-25" alt="iclinic" to="/"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navtext">

                {
                  token == null ?
                    (
                      <>
                       <a className="nav-link" href='/#section1'>About Us</a>
                      <a className="nav-link" href='/#section2'>Our Services</a>
                      <a className="nav-link" href='/#section3'>How it Works</a>
                      </>
                    ) :
                    (
                      <>

                      </>
                    )
                }
                {
                  token !== null && user.user_type === "Doctor" ?
                    (
                      <>
                        <a className="nav-link" href='/#section1'>About Us</a>
                      <a className="nav-link" href='/#section2'>Our Services</a>
                      <a className="nav-link" href='/#section3'>How it Works</a>
                        <Link className="nav-link" to='/appointment/doctor'>Appointments</Link>
                      </>
                    ) :
                    (
                      <>

                      </>
                    )
                }
                {
                  token !== null && user.user_type === "Staff" ?
                    (
                      <>
                        <Link className="nav-link" to='/Users'>Users</Link>
                        <Link className="nav-link" to='/Doctor'>Doctor</Link>
                      </>
                    ) :
                    (
                      <>

                      </>
                    )
                }

                {
                  token != null && user.user_type === "Patient" ? (
                    <>
                      <Link className=" nav-link" to='/findDoctors'>Doctors</Link>
                    </>

                  ) :
                    (
                      <p></p>
                    )
                }
              </Nav>
              <Nav>

                {
                  token != null ?
                    (
                      <NavDropdown title={user.firstname} id="basic-nav-dropdown" renderMenuOnMount={true}>
                        <NavDropdown.Item href="/profile" className="pr-2">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={this.logOut} className="pr-2">Logout</NavDropdown.Item>
                      </NavDropdown>
                    ) :
                    (
                      <div>

                        <Link className="btn btn-outline-primary logbtn btn-lg px-4 mx-2" to="/login">Login</Link>
                        <Link className="btn btn-outline-light regbtn btn-lg bg-primary pl-2" to="/Register">Sign Up</Link>
                      </div>
                    )
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
};

export default Header;