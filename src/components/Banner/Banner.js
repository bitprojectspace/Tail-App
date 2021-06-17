import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import ImageBannerOne from '../../images/1.jpg';
import ImageBannerTwo from '../../images/2.jpg';
import ImageBannerThree from '../../images/3.jpg';
import './Banner.css';


export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                     <li>
                         <img src={ImageBannerOne} alt="Winnipeg1"/>
                         <div className="caption center-align">
                             <h2>Friendly Winnipeg!</h2>
                             <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit!
                             </h5>
                             <Link to="#" className="btn btn-large purple">Learn More</Link>
                         </div>
                     </li>
                     <li>
                         <img src={ImageBannerTwo} alt="Winnipeg2"/>
                         <div className="caption left-align">
                             <h2>We Can Help You!</h2>
                             <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit!
                             </h5>
                             <Link to="#" className="btn btn-large purple">Learn More</Link>
                         </div>
                     </li>
                     <li>
                         <img src={ImageBannerThree} alt="Winnipeg3"/>
                         <div className="caption right-align">
                             <h2>Stay Safe Together!</h2>
                             <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit!
                             </h5>
                             <Link to="#" className="btn btn-large purple">Learn More</Link>
                         </div>
                     </li>
                </ul>
            </section>
        )
    }
}
