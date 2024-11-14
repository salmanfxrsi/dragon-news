import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import RightNav from "../components/RightNav";

const HomeLayout = () => {
  return (
    <div className="font-poppins mb-24">
      <header className="container mx-auto mt-12">
        {/* Header */}
        <section className="w-11/12 mx-auto">
          <Header></Header>
        </section>
        {/* Latest News */}
        <section className="mt-7">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* Navbar */}
      <nav className="container mx-auto mt-8">
        <Navbar></Navbar>
      </nav>
      {/* Main */}
      <main className="space-y-10 w-11/12 lg:grid grid-cols-12 lg:container mx-auto gap-6 mt-24">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <section className="bg-black h-10 col-span-6"></section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
