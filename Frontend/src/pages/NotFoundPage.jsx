import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-white">
      {/* Shape placeholder like YouTube */}
      <div className="relative mb-6">
        <div className="w-40 h-24 bg-[#1f1f1f] border-4 border-[#9d7bf9] rounded-md"></div>
        <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#4d9cff] rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-0 h-0 border-l-[25px] border-l-transparent border-t-[40px] border-t-[#28f0a6]"></div>
      </div>

      <h1 className="text-lg mb-4">This video isn’t available anymore</h1>

      <button
        onClick={() => navigate("/")}
        className="bg-[#222] px-6 py-2 rounded-full text-blue-400 hover:bg-[#333] transition"
      >
        GO TO HOME
      </button>
    </div>
  );
}
