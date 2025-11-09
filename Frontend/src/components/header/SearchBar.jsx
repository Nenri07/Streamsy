import React from 'react'

function SearchBar({
    className="",
    ...props
}) {
  return (
    <div className={` ${className} `}> 
        <input type="text" placeholder="Search" className="input focus:outline-none focus:border-blue-500 w-24 md:w-auto rounded-l-4xl flex-1/2" />
            <button className="btn btn-soft rounded-r-4xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
            </button>
    </div>
  )
}

export default SearchBar
