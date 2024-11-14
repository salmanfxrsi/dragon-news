import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightNav = () => {
  return (
    <div>
      {/* Social Login */}
      <SocialLogin></SocialLogin>
      {/* Find us */}
      <FindUs></FindUs>
    </div>
  );
};

export default RightNav;
