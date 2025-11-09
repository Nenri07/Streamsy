import React from 'react';
import logo from '../../public/streamsy_dark-removebg.png'; 
import { Link } from 'react-router-dom';

function Logo({className='',size=30}) {
  return (
<Link
to={`/`}
>
<div className={`flex gap-2 items-center  transition-opacity ${className}`}>
<svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#iconGradient)"
        strokeWidth="6"
        fill="none"
      />
      
      {/* Middle circle */}
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke="url(#iconGradient)"
        strokeWidth="5"
        fill="none"
      />
      
      {/* Play button triangle */}
      <path
        d="M42 32L68 50L42 68V32Z"
        fill="url(#iconGradient)"
      />

      {/* Gradient definition - purple to cyan */}
      <defs>
        <linearGradient 
          id="iconGradient" 
          x1="50" 
          y1="0" 
          x2="50" 
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
    <span className='text-xl'>streamsy</span>
    </div>
    </Link>
      );
}

export default Logo;