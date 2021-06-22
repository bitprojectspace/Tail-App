import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';

//import {API,graphqlOperation} from 'aws-amplify';

export default function BrowseJobs() {

    return (

        <div>
            <Navbar />
            <StackedList />
            {
              //Kyle's Job List (Hard Coded).
            }
        </div>
    )
}