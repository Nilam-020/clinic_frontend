import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './Credentials/Login';
import Home from './Home';
import findDoctors from '../findDoctor/findDoctor'
import doctorDetail from '../findDoctor/doctorDetail'

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/findDoctors' exact component= {findDoctors} />
        <Route path='/doctorDetail/:id' exact component={doctorDetail} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  )
}

export default Body;

