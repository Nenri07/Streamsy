import React from 'react'
import { SearchBar, Notification, CreateVideo, Microphone } from './index'
import {Logo} from '../index'
import {useSelector} from 'react-redux'



function Header() {

  const userData= useSelector((state)=> state.auth.userData)
  return (
    <div className="navbar  shadow-sm flex gap-5 p-4 pt-2 ">
      <div className="flex-none ">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22" /></svg>        </button>
      </div>
      <a className="text-xl flex-none -ml-4"><Logo/></a>
      <div className="flex-1 flex justify-center items-center px-8">
        <div className="flex items-center gap-2 w-full max-w-2xl">
          <SearchBar className="flex-1 flex" />
          <Microphone />
        </div>
      </div>
      <CreateVideo />
      <div className="flex-none ">

        <div className="dropdown dropdown-end flex-1">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-sm indicator-item ">10</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-[#4c7394] border ">
              <img
                alt="Tailwind CSS Navbar component"
                 className="w-full h-full object-cover object-center"
                //here image comes static
                src={userData?userData.avatar:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

