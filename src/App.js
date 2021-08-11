import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Call from './Call';
import Body from './components/Body/Body';
import Header from './components/Body/Header/Header';
import Footer from './components/Body/Header/Footer';


const App = () => {

  return (
    <>
<Router>
  <Switch>
    <Route path ='/'>
      <Header />
      <Body />
      <Footer />
    </Route>
  </Switch>
</Router>
    </>
  );
};

export default App;
