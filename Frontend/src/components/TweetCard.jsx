// components/TweetCard.jsx
import { Link } from "react-router-dom";

const TweetCard = ({ tweet }) => {
    const getTimeAgo = (dateString) => {
        if (!dateString) return 'Recently';
        
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };
        
        for (const [unit, seconds] of Object.entries(intervals)) {
            const diff = Math.floor(diffInSeconds / seconds);
            if (diff >= 1) {
                return `${diff} ${unit}${diff === 1 ? '' : 's'} ago`;
            }
        }
        
        return 'Just now';
    };

    return (
        <div 
            className="rounded-xl transition-all duration-300 hover:opacity-90 border" 
            style={{ backgroundColor: '#212121', borderColor: '#4d4d4d' }}
        >
            <div className="p-4">
                {/* User Info - Username • Time on same line */}
                <div className="flex items-center gap-2 mb-3">
                    <Link to={`/channel/${tweet.owner?._id}`} className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                                alt="User avatar"
                                src={tweet.owner?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                            <Link to={`/channel/${tweet.owner?._id}`}>
                                <p className="font-semibold text-sm text-white hover:text-blue-400 transition-colors">
                                    {tweet.owner?.username || "Anonymous"}
                                </p>
                            </Link>
                            <span className="text-gray-500">•</span>
                            <p className="text-xs text-gray-400">
                                {getTimeAgo(tweet.createdAt)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tweet Content */}
                <div className="mb-4">
                    <p className="text-sm text-gray-200 leading-relaxed line-clamp-3 whitespace-pre-line">
                        {tweet.content}
                    </p>
                </div>

                {/* Engagement Stats - Single line */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <div className="tooltip" data-tip="Coming Soon">
                            <button className="btn btn-circle btn-sm bg-transparent border-none hover:bg-gray-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-gray-400 hover:text-red-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>
                        <span className="text-gray-400">2.5K</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                        <div className="tooltip" data-tip="Coming Soon">
                            <button className="btn btn-circle btn-sm bg-transparent border-none hover:bg-gray-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </button>
                        </div>
                        <span className="text-gray-400">38</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TweetCard;