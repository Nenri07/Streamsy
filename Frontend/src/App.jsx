"use client"

import { Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import useRefreshToken from "./hooks/useRefreshToken.js"
import { Header, Sidebar,FilterBar } from "./components"

function App() {
  const [loading, setLoading] = useState(true)
  const refresh = useRefreshToken()
  const location =useLocation()
  const isWatchPage=location.pathname.startsWith('/watch/')
  const mainContentMarginClass = isWatchPage ? 'ml-0' : 'sm:ml-64';


  useEffect(() => {
    const initializeApp = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error("Refresh error:", err)
      } finally {
        setLoading(false)
      }
    }

    initializeApp()
  }, [refresh])

  return !loading ? (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="fixed w-full top-0 left-0 z-20">
        <Header />
      </div>

      <div className="flex pt-14">
        {!isWatchPage && <Sidebar />}

        <main className={` bg-[#0f0f0f] flex-1  ${mainContentMarginClass} min-h-[calc(100vh-3.5rem)] overflow-y-auto`}>
         {!isWatchPage && <FilterBar/>} 
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  )
}

export default App



