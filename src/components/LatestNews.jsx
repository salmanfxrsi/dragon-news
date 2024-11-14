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
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={"/news"} className="font-semibold text-lg text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
