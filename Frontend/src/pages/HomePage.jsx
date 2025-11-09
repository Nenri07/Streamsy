// "use client"

// // pages/HomePage.jsx
// import { useState, useEffect, useCallback } from "react"
// import videoApi from "../Apis/videos.apis"
// import tweetApi from "../Apis/tweets.api"
// import { VideoCard, TweetCard } from "../components"
// import { toast } from "react-hot-toast"
// import { VideoSkeleton } from "../components/index"

// const HomePage = () => {
//   const [videos, setVideos] = useState([])
//   const [tweets, setTweets] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [hasMore, setHasMore] = useState(true)
//   const [loading, setLoading] = useState(false)
//   const [tweetsLoading, setTweetsLoading] = useState(true)
//   const [initialLoading, setInitialLoading] = useState(true)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [showTweets, setShowTweets] = useState(false)
//   const [showLeftArrow, setShowLeftArrow] = useState(false)

//   // YouTube-style filters
//   const [selectedFilter, setSelectedFilter] = useState("All")
//   const filters = ["All","Anime","Java","Python","MERN","Streamsy","BlockChain", "Music", "Gaming", "Mixes", "Live", "News", "Animation", "Comedy", "Recently uploaded"]

//   // Fetch tweets once on component mount
//   const fetchTweets = useCallback(async () => {
//     try {
//       setTweetsLoading(true)
//       const response = await tweetApi.getAllTweets(1)

//       if (response && response.data) {
//         setTweets(response.data.tweets || [])
//       }
//     } catch (error) {
//       console.error("Fetch tweets error:", error)
//     } finally {
//       setTweetsLoading(false)
//     }
//   }, [])

//   // Fetch videos function
//   const fetchVideos = useCallback(
//     async (pageNum) => {
//       if (loading) return

//       try {
//         setLoading(true)
//         const response = await videoApi.getAllVideos(pageNum)

//         if (response && response.data) {
//           const { videos: newVideos, hasMore: moreVideos } = response.data

//           if (pageNum === 1) {
//             setVideos(newVideos)
//             setInitialLoading(false)
//           } else {
//             setVideos((prev) => [...prev, ...newVideos])
//           }

//           setHasMore(moreVideos)

//           // Show tweets after first page
//           if (pageNum === 1 && newVideos.length > 0) {
//             setShowTweets(true)
//           }

//           if (!moreVideos && pageNum > 1) {
//             toast.success("No more videos to show")
//           }
//         }
//       } catch (error) {
//         toast.error("Error loading videos")
//         console.error("Fetch videos error:", error)
//         setInitialLoading(false)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [loading],
//   )

//   // Initial load - fetch both only once
//   useEffect(() => {
//     fetchVideos(1)
//     fetchTweets()
//   }, [])

//   // Infinite scroll handler
//   const handleScroll = useCallback(() => {
//     if (loading || !hasMore) return

//     const { scrollTop, clientHeight, scrollHeight } = document.documentElement

//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       const nextPage = currentPage + 1
//       setCurrentPage(nextPage)
//       fetchVideos(nextPage)
//     }
//   }, [loading, hasMore, currentPage, fetchVideos])

//   // Add scroll event listener
//   useEffect(() => {
//     const handleScrollEffect = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     const handleFilterScroll = () => {
//       const container = document.getElementById('filter-scroll-container')
//       if (container) {
//         setShowLeftArrow(container.scrollLeft > 0)
//       }
//     }

//     // Add listener to filter container
//     const container = document.getElementById('filter-scroll-container')
//     if (container) {
//       container.addEventListener('scroll', handleFilterScroll)
//     }

//     window.addEventListener("scroll", handleScrollEffect)
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScrollEffect)
//       window.removeEventListener("scroll", handleScroll)
//       if (container) {
//         container.removeEventListener('scroll', handleFilterScroll)
//       }
//     }
//   }, [handleScroll])

//   // Filter handler
//   const handleFilterSelect = (filter) => {
//     setSelectedFilter(filter)
//   }

//   // Split videos into pages for interleaving with tweets
//   const videosPerPage = 9
//   const firstPageVideos = videos.slice(0, videosPerPage)
//   const remainingVideos = videos.slice(videosPerPage)

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Sticky Filter Bar */}
//       <div className="sticky top-0 z-40 ">
//         <div className="px-5 py-3">
//           <div className="flex items-center gap-2">
//             {/* Left Scroll Button - Conditional */}
//             {showLeftArrow && (
//               <button
//                 onClick={() => {
//                   const container = document.getElementById('filter-scroll-container');
//                   if (container) {
//                     container.scrollBy({ left: -200, behavior: 'smooth' });
//                   }
//                 }}
//                 className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
//                 style={{ backgroundColor: '#272727' }}
//                 aria-label="Scroll left"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-white">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//               </button>
//             )}

//             {/* Filter Buttons Container */}
//             <div 
//               id="filter-scroll-container"
//               className="flex overflow-x-auto gap-3 flex-1"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//                 WebkitOverflowScrolling: 'touch'
//               }}
//             >
//               <style jsx>{`
//                 div::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>
//               {filters.map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => handleFilterSelect(filter)}
//                   className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
//                     selectedFilter === filter
//                       ? "bg-base-content text-base-300"
//                       : "text-base-content"
//                   }`}
//                   style={selectedFilter !== filter ? { backgroundColor: '#272727' } : {}}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>

//             {/* Right Scroll Button - Always Visible */}
//             <button
//               onClick={() => {
//                 const container = document.getElementById('filter-scroll-container');
//                 if (container) {
//                   container.scrollBy({ left: 200, behavior: 'smooth' });
//                 }
//               }}
//               className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
//               style={{ backgroundColor: '#272727' }}
//               aria-label="Scroll right"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-white">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="px-5 pt-5">
//         {initialLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
//             {[...Array(9)].map((_, index) => (
//               <VideoSkeleton key={index} />
//             ))}
//           </div>
//         ) : (
//           <>
//             {/* First Page Videos */}
//             {firstPageVideos.length > 0 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8">
//                 {firstPageVideos.map((video) => (
//                   <VideoCard key={video._id} video={video} />
//                 ))}
//               </div>
//             )}

//             {/* Tweets Section after first page */}
//             {showTweets && tweets.length > 0 && !initialLoading && (
//               <div className="my-8">
//                 <div className="w-full h-px mb-6" style={{ backgroundColor: "#4d4d4d" }}></div>

//                 <div className="flex items-center gap-2 mb-6">
//                   <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                   </svg>
//                   <h2 className="text-2xl font-bold">Latest posts from our community</h2>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
//                   {tweets.map((tweet) => (
//                     <TweetCard key={tweet._id} tweet={tweet} />
//                   ))}
//                 </div>

//                 <div className="w-full h-px mb-6" style={{ backgroundColor: "#4d4d4d" }}></div>
//               </div>
//             )}

//             {/* Remaining Videos (Page 2+) */}
//             {remainingVideos.length > 0 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
//                 {remainingVideos.map((video) => (
//                   <VideoCard key={video._id} video={video} />
//                 ))}
//               </div>
//             )}

//             {/* Loading Spinner for pagination */}
//             {loading && !initialLoading && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
//                 {[...Array(3)].map((_, index) => (
//                   <VideoSkeleton key={index} />
//                 ))}
//               </div>
//             )}

//             {/* No More Videos */}
//             {!hasMore && videos.length > 0 && (
//               <div className="text-center my-8">
//                 <p className="text-base-content/70">No more videos to show</p>
//               </div>
//             )}

//             {/* No Videos Found */}
//             {videos.length === 0 && !loading && (
//               <div className="text-center my-16">
//                 <p className="text-base-content/70">No videos found</p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default HomePage
"use client"

import { useState, useEffect, useCallback } from "react"
import videoApi from "../Apis/baseApis/videos.apis"
import tweetApi from "../Apis/baseApis/tweets.api"
import { VideoCard, TweetCard } from "../components"
import { toast } from "react-hot-toast"
import { VideoSkeleton } from "../components/index"

const HomePage = () => {
  const [videos, setVideos] = useState([])
  const [tweets, setTweets] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [tweetsLoading, setTweetsLoading] = useState(true)
  const [initialLoading, setInitialLoading] = useState(true)
  const [showTweets, setShowTweets] = useState(false)

  // Fetch tweets once on component mount
  const fetchTweets = useCallback(async () => {
    try {
      setTweetsLoading(true)
      const response = await tweetApi.getAllTweets(1)

      if (response && response.data) {
        setTweets(response.data.tweets || [])
      }
    } catch (error) {
      console.error("Fetch tweets error:", error)
    } finally {
      setTweetsLoading(false)
    }
  }, [])

  // Fetch videos function
  const fetchVideos = useCallback(
    async (pageNum) => {
      if (loading) return

      try {
        setLoading(true)
        const response = await videoApi.getAllVideos(pageNum)

        if (response && response.data) {
          const { videos: newVideos, hasMore: moreVideos } = response.data

          if (pageNum === 1) {
            setVideos(newVideos)
            setInitialLoading(false)
          } else {
            setVideos((prev) => [...prev, ...newVideos])
          }

          setHasMore(moreVideos)

          // Show tweets after first page
          if (pageNum === 1 && newVideos.length > 0) {
            setShowTweets(true)
          }

          if (!moreVideos && pageNum > 1) {
            toast.success("No more videos to show")
          }
        }
      } catch (error) {
        toast.error("Error loading videos")
        console.error("Fetch videos error:", error)
        setInitialLoading(false)
      } finally {
        setLoading(false)
      }
    },
    [loading],
  )

  // Initial load - fetch both only once
  useEffect(() => {
    fetchVideos(1)
    fetchTweets()
  }, [])

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      fetchVideos(nextPage)
    }
  }, [loading, hasMore, currentPage, fetchVideos])

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Split videos into pages for interleaving with tweets
  const videosPerPage = 9
  const firstPageVideos = videos.slice(0, videosPerPage)
  const remainingVideos = videos.slice(videosPerPage)

  return (
    <div className="min-h-screen">
      <div className="px-5 pt-5">
        {initialLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {/* First Page Videos */}
            {firstPageVideos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8">
                {firstPageVideos.map((video) => (
                  <VideoCard key={video._id} video={video} />
                ))}
              </div>
            )}

            {/* Tweets Section after first page */}
            {showTweets && tweets.length > 0 && !initialLoading && (
              <div className="my-8">
                <div className="w-full h-px mb-6" style={{ backgroundColor: "#4d4d4d" }}></div>

                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  <h2 className="text-2xl font-bold">Latest posts from our community</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                  {tweets.map((tweet) => (
                    <TweetCard key={tweet._id} tweet={tweet} />
                  ))}
                </div>

                <div className="w-full h-px mb-6" style={{ backgroundColor: "#4d4d4d" }}></div>
              </div>
            )}

            {/* Remaining Videos (Page 2+) */}
            {remainingVideos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {remainingVideos.map((video) => (
                  <VideoCard key={video._id} video={video} />
                ))}
              </div>
            )}

            {/* Loading Spinner for pagination */}
            {loading && !initialLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                {[...Array(3)].map((_, index) => (
                  <VideoSkeleton key={index} />
                ))}
              </div>
            )}

            {/* No More Videos */}
            {!hasMore && videos.length > 0 && (
              <div className="text-center my-8">
                <p className="text-base-content/70">No more videos to show</p>
              </div>
            )}

            {/* No Videos Found */}
            {videos.length === 0 && !loading && (
              <div className="text-center my-16">
                <p className="text-base-content/70">No videos found</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage