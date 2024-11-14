import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header */}
      <header className="container mx-auto mt-12">
        {/* Heading Section */}
        <section className="w-11/12 mx-auto">
          <Header></Header>
        </section>
        {/* Latest News Section */}
        <section className="mt-7">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* Navbar */}
      <nav className="container mx-auto mt-8">
        {/* Navbar Section */}
        <Navbar></Navbar>
      </nav>
    </div>
  );
};

export default HomeLayout;
