"use client";
import { Plus, User } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="fixed top-0 right-0 h-full w-14 bg-[#1A1A1E] text-white z-50 flex flex-col items-center py-4 gap-6">
      <div
        className="w-8 h-8 mt-16 bg-red-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
        title="Add friend"
      >
        <Plus size={16} />
      </div>

      <div className="flex flex-col items-center gap-4 mt-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
          <User size={16} />
        </div>
      </div>
    </div>
  );
}
