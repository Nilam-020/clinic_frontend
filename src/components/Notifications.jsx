import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../Context';
import audio from '../audioloop/callreceived.mp3'
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>Join meeting</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
          <audio>
            <source src={audio} type="audio/mp3"></source>
          </audio>
        </div>
      )}
    </>
  );
};

export default Notifications;
