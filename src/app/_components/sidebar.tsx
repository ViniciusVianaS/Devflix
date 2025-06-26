import {
  Calendar,
  Heart,
  LogOut,
  Settings,
  Telescope,
  User,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <aside className="overflow-hidden fixed text-[#F9FAFB] top-0 left-0 w-[250px] h-full pt-4 border-r border-r-[#29292e]">
        <h1 className="font-bold text-[25px] ml-4">Movies.</h1>
        <div className="p-4 mt-2 items-center justify-center">
          <span className="text-[#5f5f5f] text-xs font-bold">Menu</span>
          <button className="relative flex items-center w-30 h-[50px] font-semibold py-0 border-0 cursor-pointer text-left rounded backdrop-blur-sm transition duration-300">
            <Telescope className="w-5 rounded-full" />
            <span className="ml-2">Browse</span>
          </button>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <Heart className="w-5" />
            <span className="ml-2">Watchlist</span>
          </button>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <Calendar className="w-5" />
            <span className="ml-2">Coming soon</span>
          </button>
        </div>
        <div className="p-4 items-center justify-center">
          <span className="text-[#5f5f5f] text-xs font-bold">Social</span>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <User className="w-5" />
            <span className="ml-2">Friends</span>
          </button>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <Users className="w-5" />
            <span className="ml-2">parties</span>
          </button>
        </div>
        <div className="p-4 items-center justify-center">
          <span className="text-[#5f5f5f] text-xs font-bold">General</span>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <Settings className="w-5" />
            <span className="ml-2">Settings</span>
          </button>
          <button className="relative text-[#5f5f5f] flex items-center h-[50px] w-full font-semibold py-0 border-0 cursor-pointer text-left duration-300 hover:text-[#F9FAFB]">
            <LogOut className="w-5" />
            <span className="ml-2">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
