import React from "react";
import { useState, useRef, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import gsap from "gsap";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    // GSAP animation for navbar (desktop view)
    if (navbarRef.current) {
      const navbarElements = navbarRef.current.querySelectorAll(
        "img, .navbar ul li" 
      );
      gsap.fromTo(
        navbarElements,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);



  return (
    <div
      ref={navbarRef}
      className=" navbar w-full flex py-5 justify-between items-center  "
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[101] ">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "m-4" : "mr-10 p-3"
            } text-white`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div
      
        className="navbar-mob  sm:hidden flex flex-1 justify-end items-center w-full text-white  overflow-hidden z-[101]  "
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[38px] h-[20px] object-contain z-50"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-[1rem] right-[0.2rem] py-[2.5rem] min-w[140px] rounded-xl sidebar text-white z-1  px-[10.6rem] w-[99%] mr-0`}
        >
          <ul className="list-none flex flex-col w-full z-[101] ">
            {navLinks.map((nav, index) => (
              <li
                className={`text-center font-poppins font-semibold cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
