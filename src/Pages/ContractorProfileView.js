import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import PastJob from '../components/PastJob/PastJob';
//import Upload from './ImageDemo';
import Rating from '../components/Rating/Rating';
import { PaperClipIcon } from '@heroicons/react/solid';
//import JobHistoryCard from '../components/JobHistoryCard/JobHistoryCard';
//import History from '../components/History';
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { listContractors } from '../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

export default function CustProfile() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    fetchContractors();
  }, []);

  const fetchContractors = async () => {
    try {
      const contractorData = await API.graphql(graphqlOperation(listContractors));
      const contractorList = contractorData.data.listContractors.items;
      console.log('contractor list', contractorList);
      setContractors(contractorList);
    }

    catch (error) {
      console.log("There was an error fetching contractors", error);
    }
  }

  return (

    < div className="bg-white shadow overflow-hidden sm:rounded-lg" >
      <Navbar />

      <img class="inline object-cover w-25 h-25 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Contractor Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Information about this contractor</p>
      </div>
      {contractors.map(contractor => {
        return (
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.fullName}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">City</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.city}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Province</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.province}</dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{contractor.phoneNumber}</dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Fake Company Ltd.</dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Overall Rating</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Rating />{contractor.rating}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Skills and Qualifications</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Skilled Carpenter, knows exact measurements and unit and does work on a timely manner.
                </dd>
              </div>
            </dl>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Previous Jobs</h3>
                </div>
                <div className="block">
                  <PastJob />
                </div>
              </div>
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-4 px-8 rounded-full">
              Button
            </button>
          </div>
        )
      }
      )}
    </div >
  )
}
