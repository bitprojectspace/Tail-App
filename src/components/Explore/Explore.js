import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import BrowseJobs from '../../Pages/BrowseJobs';
import { Link } from 'react-router-dom';

export default class Explore extends Component {
    render() {
        return (
            <section id="explore" className="section section-icons grey lighten-4 center">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">Looking at...</span>
                        </h4>
                        <div className="col s12 m6">
                            <Link to="/BrowseJobs">
                            <div className="card-panel">
                            <i class="material-icons medium purple-text">handyman</i>
                            <h4>Jobs</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p> */}
                            </div>
                            </Link>
                        </div>
                        <div className="col s12 m6">
                            <Link to="/CustProfile">
                            <div className="card-panel">
                            <i class="material-icons medium purple-text">menu_book</i>
                            <h4>Post a Job</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p> */}
                            </div>
                            </Link>
                        </div>
                        {/* <div className="col s6 m3">
                            <div className="card-panel">
                            <span class="material-icons purple-text">plumbing</span>
                            <h4>Plumber</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                            <span class="material-icons purple-text">construction</span>
                            <h4>Handyman</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        )
    }
}
