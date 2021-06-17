//import React, { Fragment } from 'react';
import '../src/App.css'
// import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import CustProfile from './Pages/CustProfile';
import ContractorProfile from './Pages/ContractorProfile';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Imports for Amplify sign in and out.
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator, AmplifySignIn} from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/CustProfile">
          <CustProfile />
        </Route>

        <Route exact path="/ContractorProfile">
          <ContractorProfile/>
        </Route>
        
      </Switch>
    </Router>
    </div>
  );
}

export default withAuthenticator(App);

{
  /**
   * <header className="App-header">
   *  <AmplifySignOut />
   *  <AmplifySignIn />
   * </header>
   */
}