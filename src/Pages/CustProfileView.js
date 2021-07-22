import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Rating from '../components/Rating/Rating';
import { PaperClipIcon } from '@heroicons/react/solid';
import JobHistoryCard from '../components/JobHistoryCard/JobHistoryCard';
//import History from '../components/History';
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';

export default function CustProfile() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <Navbar />
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Information about this customer</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">City</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Winnipeg</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Province</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Manitoba</dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Rating</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Rating /></dd>
          </div>


          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Job History:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><JobHistoryCard /></dd>
          </div>

        </dl>
      </div>
    </div>
  )
}