import { Link } from "react-router-dom";
// img
import user from "../../images/user.png";

export default function Header() {
  return (
    <div className="bg-secendry-color h-[72px] px-0 py-[40px] flex items-center justify-around">
      <Link to="/">
        <div className="text-font-primary font-xl font-semibold  ">
          Movie App
        </div>
      </Link>
      <div>
        <img className="h-[38px] w-38px]" src={user} alt="user" />
      </div>
    </div>
  );
}
