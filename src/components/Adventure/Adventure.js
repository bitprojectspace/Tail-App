import electric from "../../images/electric-repair.jpg";
import patio from "../../images/patio-repair.jpg";
import plumber from "../../images/plumber-repair.jpg";
//import carpenter from '../../images/carpenter-repair.jpg';
import { HashLink as Link } from "react-router-hash-link";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import React, { Component, useState, useEffect } from "react";
import { listPopUps } from "../../graphql/queries";
import { getByTitle } from "@testing-library/react";

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
        <div className="row">
          <h4 className="center">
            <span className="purple-text darken-1">Reviewing</span>
          </h4>

          {ads.map((ad) => {
            return (
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
                    <p>{ad.title}</p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      {ad.description}
                      <i className="material-icons right">close</i>
                    </span>
                    <p>{ad.mdescription}</p>
                    <p>{ad.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 *         <div className="desperation">
          {ads.map((ad) => {
            return (
              <div className="row">
                <div>{ad.title}</div>
                <div>{ad.description}</div>
              </div>
            );
          })}
        </div>
 */
