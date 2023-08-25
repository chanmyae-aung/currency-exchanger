import React from "react";
import { Link } from "react-scroll";

export default function NavItem({toggleDrawer, anchor}) {
  return (
    <main className="">
      <ul className={`flex items-center gap-10 flex-col md:flex-row`}>
        <li onClick={() => toggleDrawer(anchor, false)} className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="home"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
            activeClass="nav-active"
          >
            Home
          </Link>
        </li>
        <li onClick={() => toggleDrawer(anchor, false)} className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="fluctuation"
            className="cursor-pointer font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            Fluctuation Rates
          </Link>
        </li>
        <li onClick={() => toggleDrawer(anchor, false)} className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="about"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="nav-active"
          >
            About Us
          </Link>
        </li>
        <li onClick={() => toggleDrawer(anchor, false)} className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="contact"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            activeClass="nav-active"
          >
            Contact Us
          </Link>
        </li>
        
      </ul>
    </main>
  );
}
