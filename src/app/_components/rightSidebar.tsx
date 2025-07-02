"use client";
import { ChevronLeft, ChevronRight, Plus, User } from "lucide-react";
import { useState } from "react";

export default function RightSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-0 right-0 h-full transition-all duration-300 ease-in-out z-50 text-white
      ${isOpen ? "w-64" : "w-14"} bg-[#1A1A1E]`}
    >
      <div className="flex justify-center items-center h-14">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="p-4 gap-2 flex flex-col">
        {isOpen ? (
          <>
            <p className="text-xs font-bold text-[#5f5f5f]">chat.</p>
            <div className="flex flex-col gap-5 p-4">
              <p className="flex gap-4 cursor-pointer font-medium hover:opacity-50 duration-300">
                <User />
                Noob Master
              </p>
              <p className="flex gap-4 cursor-pointer font-medium hover:opacity-50 duration-300">
                <User />
                Pro Player
              </p>
              <p className="flex gap-4 cursor-pointer font-medium hover:opacity-50 duration-300">
                <User />
                Gaming Pro
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-8 h-8 bg-red-700 rounded-full flex justify-center items-center cursor-pointer" title="add friend">
              <Plus color="white" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center mt-8 cursor-pointer">
              <User color="white" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center cursor-pointer">
              <User color="white" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex justify-center items-center cursor-pointer">
              <User color="white" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
