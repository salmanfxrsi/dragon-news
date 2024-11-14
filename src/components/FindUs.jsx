import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">Find Us On</h1>
      <div className="join join-vertical flex gap-3">
        <button className="flex items-center text-blue-600 border border-blue-600 rounded-md w-full px-6 justify-start gap-2 py-3 text-xl font-bold">
          <FaFacebook /> Facebook
        </button>
        <button className="flex items-center text-orange-800 border border-orange-800 rounded-md w-full px-6 justify-start gap-2 py-3 text-xl font-bold">
          <FaInstagram /> Instagram
        </button>
        <button className="flex items-center text-blue-400 border border-blue-400 rounded-md w-full px-6 justify-start gap-2 py-3 text-xl font-bold">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
