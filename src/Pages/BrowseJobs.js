import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
import JobCard from '../components/JobCard/JobCard';

//import {API,graphqlOperation} from 'aws-amplify';

export default function BrowseJobs() {

    return (
      <div>
        <Navbar />
        <JobCard />
        <StackedList />
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