import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
import JobCard from '../components/JobCard/JobCard';
import Filter from '../components/Filter/Filter';

//import {API,graphqlOperation} from 'aws-amplify';

export default function BrowseJobs() {

    return (
      <div className="bg-Gray">
        <Navbar />
        <Filter />
        <div className="flex flex-col h-screen items-center">
          <JobCard />
          <JobCard />
          <JobCard />
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