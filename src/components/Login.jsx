import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-white p-20 rounded-md mx-auto w-11/12 lg:w-[700px]">
      <h1 className="font-semibold text-4xl text-[#403F3F] text-center">
        Login your account
      </h1>
      <hr className="my-12" />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">
            Email Address
          </p>
          <input
            name="email"
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-6">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">Password</p>
          <input
            name="password"
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-[#403F3F] rounded-md text-[#FFFFFF] font-semibold text-xl w-full py-5">
          Login
        </button>
      </form>
      <p className="mt-12 text-base font-semibold text-[#706F6F] text-center">
        Don&apos;t Have An Account ?{" "}
        <Link to={"/auth/registration"} className="text-orange-600">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
