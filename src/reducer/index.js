
import { useRef } from 'react';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  country: [],
  currentItems: [],
  countryname: '',
  region: 'All',
  regions: ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
};

const countryReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.DISPLAY_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case ACTION_TYPES.DISPLAY_COUNTRY:
      return {
        ...state,
        country: action.payload,
        currentItems: action.payload.slice(0, 10),
      }
    case ACTION_TYPES.HANDLE_PAGINATION:
      return {
        ...state,
        currentItems: action.payload,
      }
    case ACTION_TYPES.HANDLE_REGION:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case ACTION_TYPES.HANDLE_SEARCH_BY_NAME:
      return {
        ...state,
        setSearchName: action.payload,
      }
    default:
     return state;
  }
}

export {
  INITIAL_STATE,
  countryReducer,
}