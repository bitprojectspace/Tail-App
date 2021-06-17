//import React, { Fragment } from 'react';
import '../App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Search from '../components/Search/Search';
import Explore from '../components/Explore/Explore';
import Adventure from '../components/Adventure/Adventure';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
//import { Route, Link } from 'react-router-dom';

function Home(){
    return(
        <div>
                <Navbar />
                <Banner />
                <Search />
                <Explore />
                <Adventure />
                <Gallery />
                <Footer />
        </div>
    )
}

export default Home;
