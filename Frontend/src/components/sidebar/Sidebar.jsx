"use client"

import { Home, Video, PlaySquare, History, ListVideo, Clock, ThumbsUp, Download } from "lucide-react"
import { useState } from "react"
import SidebarItem from "./sidebar-item"

const mainItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Video, label: "Shorts", path: "/shorts" },
    { icon: PlaySquare, label: "Subscriptions", path: "/subscriptions", badge: true },
]

const youItems = [
    { icon: History, label: "History", path: "/history" },
    { icon: ListVideo, label: "Playlists", path: "/playlists" },
    { icon: Video, label: "Your videos", path: "/your-videos" },
    { icon: Clock, label: "Watch later", path: "/watch-later" },
    { icon: ThumbsUp, label: "Liked videos", path: "/liked" },
    { icon: Download, label: "Downloads", path: "/downloads" },
]

const subscriptions = [
    { name: "2K Revolution", avatar: "/2k-revolution-channel-avatar.jpg" },
    { name: "Abdul mannan", avatar: "/abdul-mannan-channel-avatar.jpg" },
]

export default function Sidebar() {
    const [activePath, setActivePath] = useState("/")

    return (
        <div className=" hidden sm:flex flex-col bg-[#0f0f0f] text-white w-64 fixed left-0 top-14 h-[calc(100vh-3.5rem)] z-10 ">
            <div className="flex-1 overflow-y-auto scrollbar-hidden"> 
                {/* Main items */}
                <div className="py-3">
                    {mainItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            isActive={activePath === item.path}
                            badge={item.badge}
                            onClick={() => setActivePath(item.path)}
                        />
                    ))}
                </div>

                <div className="border-t border-[#3f3f3f] my-2" />

                {/* You section */}
                <div className="py-2">
                    <div className="px-3 py-2 text-[15px] font-medium">You</div>
                    {youItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            icon={item.icon}
                            label={item.label}
                            isActive={activePath === item.path}
                            onClick={() => setActivePath(item.path)}
                        />
                    ))}
                </div>

                <div className="border-t border-[#3f3f3f] my-2" />

                {/* Subscriptions */}
                <div className="py-2">
                    <div className="px-3 py-2 text-[15px] font-medium">Subscriptions</div>
                    {subscriptions.map((channel) => (
                        <div
                            key={channel.name}
                            className="flex items-center gap-4 px-3 py-2.5 mx-2 rounded-lg cursor-pointer hover:bg-[#272727] transition-colors"
                        >
                            <img
                                src={channel.avatar || "/placeholder.svg"}
                                alt={channel.name}
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-[15px]">{channel.name}</span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-6 mt-4 text-xs text-[#aaaaaa] space-y-2">
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="hover:text-white">
                            About
                        </a>
                        <a href="#" className="hover:text-white">
                            Press
                        </a>
                        <a href="#" className="hover:text-white">
                            Copyright
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="hover:text-white">
                            Contact us
                        </a>
                        <a href="#" className="hover:text-white">
                            Creators
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="hover:text-white">
                            Advertise
                        </a>
                        <a href="#" className="hover:text-white">
                            Developers
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <a href="#" className="hover:text-white">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white">
                            Policy & Safety
                        </a>
                    </div>
                    <p className="text-[#717171] mt-4">© 2026 Streamsy</p>
                </div>
            </div>
        </div>
    )
}
