import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useContryContext } from '../context/Country'

const SearchBar = () => {
  const { state, handleSelectRegion, handleSearchName, searchByName } = useContryContext();
  console.log('sdfsdfds');
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4">
        <div className="col-span-1">
          <label class="block relative">
            <span className="absolute top-10 left-4"><FiSearch /></span>
            <span class="text-gray-700">Search by Name</span>
            <div className='flex gap-2'>
              <input ref={searchByName}  name="countryname" type="text" class="block w-full pl-10" placeholder="" />
              <button onClick={handleSearchName} className='bg-blue-400 p-3 rounded-sm'>Search</button>
            </div>
          </label>
        </div>
        <div className="col-span-2"></div>
        <div className='col-span-1 lg:col-span-1 justify-end'>
          <label class="block">
            <span class="text-gray-700">Search By Region</span>
            <select name="region" onChange={handleSelectRegion} value={state.region} class="block w-full mt-1">
              {state.regions?.map((item, idx) => 
                 <option key={idx} value={item}>{item}</option>
              )}
            </select>
          </label>
        </div>
       
      </div>
    </>
  )
}

export default SearchBar