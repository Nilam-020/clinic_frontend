import React, { useState,useEffect,useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';
import { Col, Row } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
 
  

  return (
    <>
      <Row>        
        {
          stream && (
            
            <Col>
              {
                 <video playsInline muted ref={myVideo} autoPlay className="w-100" /> 
              }            
              
            </Col>
          )
        }
        {
          callAccepted && !callEnded && (
            <Col>
              <video playsInline ref={userVideo} autoPlay className="w-100" />
            </Col>
          )
        }

      </Row>
    </>
  );
};

export default VideoPlayer;
