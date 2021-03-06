//import React, { Fragment } from 'react';
import '../src/App.css'
// import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import CustProfile from './Pages/CustProfile';
import ContractorProfile from './Pages/ContractorProfile';
import ContractorProfileView from './Pages/ContractorProfileView';
import Help from './Pages/Help';
import BrowseJobs from './Pages/BrowseJobs';
import MakeQuote from './Pages/MakeQuote';
import BrowseContractors from './Pages/BrowseContractors';
import JobDisplay from './Pages/JobDisplay';
import CustProfileView from './Pages/CustProfileView';
//import PostJobs from './Pages/PostJobs';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Imports for Amplify sign in and out.
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listContractors } from './graphql/queries';
import React, { useEffect, useState } from "react";


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
            <ContractorProfile />
          </Route>

          <Route exact path="/Help">
            <Help />
          </Route>

          <Route exact path="/BrowseJobs">
            <BrowseJobs />
          </Route>

          <Route exact path="/MakeQuote">
            <MakeQuote />
          </Route>

          <Route exact path="/BrowseContractors">
            <BrowseContractors />
          </Route>

          <Route exact path="/JobDisplay">
            <JobDisplay />
          </Route>

          <Route exact path="/CustProfileView">
            <CustProfileView />
          </Route>

          <Route exact path="/ContractorProfileView">
            <ContractorProfileView />
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