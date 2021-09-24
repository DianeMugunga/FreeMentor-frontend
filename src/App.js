import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AllMentors from './components/pages/AllMentors';
import Dashboard from './components/pages/Dashboard';
import Mentors from './components/mentors';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route component={AllMentors} path='/mentors'></Route>
          <Route component={SignUp} path='/SignUp'></Route>
          <Route component={Dashboard} path="/Dashboard"/>
          <Route component={Home} path={["/home","/"]}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
