import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ setSearchTerm }) {
  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-[500px] p-1 m-2 pl-10 border bg-blue-50 border-2 border-blue-100 rounded-lg"
        placeholder="Search widgets..."
        onChange={onChange}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBar;
