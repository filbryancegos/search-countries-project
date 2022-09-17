import React from 'react'
import { usePagination } from './hooks'

const Pagination = () => {
  const {  
    currentPage,
    pages,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextbtn,
    handlePrevbtn,
    currentItems,
    handleClick } = usePagination();

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`${currentPage == number ? "bg-blue-400 text-white" : 'bg-white'} hover:bg-blue-400 hover:text-white border-solid border-2  px-4 py-1 text-black`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <div className="mt-6">
      <ul className="flex gap-4 items-center flex-wrap">
         <li
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
          className={` ${currentPage == pages[pages.length - 1] ? 'bg-blue-100 pointer-events-none' : 'bg-blue-400'} border-blue-400 border-solid border-2  px-4 py-1 hover:bg-blue-400 hover:text-white`}>PREVIOUS</li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li 
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
            className={` ${currentPage == pages[pages.length - 1] ? 'bg-blue-100 pointer-events-none' : 'bg-blue-400'} border-blue-400 border-solid border-2  px-4 py-1 hover:bg-blue-400 hover:text-white`}>NEXT</li>
      </ul>
    </div>
  )
}

export default Pagination