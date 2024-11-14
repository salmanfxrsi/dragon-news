import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 flex flex-col lg:flex-row items-center gap-5">
      <button className="hidden lg:block bg-[#D72050] text-[#FFFFFF] font-medium text-xl py-3 px-7">
        Latest
      </button>
      {/* Latest News Section */}
      <Marquee pauseOnHover={true} className="flex gap-12">
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Halo, GTA Vice City Actor Directing Movie About Hunter Biden
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          US commander to train Ukraine military
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Opinion: After a summer of surprising successes, President Biden is on
          a roll
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
