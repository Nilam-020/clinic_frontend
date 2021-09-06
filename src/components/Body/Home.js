import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

const Home = () => {
  Aos.init({
    duration: 2000
  })
  return (
    <>
      <Container className="aboutus" data-aos="fade-up" fluid id="section1">
        <Row className="pt-5 pl-5 px-4">
          <Col md={6} sm={12} className="mt-5" data-aos="fade-up">
            <h1 className="homeTitle">Find local specialists <br />who can take care<br />of yours</h1>
            <p className="mt-lg-4">We can help you find doctors and book an appointment as your <br />preferred availability.</p>
            <a className="btn btn-outline-primary px-5 mt-4 w-auto" href="/#section2" >Show Services</a>
          </Col>
          <Col md={6} sm={12}>
            <Image src="/assets/OBJECTS.png" alt="docImage" data-aos="fade-up" className="w-100 docImage" />
          </Col>
        </Row>
      </Container>
      <Container className="testimonials mt-5" id="section2" data-aos="fade-up" >
        <Row>
          <Col sm={12} className="services text-center">
            <h5>FASTEST SOLUTION</h5>
            <h2>4 easy steps to get your Solution</h2>
          </Col>
          <Col md={3} sm={12}>
            <Card className="card-border">
              <Card.Img src="assets/finddotor.png" className="testImg mx-auto" />
              <Card.Body>
                <Card.Title className="text-center">
                  Find Doctor
                </Card.Title>
                <Card.Text className="text-center">
                  We're here to help whenever you feel ill, but keeping you healthy is our better priority.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card>
              <Card.Img src="assets/check_doctor.png" class="testImg mx-auto" />
              <Card.Body>
                <Card.Title className="text-center">
                  Check doctor

                </Card.Title>
                <Card.Text className="text-center">
                  We can help you find available doctor appointments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card>
              <Card.Img src="assets/calendar.png" class="testImg mx-auto" />
              <Card.Body>
                <Card.Title className="text-center">
                  write problem

                </Card.Title>
                <Card.Text className="text-center">
                  From seasonal allergies to burn identification and treatment,
                  we have the resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card>
              <Card.Img src="assets/lightbulb.png" class="testImg mx-auto" />
              <Card.Body>
                <Card.Title className="text-center">
                  Request callback
                </Card.Title>
                <Card.Text className="text-center">
                  We can help you find available
                  with specialist doctors on your availability.               </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <div id="section3" data-aos="fade-up">
        <Container className="mt-5">

          <Row>
            <Col md={5} sm={12} className="find" data-aos="fade-left">
              <h5 className=" text-primary bold">FIND DOCTORS</h5>
              <h2>Consult a doctor anytime,<br />anywhere by search </h2>
              <p className="pt-5">iClinic accepts most major health care to ensure you get quality care at a cost that fits within your budget. If you are uninsured or have a high deductible, we also offer medical discount.</p>
              <p><i class="fas fa-check-circle text-primary"><span className="dominefont pl-3 text-black">iClinic is health care, but easy</span></i></p>
              <p><i class="fas fa-check-circle text-primary"><span className="dominefont pl-3 text-black ">Top-searched and experienced specialities</span></i></p>
            </Col>
            <Col md={7} sm={12}>
              <img src="assets/Group157.png" alt="someimage" className="w-100 h-100 aboutImg" />
            </Col>

          </Row>
        </Container>
        <Container className="mt-5 pt-5 pb-5" data-aos="fade-right">

          <Row>
            <Col md={6} sm={12} className="find">
              <h5 className=" text-primary bold">Request callback</h5>
              <h2>Get Free checkup<br />today,online </h2>
              <p className="pt-5">iClinic accepts most major health care to ensure you get quality care at a cost that fits within your budget. If you are uninsured or have a high deductible, we also offer medical discount.</p>
              <p><i class="fas fa-check-circle text-primary"><span className="dominefont pl-3 text-black">iClinic is health care, but easy</span></i></p>
              <p><i class="fas fa-check-circle text-primary"><span className="dominefont pl-3 text-black ">Top-searched and experienced specialities</span></i></p>
            </Col>
            <Col md={6} sm={12}>
              <img src="assets/woman-patient-dentist.png" alt="someimage" className="w-100 h-100 aboutImg" />
            </Col>

          </Row>
        </Container>
      </div>


    </>
  )
}

export default Home
