import React from 'react'
import { Link } from "react-router-dom";

const CountryItem = ({name, capital, flags, population, region}) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:scale-110  duration-300 mt-4">
        <Link to={`country/${name.common}`}>
          <img className="w-full" src={flags.png} alt="Sunset in the mountains" />
        </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name.common}</div>
          <p className="text-gray-700 text-base">{name.official}</p>
        </div>
        <div className="px-6 pb-4">
          <p className="text-base text-black">Population: <span className="text-gray-700 font-bold">{population}</span></p>
          <p className="text-base text-black">Region: <span className="text-gray-700 font-bold">{region}</span></p>
          <p className="text-base text-black">Capital: <span className="text-gray-700 font-bold">{capital ? capital[0] : ''}</span></p>
        </div>
      </div>
    </>
  )
}

export default CountryItem