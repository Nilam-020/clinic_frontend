import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './Credentials/Login';
import Home from './Home';
import findDoctors from '../findDoctor/findDoctor'
import doctorDetail from '../findDoctor/doctorDetail'
import maintab from '../Doctor/appointmenttabnav/maintab'
import Users from '../Admin/adminComponents/showUser'
import Doctor from '../Admin/adminComponents/showDoctor'
import AddDoctor from '../Admin/adminComponents/AddDoctor'
import UpdateDoctor from '../Admin/adminComponents/updateDoctor'
import Profile from '../User/Profile'
import Appointment from '../User/Appointment'

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/findDoctors' exact component={findDoctors} />
        <Route path='/doctorDetail/:id' exact component={doctorDetail} />
        <Route path="/appointment/doctor" exact component={maintab} />
        <Route path="/Users" exact component={Users} />
        <Route path="/doctor" exact component={Doctor} />
        <Route path="/addDoctor" exact component={AddDoctor} />
        <Route path="/updateDoctor/:id" exact component={UpdateDoctor} />
        <Route path='/Profile' exact component={Profile} />
        <Route path='/myAppointment' exact component={Appointment} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  )
}

export default Body;

