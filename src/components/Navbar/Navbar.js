import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import App from '../../App';
import { extend } from 'jquery';
import Contact from '../Contact/Contact';



const SmoothScroll = () => {
    return(
        <section>
            <div className="navbar-fixed">
                <nav className="purple">
                    <div className="container">
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">TheYouCrew</Link>
                            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
                                <span class="material-icons">menu</span>
                            </Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/CustProfile">Customer Profile</Link></li>
                                <li><Link to="/ContractorProfile">Contractor Profile</Link></li>
                                <li><Link to="/">Jobs</Link></li>
                                <li><Link to="/">Sign In</Link></li>
                                <li><Link to="/">Sign Up</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/CustProfile">Customer Profile</Link></li>
                <li><Link to="/">Jobs</Link></li>
                <li><Link to="/">Sign In</Link></li>
                <li><Link to="/">Sign Up</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </section>
    )
}


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}
