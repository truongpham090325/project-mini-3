import logo from "../../assets/images/Horizon UI Logo.svg";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const Header1 = () => {
  return (
    <>
      <header className="header py-[26px]">
        <div class="container mx-auto px-[15px]">
          <div className="inner-wrap flex items-center justify-between">
            <div className="flex gap-x-[10px] items-center">
              <MdMenu className="text-[24px]  md:hidden block" />
              <a href="/">
                <img src={logo} alt="" className="h-[34px] w-auto" />
              </a>
            </div>
            <nav className="md:inline hidden">
              <ul className="flex gap-x-[48px]">
                <li>
                  <a href="/" className="text-black text-[14px] font-[400]">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black text-[14px] font-[400]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black text-[14px] font-[400]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black text-[14px] font-[400]">
                    Company
                  </a>
                </li>
              </ul>
            </nav>
            <div className="sm:flex sm:gap-x-[20px] gap-x-[10px] items-center hidden">
              <a href="/" className=" text-black text-[14px] font-[400]">
                Login
              </a>
              <a
                href="/"
                className="text-[14px]  font-[700] bg-[#E9E3FF] px-[16px] py-[8px] rounded-[10px] text-primary"
              >
                Sign Up
              </a>
            </div>
            <FaUser className="text-[24px] sm:hidden block" />
          </div>
        </div>
      </header>
    </>
  );
};
