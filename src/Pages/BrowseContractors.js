import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
//import { Link } from 'react-router-dom';
//import ContractorProfle from './ContractorProfile';
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
          <div className="flex flex-col h-full items-center">
             <div className = "contractors">
                {contractors.map(contractor => {
                   return (
                     <div className="bg-white shadow overflow-hidden sm:rounded-lg w-4/12 mx-0 my-1">
                     <div className="px-4 py-5 sm:px-6">
                       <h3 className="text-lg font-bold leading-6 text-gray-900">Customer Service Chat Representative - Remote - Canada</h3>
                     </div>
                     
                     <div className=" px-4 py-5 sm:p-0">
                       <dl className="sm:divide-y sm:divide-gray-200">
                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.fullName}</dd>
                         </div>
               
                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Rating</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.rating}</dd>
                         </div>
                      
                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Address</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.address}</dd>
                         </div>

                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">City</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.city}</dd>
                         </div>

                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Postal Code</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.postalCode}</dd>
                         </div>

                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Email</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.email}</dd>
                         </div>

                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.phoneNumber}</dd>
                         </div>

                         <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                           <dt className="text-sm font-medium text-gray-500">Registration Date:</dt>
                           <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.registrationDate}</dd>
                         </div>
               
                         </dl>
                      </div>
                   </div>
                   )
                })}
             </div>
          </div>    
      </div>
    )
}