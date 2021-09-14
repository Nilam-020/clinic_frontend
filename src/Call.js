import React, { useContext } from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import audio from './audioloop/callreceived.mp3'
import { SocketContext } from './Context'
import { Container, Row, Col } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const Call = () => {
  const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (

    <Container>
      <Row>
        <Col>
          <Notifications />
          <VideoPlayer />

        </Col>
        <Col sm={12}>
          <Sidebar>
          </Sidebar>
        </Col>
      </Row>
    </Container>
  );
};

export default Call;
