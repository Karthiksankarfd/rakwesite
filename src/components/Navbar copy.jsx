import { motion } from "framer-motion";
import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Buttons/Button";
import { useEffect } from "react";
const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  const[scroll,setscroll] = useState()
  // let scroll = window.scrollY
 
  
  useEffect(() => {
    setscroll(window.scrollY)
    console.log(scroll)
   
    const handleScroll = () => {
      const nav = document.querySelectorAll("nav");
        nav.forEach((sec)=>{
      console.log()
      if (window.scrollY > 0.000000001) {
        sec.classList.add("scrolled");
      } else {
        sec.classList.remove("scrolled");
      }
    })
    };

  

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const [shownavbar, setNavbar] = useState(false);

  // first destructure the isactive because it contain the value as object
  const navlinkStyle = ({ isActive }) => {
    // use return keyword always
    return {
      fontweight: isActive ? "700" : "400",
      // font-weight: 800;
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "white" : "white",
    };
  };
  return (
    <section className="relative w-full h-auto">
      {/* main nav section  */}
      <nav className=" lg:w-full lg:h-16 lg:bg-transparent lg:flex lg:justify-between lg:items-center lg:px-10 sm:px-5 sm:h-14 sm:w-full  sm:bg-transparent sm:items-center sm:flex sm:justify-between fixed z-50">
        <section className="  sm:h-auto sm:w-full lg:h-24 lg:w-44 flex gap-x-28 items-center relative z-50 ">
          <GiHamburgerMenu
            className=" lg:hidden sm:h-8 sm:w-fit sm:object-cover text-white"
            onClick={() => {
              setNavbar(true);
            }}
          />
          {/* logo for larger screen */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Yello_logo_yellow_rgb.png"
            className="sm:hidden lg:block lg:object-cover lg:h-16 sm:h-10"
            alt=""
          />

           <h1 className="sm:block lg:hidden text-xl font-semibold sm:h-fit   sm:ml-0 text-white">RK Builders</h1>
        </section>

        <section className="lg:flex lg:gap-x-10 sm:hidden items-center">
          {/* for pages */}
          {/* <Link to="/myorder"></Link> */} 
          <NavLink
            to="/"
            style={navlinkStyle}
            onClick={() => handleScroll("landing-page")}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={navlinkStyle}
            onClick={() => handleScroll("About-page")}
          >
            About
          </NavLink>
          <NavLink
            to="/Projects"
            style={navlinkStyle}
            onClick={() => handleScroll("Projects-page")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Services"
            style={navlinkStyle}
            onClick={() => handleScroll("service-page")}
          >
            Services
          </NavLink>
          <NavLink
            to="/Services"
            style={navlinkStyle}
            onClick={() => handleScroll("contact-page")}
          >
           Contact
          </NavLink>
        
          <Button
            name="Enquire Now"
            onClick={() => handleScroll("landing-page")}
          />
        </section>
      </nav>

      {/* we have to toggle the menu bar on button click and once the button is clicked the button itself should change dynamically */}
      {/*  */}

      {shownavbar && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" z-40 w-full  "
        >
          <nav className="h-full  mobile-nav lg:hidden sm:flex sm:flex-col sm:items-start sm:pl-5  gap-y-5 sm:py-5   translate-x-0 fixed z-40 sm:w-full">
            <NavLink
              to="/"
              className="mt-10"
              onClick={() => {
                setNavbar(false);
                handleScroll("landing-page");
              }}
            >
              <h3 className="text-white ">Home</h3>
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => {
                setNavbar(false);
                handleScroll("About-page");
              }}
            >
              <h3 className="text-white">About</h3>
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => {
                setNavbar(false);
                handleScroll("Projects-page");
              }}
            >
              <h3 className="text-white">Projects</h3>
            </NavLink>

            <NavLink
              to="/service"
              onClick={() => {
                setNavbar(false);
                handleScroll("service-page");
              }}
            >
              <h3 className="text-white">Service</h3>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => {
                setNavbar(false);
                handleScroll("contact-page");
              }}
            >
              <h3 className="text-white">Contact</h3>
            </NavLink>

              <Button name="Enquire now"/>

            <button
              onClick={() => {
                setNavbar(false);
              }}
              className="text-white flex items-center gap-x-5"
            >
              Close <FaTimes className="h-10 text-white" />
            </button>
          </nav>
        </motion.div>
      )}
    </section>
  );
};

export default Navbar;
