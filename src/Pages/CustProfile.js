import React from 'react';
//import History from '../components/History';
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';

export default function CustProfile() {
return (
//Wrapper Thing.
<div className="space-y-6 w-1/2">
  {
  //Personal Information
  }
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
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
                  <button type="button" className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Change
                  </button>
                </div>
              </div>

              {
              //The Cover Photo
              }
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country / Region
              </label>
              <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                Street address
              </label>
              <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                ZIP / Postal
              </label>
              <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  {
  //Profile Section
  }
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Post A Job!</h3>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
      {
      //The wrapper for the entire Profile sections items
      }
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form className="space-y-6" action="#" method="POST">

          {
          //About Section
          }
          <div>
            <label htmlFor="des" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea id="des" name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Help, my faucet is leaking..." defaultValue={''} />
            </div>
            <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
          </div>

          {
          //The Cover Photo
          }
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo of the Issue</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Post
            </button>
          </div>
        </form>
        {
            // <History />
        }
      </div>
    </div>
  </div>

  {
  //Notifications Section Card.
  }
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form className="space-y-6" action="#" method="POST">
          <fieldset>
            <legend className="text-base font-medium text-gray-900">By Email</legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="h-5 flex items-center">
                  <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Comments
                  </label>
                  <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="candidates" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="candidates" className="font-medium text-gray-700">
                    Candidates
                  </label>
                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Offers
                  </label>
                  <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
              <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input id="push_everything" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
                  Everything
                </label>
              </div>
              <div className="flex items-center">
                <input id="push_email" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
                  Same as email
                </label>
              </div>
              <div className="flex items-center">
                <input id="push_nothing" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>

  {
  // Button Section
  }
  <div className="flex justify-end">
    <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Cancel
    </button>
    <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Save
    </button>
  </div>
</div>
)
}

//export default withAuthenticator(App);</ /AmplifySignOut />