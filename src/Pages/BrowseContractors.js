import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
//import ContractorCard from '../components/ContractorCard/ContractorCard';
import { useState, useEffect } from 'react';
import { listContractors } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';


export default function BrowseContractors () {

    const [contractors, setContractors] = useState([]); 

    useEffect(() => {
      fetchContractors();
     }, []);

    const fetchContractors = async() => {
       try
       {
        const contractorData = await API.graphql(graphqlOperation(listContractors));
        const contractorList = contractorData.data.listContractors.items;
        console.log('contractor list', contractorList);
        setContractors(contractorList);
       }

       catch(error) 
       {
          console.log("There was an error fetching contractors",error);
       }
    }

    return (
        <div className="bg-Gray">
        <Navbar />
          <div className="flex flex-col h-full items-center"></div>    
      </div>
    )
}