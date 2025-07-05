import logo from "../../assets/images/Horizon UI Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <footer className="xl:py-[80px] py-[45px]">
        <div className="container mx-auto">
          <div className="h-[36px] flex justify-center">
            <img src={logo} alt=""></img>
          </div>
          <nav className="mt-[32px]">
            <ul className="flex sm:gap-x-[48px] gap-[24px] justify-center flex-wrap gap-y-[10px]">
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Partners
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Help
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[14px] font-[500]">
                  Terms
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-[32px]">
            <ul className="flex justify-center gap-x-[32px] flex-wrap gap-y-[10px]">
              <li>
                <a href="/" className="text-light text-[18px]">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[18px]">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[18px]">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[18px]">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-[18px]">
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center mt-[32px] text-light text-[14px] font-[500]">
            © 2024 Horion. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
