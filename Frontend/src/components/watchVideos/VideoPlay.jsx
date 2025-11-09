"use client"

import { useState } from "react"

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(30)
  const [duration, setDuration] = useState(211)

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full h-full flex flex-col bg-base-900 p-6">
      {/* Video Player Card */}
      <div className="flex-1 flex flex-col bg-base-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Video Container */}
        <div className="flex-1 relative bg-black group">
          <img src="/anime-highway-cars-scene.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="btn btn-circle btn-error w-20 h-20 flex items-center justify-center"
            >
              {isPlaying ? (
                <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 fill-white ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex-1 h-1 bg-base-600 rounded-full cursor-pointer hover:h-2 transition-all">
                <div className="h-full bg-error rounded-full" style={{ width: `${(currentTime / duration) * 100}%` }} />
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Skip Back */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M11 5V1l-5 5 5 5v-4c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L4.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v4l5-5-5-5v4z" />
                  </svg>
                </button>

                {/* Skip Forward */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M13 19V5l5 5 5-5v14l-5-5-5 5zm-2-2h2V7h-2v10z" />
                  </svg>
                </button>

                {/* Volume */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a7 7 0 0 1 0 9.9M21.5 3.5a11 11 0 0 1 0 15.56"></path>
                  </svg>
                </button>

                {/* Time Display */}
                <span className="text-white text-sm font-medium ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* CC */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center text-xs font-bold">
                    CC
                  </div>
                </button>

                {/* Settings */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
                  </svg>
                </button>

                {/* Picture in Picture */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3m0 0V1m0 4v4m8 0h4v4h-4z"></path>
                  </svg>
                </button>

                {/* Fullscreen */}
                <button className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Title */}
        <div className="bg-base-800 px-6 py-4 border-t border-base-700">
          <h3 className="text-white font-semibold text-lg">Tom Frame - Never Let This Go (Lyrics / AMV)</h3>
        </div>
      </div>
    </div>
  )
}
