import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
import JobCard from '../components/JobCard/JobCard';
import Filter from '../components/Filter/Filter';
import JobsData from '../components/Data/JobsData';

//import {API,graphqlOperation} from 'aws-amplify';

export default function BrowseJobs() {
    const jobsComponents = JobsData.map(job => <JobCard key={job.id} title={job.title} location={job.location} budget={job.budget} desc={job.desc} /> )
    return (
      <div className="bg-Gray">
        <Navbar />
        <Filter />
        <div className="flex flex-col h-screen items-center">
          {jobsComponents}
        </div>    
      </div>
      
    )
}

{
  
     {
        /*
      
        <div>
            <Navbar />
            <StackedList />
            {
              //Alternative style. Job Card...
            }
            <JobCard />
        </div>
        */
      }
   
}