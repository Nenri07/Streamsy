"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"

function SuggesterVideos() {
  const [videos] = useState([
    {
      id: 1,
      title: "Realize",
      channel: "Konomi Suzuki Official",
      verified: true,
      views: "3.7M",
      uploadedAt: "2 years ago",
      duration: "4:04",
      thumbnail: "/anime-music-video-realize.jpg",
    },
    {
      id: 2,
      title: "Haikyuu - Industry Baby [AMV]",
      channel: "Nanna",
      verified: false,
      views: "4.2M",
      uploadedAt: "4 years ago",
      duration: "3:33",
      thumbnail: "/haikyuu-industry-baby-amv.jpg",
    },
    {
      id: 3,
      title: "sewerperson - homemade phoenix [Lyrics / AMV]",
      channel: "Biteki びてき",
      verified: true,
      views: "21K",
      uploadedAt: "2 months ago",
      duration: "2:45",
      thumbnail: "/sewerperson-homemade-phoenix.jpg",
    },
    {
      id: 4,
      title: "Money Trees",
      channel: "Kendrick Lamar",
      verified: true,
      views: "368M",
      uploadedAt: "7 years ago",
      duration: "6:27",
      thumbnail: "/money-trees-kendrick-lamar.jpg",
    },
    {
      id: 5,
      title: "Blinding Lights",
      channel: "The Weeknd",
      verified: true,
      views: "2.1B",
      uploadedAt: "4 years ago",
      duration: "3:20",
      thumbnail: "/blinding-lights-the-weeknd.jpg",
    },
  ])

  return (
    <div className="w-full space-y-3">
      {videos.map((video) => (
        <div
          key={video.id}
          className="group flex gap-3 rounded-lg hover:bg-gray-900/50 p-2 cursor-pointer transition-colors duration-200"
        >
          {/* Thumbnail */}
          <div className="relative flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden bg-gray-800">
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-200"
            />
            {/* Duration Badge */}
            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
              {video.duration}
            </div>
          </div>

          {/* Video Info */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-gray-200 transition-colors">
                {video.title}
              </h3>

              {/* Channel */}
              <div className="flex items-center gap-1 mt-1">
                <p className="text-xs text-gray-400 hover:text-gray-300">{video.channel}</p>
                {video.verified && (
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* Views and Time */}
              <p className="text-xs text-gray-500 mt-1">
                {video.views} views • {video.uploadedAt}
              </p>
            </div>
          </div>

          {/* Menu Button */}
          <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-800 rounded-full">
            <MoreVertical size={16} className="text-gray-400" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default SuggesterVideos
