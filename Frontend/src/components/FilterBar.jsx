"use client"

import { useState, useEffect } from "react"

const FilterBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // YouTube-style filters
  const filters = ["All", "Anime", "Java", "Python", "MERN", "Streamsy", "BlockChain", "Music", "Gaming", "Mixes", "Live", "News", "Animation", "Comedy", "Recently uploaded"]

  // Filter handler
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter)
    // You can emit an event or use context to communicate with parent
  }

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScrollEffect = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScrollEffect)
    return () => window.removeEventListener("scroll", handleScrollEffect)
  }, [])

  // Handle filter container scroll
  useEffect(() => {
    const handleFilterScroll = () => {
      const container = document.getElementById('filter-scroll-container')
      if (container) {
        setShowLeftArrow(container.scrollLeft > 0)
      }
    }

    const container = document.getElementById('filter-scroll-container')
    if (container) {
      container.addEventListener('scroll', handleFilterScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleFilterScroll)
      }
    }
  }, [])

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "backdrop-blur-md  border-b border-base-content/10" 
        : "bg-[#0f0f0f]"
    }`}>
      <div className="px-5 py-3">
        <div className="flex items-center gap-2">
          {/* Left Scroll Button - Conditional */}
          {showLeftArrow && (
            <button
              onClick={() => {
                const container = document.getElementById('filter-scroll-container');
                if (container) {
                  container.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:bg-base-content/20"
              style={{ backgroundColor: '#272727' }}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Filter Buttons Container */}
          <div 
            id="filter-scroll-container"
            className="flex overflow-x-auto gap-3 flex-1 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterSelect(filter)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-base-content text-base-300"
                    : "text-base-content hover:bg-base-content/20"
                }`}
                style={selectedFilter !== filter ? { backgroundColor: '#272727' } : {}}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Right Scroll Button - Always Visible */}
          <button
            onClick={() => {
              const container = document.getElementById('filter-scroll-container');
              if (container) {
                container.scrollBy({ left: 200, behavior: 'smooth' });
              }
            }}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:bg-base-content/20"
            style={{ backgroundColor: '#272727' }}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar