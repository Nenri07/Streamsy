import React from 'react'

function Button({
    children,
    className='',
    backgroundColor='bg-gray-400',
    textColor='text-white',
    type='button',
    ...props
}) {
  return (
    <button
    className={`px-6 py-2 rounded-full duration-200 ${textColor} ${backgroundColor} ${className}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button