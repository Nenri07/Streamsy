"use client"

import { useState } from "react"
import { X, MoreVertical, ChevronUp } from "lucide-react"

function PlaylistBar({
  playlistTitle = "Mix - MONTAGEM XONADA",
  playlistDescription = "Mixes are playlists YouTube makes for you",
  videos = [
    {
      id: 1,
      title: "MONTAGEM XONADA",
      channel: "MAFIA",
      duration: "5:48",
      thumbnail: "/music-video.jpg",
    },
    {
      id: 2,
      title: "Xlout, Rvnge - JUDAS FUNKI [Official Visualizer]",
      channel: "xlout",
      duration: "2:14",
      thumbnail: "/anime-music.jpg",
    },
    {
      id: 3,
      title: "Etemxlkz - Montagem Nada Tropica (Official Audio)",
      channel: "Etemxlkz",
      duration: "1:59",
      thumbnail: "/music-video.jpg",
    },
    {
      id: 4,
      title: "Aaron Smith - Dancin (KRONO Remix) - Lyrics",
      channel: "7clouds",
      duration: "3:15",
      thumbnail: "/music-video.jpg",
    },
    {
      id: 5,
      title: "DIA DELÍCIA (Super Slowed)",
      channel: "Nakama",
      duration: "1:36",
      thumbnail: "/music-video.jpg",
    },
    {
      id: 6,
      title: "MONTAGEM LADRAO SLOWED",
      channel: "The Vibe Guide",
      duration: "2:45",
      thumbnail: "/music-video.jpg",
    },
  ],
  currentVideoId = 1,
  onVideoSelect = () => {},
}) {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div
      className={`w-full lg:w-96 2xl:w-[28rem] bg-gray-950 text-white rounded-lg border border-gray-800 overflow-hidden transition-all duration-300 ${
        isMinimized ? "h-auto" : "h-[500px] flex flex-col"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b border-gray-800 flex-shrink-0">
        <div className="flex-1 pr-2">
          <h3 className="font-bold text-base text-white line-clamp-1">{playlistTitle}</h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{playlistDescription}</p>
        </div>
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <button
            className="p-1.5 hover:bg-gray-800 rounded transition-colors"
            title="More options"
            aria-label="More options"
          >
            <MoreVertical size={18} className="text-gray-300" />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-gray-800 rounded transition-colors"
            title={isMinimized ? "Expand" : "Minimize"}
            aria-label={isMinimized ? "Expand playlist" : "Minimize playlist"}
          >
            {isMinimized ? <ChevronUp size={18} /> : <X size={18} className="text-gray-300" />}
          </button>
        </div>
      </div>

      {/* Videos List */}
      {!isMinimized && (
        <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-950">
          <div className="space-y-0 p-2">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onVideoSelect(video.id)}
                className={`flex gap-3 p-2 rounded cursor-pointer transition-all group ${
                  currentVideoId === video.id
                    ? "bg-gray-800 border-l-4 border-red-600"
                    : "hover:bg-gray-800 border-l-4 border-transparent"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-20 h-12 rounded overflow-hidden bg-gray-800">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black bg-opacity-90 text-xs px-1.5 py-0.5 rounded text-white font-medium">
                    {video.duration}
                  </span>
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0 py-0.5">
                  <h4 className="text-sm font-medium text-white line-clamp-2">{video.title}</h4>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{video.channel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PlaylistBar
