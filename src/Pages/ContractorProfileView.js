import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import PastJob from '../components/PastJob/PastJob';
import Rating from '../components/Rating/Rating';
import Upload from './ImageDemo';
//import History from '../components/History';
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';

export default function ContractorProfile() {
  return (
    //Wrapper Thing.
    <div className="space-y-6 w-full">
      {
        //Personal Information
      }
      <Navbar />
      <Rating />
      <Upload />
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">

            {
              //The wrapper for the entire Profile sections items
            }
            <div className="mt-5 md:mt-0 md:col-span-2">

              {
                //The wrapper for the entire Profile sections items
              }
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form className="space-y-6" action="#" method="POST">

                  {
                    //Avatar Photo
                  }
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center space-x-5">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {
                    //The Cover Photo
                  }
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input type="text" name="company_name" id="company_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div>
                <label htmlFor="des" className="block text-sm font-medium text-gray-700">
                  Company Description
                </label>
                <label htmlFor="des" className="block text-sm font-medium text-gray-700">
                </label>
              </div>

              {
                //Prototype for qualifications
              }

              <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                  Qualifications
                </label>
                <div className="mt-1">
                  <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 ">
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <label htmlFor="des" className="block text-sm font-medium text-gray-700">
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country / Region
                  </label>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  </label>
                </div>

                <div className="col-span-6">
                  <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  </label>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                      ZIP / Postal
                    </label>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">

                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            //Profile Section
          }

          {
            //Display past jobs
          }
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Previous Jobs</h3>
              </div>
            </div>
          </div>
          <div className="block">
            <PastJob />
          </div>
        </div>
      </div>
    </div>
  )
}

//export default withAuthenticator(App);</ /AmplifySignOut />