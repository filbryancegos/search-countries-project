import React, {useState, useEffect} from 'react'
import { CountryItem } from "./"
import { Pagination, SearchBar  } from '../components'

import { useContryContext } from '../context/Country'

const Country = () => {
  const { state } = useContryContext();
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-4 md:gap-x-8 md:gap-y-8 mt-5">
        { state.currentItems?.map((item, id) => 
          <CountryItem key={id} {...item} />
        ) }
      </div>
      <Pagination />
    </>
  )
}

export default Country