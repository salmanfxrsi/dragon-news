import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">Login With</h1>
      <button className="flex items-center text-black border border-black rounded-md gap-1 w-full justify-center py-3 text-xl font-bold mb-3">
        <FaGoogle /> Login With Google
      </button>
      <button className="flex items-center text-black border border-black rounded-md gap-1 w-full justify-center py-3 text-xl font-bold">
        <FaGithub /> Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
