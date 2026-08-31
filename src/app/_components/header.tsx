"use client";

import {
  BellDot,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  MessageCircleMore,
  Search,
} from "lucide-react";
import { FormEvent, useState } from "react";

interface HeaderProps {
  onSearch: (term: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [search, setSearch] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const term = search.trim();

    if (!term) {
      onSearch("");
      return;
    }

    onSearch(term);
  }

  return (
    <header className="p-2 mt-2 flex justify-between items-center text-[#F9FAFB]">
      <div className="ml-[270px] p-1 rounded-lg text-[#F9FAFB] flex items-center justify-center">
        <a href="http://localhost:3000/" className="text-[#5f5f5f] cursor-pointer hover:text-white duration-300">
          <ChevronLeft />
        </a>

        <a href="#" className="text-[#5f5f5f] cursor-pointer hover:text-white duration-300">
          <ChevronRight />
        </a>

        <form
          onSubmit={handleSearch}
          className="flex w-[300px] ml-4 border-2 border-[#5f5f5f] rounded-full p-1"
        >
          <div className="flex items-center justify-center ml-3 w-full">
            <Search className="cursor-pointer text-white shrink-0" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search..."
              type="search"
              className="text-[13px] outline-none border-none w-[250px] rounded p-[5px] text-white bg-transparent placeholder:text-[#5f5f5f]"
            />
          </div>
        </form>
      </div>

      <nav>
        <ul className="list-none flex gap-6 flex-wrap items-center mr-18">
          <li className="p-2">
            <a
              href="#"
              className="duration-300 cursor-pointer hover:opacity-50"
              title="notifications"
            >
              <BellDot />
            </a>
          </li>

          <li className="p-2">
            <a
              href="#"
              className="duration-300 cursor-pointer hover:opacity-50"
              title="chat"
            >
              <MessageCircleMore />
            </a>
          </li>

          <li className="p-2">
            <button
              className="duration-300 cursor-pointer flex items-center hover:opacity-50"
              title="profile"
            >
              <CircleUserRound size={32} />

              <div className="ml-4 text-left">
                <span>Vinicius V.</span>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
