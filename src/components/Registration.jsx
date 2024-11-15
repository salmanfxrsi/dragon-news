const Registration = () => {
  return (
    <div className="bg-white p-20 rounded-md mx-auto w-[700px]">
      <h1 className="font-semibold text-4xl text-[#403F3F] text-center">
        Register your account
      </h1>
      <hr className="my-12" />
      <form action="">
        <div className="mb-6">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">Your Name</p>
          <input
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">Photo URL</p>
          <input
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="text"
            placeholder="Enter your photo url"
          />
        </div>
        <div className="mb-6">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">Email</p>
          <input
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-5">
          <p className="font-semibold text-xl text-[#403F3F] mb-4">Password</p>
          <input
            className="p-5 w-full bg-[#F3F3F3] rounded-md"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="checkbox" />
          <p className="text-[#706F6F] font-semibold">Accept Term And Condition</p>
        </div>
        <button className="bg-[#403F3F] rounded-md text-[#FFFFFF] font-semibold text-xl w-full py-5 mt-8">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
