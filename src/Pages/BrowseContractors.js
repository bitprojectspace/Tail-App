import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import StackedList from '../components/StackedList/StackedList';
import ContractorCard from '../components/ContractorCard/ContractorCard';


export default function BrowseContractors () {
    return (
        <div className="bg-Gray">
        <Navbar />
        <div className="flex flex-col h-full items-center">
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
          <ContractorCard />
        </div>    
      </div>
    )
}