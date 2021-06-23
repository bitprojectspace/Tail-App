import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
import JobCard from '../components/JobCard/JobCard';

//import {API,graphqlOperation} from 'aws-amplify';

export default function BrowseJobs() {

    return (
      <div className="bg-Gray">
        <Navbar />
        <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover">
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