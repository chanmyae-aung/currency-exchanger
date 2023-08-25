import React from "react";
import { Link } from "react-scroll";

export default function NavItem() {
  return (
    <main>
      <ul className="flex items-center  gap-10">
        <li className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="home"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            activeClass="nav-active"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="live"
            className="cursor-pointer font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            activeClass="nav-active"
          >
            Live Rates
          </Link>
        </li>
        <li className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="about"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            activeClass="nav-active"
          >
            About Us
          </Link>
        </li>
        <li className="hover:text-white transition-all ease-linear duration-150">
          <Link
            to="contact"
            className="cursor-pointer hover:font-bold transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
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
