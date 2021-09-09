import React, { useContext } from 'react';
import { SocketContext } from '../Context';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <>
        <Container className="notification_call py-3 mb-3">
          <Row>
            <Col className="text-center">
            <Link className="text-decoration-none h3 mr-3">Join Meeting</Link> <Link className="btn btn-primary px-5 py-2" style={{marginLeft:"10%"}} onClick={answerCall}> Join </Link>
            </Col>
          </Row>
        </Container>
        </>
        
      )}
    </>
  );
};

export default Notifications;
