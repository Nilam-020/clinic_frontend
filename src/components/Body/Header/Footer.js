import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {

    return (
        <>
           <Container fluid className="menu pb-3">
           <Container >
                <Row className="p-2">
                    <Col md={4} sm={12}>
                        <Image src="/assets/Group51.png" />
                        <p className="mt-4">Iclinic. Is The Administrative
                        Support Entity And All Clinical
Services.</p>
                        <p className="mt-4">call us  (977) 731-1022</p>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={4} sm={12}>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={3} sm={12}>
                    <div ><Link to="/" className=" text-decoration-none text-black"> <span className="copy">&copy;</span><span className="pl-1">2021 iClinic Health Services</span></Link> </div>
                    </Col>
                    <Col md={6} sm={12} className="adminLogin">
                    <Link to="/doctor/login" className="text-black">Doctor Login</Link>
                    </Col>
                    <Col className="text-lg-right border-top-2 "><li><Link to="/home" className="text-black">Terms and Conditions</Link></li></Col>
                </Row>
            </Container>
           </Container>
                   </>
    )
}

export default Footer;