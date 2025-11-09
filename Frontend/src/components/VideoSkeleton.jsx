

const VideoSkeleton = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="skeleton h-48 w-full rounded-xl bg-[#252525] "></div>
            <div className="flex gap-3">
                <div className="skeleton h-10 w-10 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-3 w-3/4"></div>
                </div>
            </div>
        </div>
    );
};

export default VideoSkeleton;