import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Rating from '../components/Rating/Rating';

export default function JobPosted() {
    return(
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <Navbar />

        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Job Posted</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Information about the job</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Job Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Urgent</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Rating</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><Rating/></dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$630</dd>
            </div>
  
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">TimeStamp</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">July,9,2021</dd>
            </div>
          </dl>
  
          <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-4 px-8 rounded-full">
            Accept
          </button>

          <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-4 px-8 rounded-full">
            Decline
          </button>
        </div>
      </div>
    )
}