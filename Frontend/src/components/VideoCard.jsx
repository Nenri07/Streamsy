import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    const { Owner } = video;

    // Format duration (seconds to HH:MM:SS or MM:SS)
    const formatDuration = (seconds) => {
        if (!seconds) return '10:00';
        
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    // Format time ago (like YouTube)
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

    // Format views count
    const formatViews = (views) => {
        if (!views) return '0 views';
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(1)}M views`;
        }
        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}K views`;
        }
        return `${views} views`;
    };

    return (
        <div className="card shadow-lg hover:shadow-xl overflow-hidden">
            <Link to={`/watch/${video._id}`}>
                <figure className="aspect-video overflow-hidden relative rounded-xl">
                    <img
                        src={video.thumbnail}
                        alt={video.Title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-gradient-to-br from-[#0e0c10]/80 to-black/60 backdrop-blur-sm text-white text-xs px-1.5 py-0.5 rounded-lg border border-white/20 shadow-md">
                        {formatDuration(video.duration)}
                    </div>
                </figure>
            </Link>

            <div className="p-3 flex gap-3">
                <Link to={`/channel/${Owner?._id || 'anonymous'}`} className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                            alt="Channel avatar"
                            src={Owner ? Owner.avatar : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>

                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base line-clamp-2 mb-1 leading-tight">
                        {video.Title}
                    </h3>
                    <Link to={`/channel/${Owner?._id || 'anonymous'}`}>
                        <p className="text-sm text-[#AAAAAA] font-normal mb-1 flex items-center gap-1">
                            {Owner ? Owner.username : "Anonymous"}
                        </p>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-[#AAAAAA] font-normal">
                        <span>{formatViews(video.views)}</span>
                        <span>•</span>
                        <span>{getTimeAgo(video.createdAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;