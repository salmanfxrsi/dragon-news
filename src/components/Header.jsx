import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img className="mx-auto" src={logo} alt="" />
      <h5 className="text-center mt-5 text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </h5>
      <p className="text-center mt-3 text-xl text-[#403F3F] font-medium">
        {moment().format("dddd,")}
        <span className="text-[#706F6F]">
          {moment().format(" MMMM D, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
