import React from 'react'

function CreateVideo() {
    return (
        <button className="btn btn-soft rounded-4xl flex justify-center items-center">
            <svg
                aria-label="New"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className='pb-1  '>Create</span>
        </button>

    )
}

export default CreateVideo