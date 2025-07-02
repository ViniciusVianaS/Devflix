import Sidebar from "./_components/sidebar";
import Header from "./_components/header"
import Hero from "./_components/hero";
import RightSidebar from "./_components/rightSidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <RightSidebar />
      {/* <Hero /> */}
    </div>    
  );
}
