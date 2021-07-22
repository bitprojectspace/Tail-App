import electric from "../../images/electric-repair.jpg";
import patio from "../../images/patio-repair.jpg";
import plumber from "../../images/plumber-repair.jpg";
//import carpenter from '../../images/carpenter-repair.jpg';
import { HashLink as Link } from "react-router-hash-link";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import React, { Component, useState, useEffect } from "react";
import { listPopUps } from "../../graphql/queries";

export default function Adventure() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const popData = await API.graphql(graphqlOperation(listPopUps));
        const adList = popData.data.listPopUps.items;
        console.log("ads list", adList);
        setAds(adList);
      } catch (error) {
        console.log("error on fetching ads", error);
      }
    };
    fetchAds();
  }, []);
  return (
    <section id="adventure" className="section section-adventure scrollspy">
      <div className="container">
        <div className="desperation">
          {ads.map((ad) => {
            return (
              <div className="row">
                <div>{ad.title}</div>
                <div>{ad.description}</div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <h4 className="center">
            <span className="purple-text darken-1">Reviewing</span>
          </h4>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={electric} alt="electric-repair" />
                <span className="card-title" alt="electric"></span>
                <Link className="btn-floating activator halfway-fab waves-effects waves-light purplr">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p>Professional electrical repair!</p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Professional electrical repair!
                  <i className="material-icons right">close</i>
                </span>
                <p>The electrician was very professional. Highly recommend!</p>
                <p>5/5</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={patio} alt="patio-repair" />
                <span className="card-title" alt="electric"></span>
                <Link className="btn-floating activator halfway-fab waves-effects waves-light purplr">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p>Nice patio repair!</p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Nice patio upgrade!
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  The handy was very professional and nice. Highly recommend!
                </p>
                <p>4/5</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={plumber} alt="plumber-repair" />
                <span className="card-title" alt="electric"></span>
                <Link className="btn-floating activator halfway-fab waves-effects waves-light purplr">
                  <i className="material-icons">add</i>
                </Link>
              </div>
              <div className="card-content">
                <p>Very professional plumber service!</p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Professional plumber service!
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  The service was very professional and quick. Highly recommend!
                </p>
                <p>5/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
