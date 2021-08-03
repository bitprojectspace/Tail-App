import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter/Filter";
/* These are imports needed to make Job card work which was merged into this file. */
import { PaperClipIcon } from "@heroicons/react/solid";
//import dummy from "../../images/1.jpg";
import dummy from "../images/1.jpg";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { listJobs } from "../graphql/queries";

import Amplify, { API, graphqlOperation } from "aws-amplify";

export default function BrowseJobs() {
  //const jobsComponents = JobsData.map(job => <JobCard key={job.id} title={job.title} location={job.location} budget={job.budget} desc={job.desc} /> )

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await API.graphql(graphqlOperation(listJobs));
        const jobList = jobData.data.listJobs.items;
        console.log("jobs list", jobList);
        setJobs(jobList);
      } catch (error) {
        console.log("error on fetching ads", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-Gray">
      <Navbar />
      <Filter />
      {jobs.map((job) => {
        return (
          <div className="flex flex-col h-full items-center">
            <div className="bg-white shadow overflow-visible sm:rounded-lg w-5/12 mx-0 my-1">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-bold leading-6 text-gray-900">
                  {job.title}
                </h3>
              </div>
              <div className=" px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {job.location}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Date Published
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {job.date}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {job.description}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Pictures
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <img src={dummy} />
                        </li>
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <img src={dummy} />
                        </li>
                      </ul>
                    </dd>
                  </div>

                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      <Link to="/JobDisplay">View this job.</Link>
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/*
export default function JobCard(props) {
  return (

  )
}
*/
