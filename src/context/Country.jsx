import React, { useContext, createContext, useReducer, useEffect, useRef, useState } from 'react'
import { countryReducer, INITIAL_STATE } from '../reducer'
import { useFetch } from '../components/hooks'
import { ACTION_TYPES } from '../actions';

const ContryContext = createContext();

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(countryReducer, INITIAL_STATE)
const { fetchAll } = useFetch('https://restcountries.com/v3.1/all');
const searchByName = useRef()
const [searchName, setSearchName] = useState();

useEffect(() => {
  fetchAll()
  .then(data => {
    dispatch({
      type: ACTION_TYPES.DISPLAY_COUNTRY,
      payload: data
    })
  })
}, [])

useEffect(() => {
  fetchAll()
  .then(data => {
    filterByRegion(data)
  })

  const filterByRegion = async (data) => {
    try {
      if (state.region === 'All') {
        dispatch({
          type: ACTION_TYPES.DISPLAY_COUNTRY,
          payload: data
        })
      } else {
        const filteredRegion = await data.filter(country => {
          if (country.region === state.region) {
           return country;
          }
        });
  
        dispatch({
          type: ACTION_TYPES.DISPLAY_COUNTRY,
          payload: filteredRegion
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}, [state.region])


useEffect(() => {
  fetchAll()
  .then(data => {
    filterByName(data)
  })

  const filterByName = async (data) => {
    if (!searchName) {
      dispatch({
        type: ACTION_TYPES.DISPLAY_COUNTRY,
        payload: data
      })
    } else {
      const filteredName = data.filter(country => country.name.common.includes(searchName) || country.name.official.includes(searchName))
      dispatch({
        type: ACTION_TYPES.DISPLAY_COUNTRY,
        payload: filteredName
      })
    }
  }
}, [searchName])


const handlePagination = (currentItems) => {
  dispatch({
    type: ACTION_TYPES.HANDLE_PAGINATION,
    payload: currentItems
  })
}

const handleSelectRegion = (e) => {
  dispatch({
    type: ACTION_TYPES.HANDLE_REGION,
    payload: e.target
  })
}

const handleSearchName = () => {
  setSearchName(searchByName.current.value)
  if (searchName) {
    dispatch({
      type: ACTION_TYPES.HANDLE_SEARCH_BY_NAME,
      payload: searchName,
    })
  }
  searchByName.current.value = ''
}

  return (
  <ContryContext.Provider
    value={{
      state,
      handlePagination,
      handleSelectRegion,
      handleSearchName,
      searchByName
    }}
  >
    {children}
  </ContryContext.Provider>
  );
}

export const useContryContext = () => {
  return useContext(ContryContext)
}

export { ContryContext, AppProvider }