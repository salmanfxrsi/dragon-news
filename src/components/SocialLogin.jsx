import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub, setUser } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">Login With</h1>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center text-black border border-black rounded-md gap-1 w-full justify-center py-3 text-xl font-bold mb-3"
      >
        <FaGoogle /> Login With Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="flex items-center text-black border border-black rounded-md gap-1 w-full justify-center py-3 text-xl font-bold"
      >
        <FaGithub /> Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
