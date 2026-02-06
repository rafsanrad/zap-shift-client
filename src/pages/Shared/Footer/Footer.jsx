import React from "react";
import Logo from "../../../components/Logo/Logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-white  p-10">
      <aside>
        <Logo></Logo>
        <p className="font-bold mt-5">
          ZapShift Industries Ltd.
          <br />
          Providing reliable services 2017
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaXTwitter />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaFacebook />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
