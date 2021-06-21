import React from 'react';
import Navbar from '../components/Navbar/Navbar'

export default function Help() {
    return (
        <div className="space-y-6 w-full">
        <Navbar/>

        {
            //Let's first start with another Div
            //with a background of grayish white or something like that.
        }

        <div className="bg-whitesmoke w-50 border border-gray-200">
            <h4 className="color-black">Help Centre</h4>
        </div>

        <div className="border">
            <h3 className="left-10">How do I change my password?</h3>
            <p>Sign out off your account click the forgot password link at the bottom left.</p>
        </div>


    </div>
    )
}