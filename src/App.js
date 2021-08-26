import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Body from './components/Body/Body';
import Header from './components/Body/Header/Header';
import Footer from './components/Body/Header/Footer';
import DoctorLogin from './components/Doctor/DoctorLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/doctor/login' exact>
            <DoctorLogin />
            <Footer></Footer>
          </Route>
          <Route path='/'>
            <Header />
            <Body />
            <Footer />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
