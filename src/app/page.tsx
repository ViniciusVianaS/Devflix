import Header from "./_components/header";
import Main from "./_components/main";
import RightSidebar from "./_components/rightSidebar";
import Sidebar from "./_components/sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />  
      <Sidebar />
      <RightSidebar />
      {/* <Hero /> */}
    </div>
  );
}
