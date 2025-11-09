"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, MoreVertical, ChevronDown, Smile } from "lucide-react"

function CommentSection() {
  const [expandedReplies, setExpandedReplies] = useState({})
  const [commentInput, setCommentInput] = useState("")
  const [inputFocused, setInputFocused] = useState(false)
  const [openMenuId, setOpenMenuId] = useState(null)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "@aquila",
      avatar: "A",
      verified: false,
      isPinned: true,
      timestamp: "8 months ago",
      text: "Who's here from the Super Bowl? 🏈 😂",
      likes: "842",
      dislikes: "12",
      replies: 43,
      emoji: "",
    },
    {
      id: 2,
      author: "@Nextiva2025",
      avatar: "N",
      verified: false,
      isPinned: false,
      timestamp: "1 year ago",
      text: '"Everybody gonna respect the shooter... but the one in front of the gun lives forever" the literal chills I got. The hardest line to exist',
      likes: "1.3K",
      dislikes: "8",
      replies: 17,
      emoji: "",
    },
    {
      id: 3,
      author: "@Bluemoon-hp7jr",
      avatar: "B",
      verified: false,
      isPinned: false,
      timestamp: "8 months ago",
      text: "This man music hit on so many different levels. The vocal inflections causes reflections promoting progression through lessons.",
      likes: "2.1K",
      dislikes: "15",
      replies: 5,
      emoji: "",
    },
  ])

  const toggleReplies = (commentId) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  const handleAddComment = () => {
    if (commentInput.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "@yourname",
        avatar: "Y",
        verified: false,
        isPinned: false,
        timestamp: "now",
        text: commentInput,
        likes: "0",
        dislikes: "0",
        replies: 0,
      }
      setComments([newComment, ...comments])
      setCommentInput("")
      setInputFocused(false)
    }
  }

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id))
    setOpenMenuId(null)
  }

  return (
    <div className="w-full text-white py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{comments.length.toLocaleString()} Comments</h2>
        <button className="flex items-center gap-2 hover:bg-gray-900 px-3 py-2 rounded-full transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>Sort by</span>
        </button>
      </div>

      {/* Comment Input */}
      <div className="flex gap-4 mb-8 pb-6 border-b border-gray-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold">a</span>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onFocus={() => setInputFocused(true)}
            className="w-full bg-transparent border-b border-gray-700 pb-2 focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
          />
          {(inputFocused || commentInput.trim()) && (
            <div className="flex items-center justify-between mt-4">
              <button className="text-gray-400 hover:text-white transition">
                <Smile className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCommentInput("")
                    setInputFocused(false)
                  }}
                  className="px-4 py-2 text-gray-300 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddComment}
                  disabled={!commentInput.trim()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-full font-medium transition"
                >
                  Comment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id}>
            {/* Pinned Badge */}
            {comment.isPinned && (
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                </svg>
                <span>Pinned by @aquila</span>
              </div>
            )}

            {/* Comment Card */}
            <div className="flex gap-4 relative">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">{comment.avatar}</span>
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm hover:text-gray-300 cursor-pointer">{comment.author}</span>
                  {comment.verified && (
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                </div>

                {/* Comment Text */}
                <p className="text-gray-200 text-sm mb-3 whitespace-pre-wrap">{comment.text}</p>

                {/* Engagement Buttons */}
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <button className="flex items-center gap-1 hover:text-white transition group">
                    <ThumbsUp className="w-4 h-4 group-hover:bg-gray-800 rounded-full p-1 w-6 h-6" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-white transition group">
                    <ThumbsDown className="w-4 h-4 group-hover:bg-gray-800 rounded-full p-1 w-6 h-6" />
                  </button>
                  <button className="hover:text-white transition">Reply</button>
                </div>

                {/* Replies Section */}
                {comment.replies > 0 && (
                  <button
                    onClick={() => toggleReplies(comment.id)}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-3 transition"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedReplies[comment.id] ? "rotate-180" : ""}`}
                    />
                    <span>{comment.replies} replies</span>
                  </button>
                )}
              </div>

              {/* Menu Button */}
              <div className="relative">
                <button
                  onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
                  className="text-gray-500 hover:text-white transition p-2"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>

                {openMenuId === comment.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg z-10 border border-gray-800">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-200 text-sm transition rounded-t-lg">
                      Update
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-200 text-sm transition">
                      Report
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-800 text-red-400 text-sm transition rounded-b-lg"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection
