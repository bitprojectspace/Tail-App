import React, { Fragment } from 'react';
import './App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Adventure from './components/Adventure/Adventure';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Route, Link } from 'react-router-dom';
//Imports for Amplify sign in and out.
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator, AmplifySignIn} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
    <Route>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Explore />
        <Adventure />
        <Gallery />
        <Footer />
      </Fragment>
    </Route>
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