"use client";

import { useState } from "react";

import Header from "./_components/header";
import Main from "./_components/main";
import RightSidebar from "./_components/rightSidebar";
import Sidebar from "./_components/sidebar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  return (
    <div>
      <Header onSearch={handleSearch} />

      <Main searchTerm={searchTerm} />

      <Sidebar />

      <RightSidebar />
    </div>
  );
}
