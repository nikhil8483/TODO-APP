import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={activePage === i + 1 ? 'active' : ''}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
