"use client"

export default function SidebarItem({ icon: Icon, label, isActive = false, badge = false, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-6 px-3 py-2.5 mx-2 rounded-lg cursor-pointer transition-colors ${isActive ? "bg-[#272727]" : "hover:bg-[#272727]"
                }`}
        >
            <Icon
                size={24}
                fill={isActive ? "white" : "none"}
                stroke={isActive ? "black" : "currentColor"}
                strokeWidth={ 1.5}
            />
            <span className="text-[15px] font-normal">{label}</span>
            {badge && <div className="w-1.5 h-1.5 bg-[#3ea6ff] rounded-full ml-auto" />}
        </div>
    )
}
