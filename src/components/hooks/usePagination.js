import React, { useEffect, useState } from 'react'
import { useContryContext } from '../../context/Country'

export default function usePagination() {
  const { state, handlePagination } = useContryContext();
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state.country.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    handlePagination(currentItems)
  }, [currentPage])
  

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(state.country.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return { 
    currentItems,
    currentPage,
    pages,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleNextbtn,
    handlePrevbtn,
    handleClick
    }
}
