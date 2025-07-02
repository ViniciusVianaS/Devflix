import {
  BellDot,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  MessageCircleMore,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="p-2 mt-2 flex justify-between items-center text-[#F9FAFB]">
        <div className="ml-[270px] p-1 rounded-lg text-[#F9FAFB] flex items-center justify-center">
          <ChevronLeft className="cursor-pointer" />
          <ChevronRight className="text-[#5f5f5f] cursor-pointer" />
          <div className="flex w-[300px] ml-4 border-2 border-[#5f5f5f] rounded-full p-1">
            <div className="flex items-center justify-center ml-3">
              <Search className="cursor-pointer text-[#5f5f5f]" />
              <input
                placeholder="Search..."
                type="search"
                className="justify-start items-start text-[13px] flex outline-none border-none w-[250px] rounded p-[5px] text-[#5f5f5f]"
              />
            </div>
          </div>
        </div>
        <nav>
          <ul className="list-none flex gap-6 flex-wrap items-center mr-18">
            <li className="p-2">
              <a href="#" className="duration-300 cursor-pointer hover:opacity-50" title="notifications">
                <BellDot />
              </a>
            </li>
            <li className=" p-2">
              <a href="#" className="duration-300 cursor-pointer hover:opacity-50" title="chat">
                <MessageCircleMore />
              </a>
            </li>
            <li className="p-2">
              <button className="duration-300 cursor-pointer flex items-center hover:opacity-50" title="profile">
                <CircleUserRound size={32} />
                <div className="ml-4 text-left">
                  <span>Vinicius V.</span>
                  <p className="text-[#5f5f5f] text-xs">Level 20</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
