// // import React from 'react';
// // import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

// // const Navbar = () => {
// //   return (
// //     <header className="w-[full] h-[82px] opacity-1 bg-red-300">
// //       <div className="relative flex justify-between items-center h-[46px] top-[18px] left-[100px] opacity-1">
// //         <div className="flex items-center">
// //           {/* Logo */}
// //           <img src="/path-to-your-logo.png" alt="Logo" className="h-full" />
// //         </div>
// //         <nav className="flex gap-8">
// //           <Link to="/" className="text-lg text-black">Home</Link>
// //           <Link to="/about" className="text-lg text-black">About</Link>
// //           <Link to="/projects" className="text-lg text-black">Projects</Link>
// //           <Link to="/our-team" className="text-lg text-black">Our Team</Link>
// //           <Link to="/enquiry" className="text-lg text-black">Enquiry</Link>
// //         </nav>
// //         <button
// //           className="h-[34px] w-[90px] bg-[#CCAC00] text-white rounded-[8px] py-[12px] px-[24px] flex items-center justify-center transition-all duration-300 ease-in"
// //           style={{
// //             animationTimingFunction: 'ease-in',
// //             animationDuration: '300ms',
// //           }}
// //           onClick={() => {
// //             // Handle button click here
// //           }}
// //         >
// //           Login
// //         </button>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// import { motion } from "framer-motion";
// import React, { useContext } from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Button from "./Buttons/Button";
// import { useEffect } from "react";
// const Navbar = () => {
//   const handleScroll = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   };

//   const[scroll,setscroll] = useState()
//   // let scroll = window.scrollY

//   useEffect(() => {
//     setscroll(window.scrollY)
//     console.log(scroll)
//     const handleScroll = () => {
//       const nav = document.querySelectorAll("nav");
//         nav.forEach((sec)=>{
//       console.log()
//       if (window.scrollY > 0.000000001) {
//         sec.classList.add("scrolled");
//       } else {
//         sec.classList.remove("scrolled");
//       }
//     })
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scroll]);

//   const [shownavbar, setNavbar] = useState(false);

//   // first destructure the isactive because it contain the value as object
//   const navlinkStyle = ({ isActive }) => {
//     // use return keyword always
//     return {
//       fontweight: isActive ? "700" : "400",
//       // font-weight: 800;
//       textDecoration: isActive ? "none" : "none",
//       color: isActive ? "white" : "white",
//     };
//   };
//   return (
//     <section className=" w-full h-auto bg-black sticky top-0">
//       {/* main nav section  */}
//       <nav className=" lg:w-full lg:h-16 lg:bg-black lg:flex lg:justify-between lg:items-center lg:px-10 sm:px-5 sm:h-14 sm:w-full  sm:bg-transparent sm:items-center sm:flex sm:justify-between  ">
//         <section className=" sm:h-auto sm:w-full lg:h-24 lg:w-44 flex gap-x-28 items-center relative  ">
//           <GiHamburgerMenu
//             className=" lg:hidden sm:h-8 sm:w-fit sm:object-cover text-white"
//             onClick={() => {
//               setNavbar(true);
//             }}
//           />
//           {/* logo for larger screen */}
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Yello_logo_yellow_rgb.png"
//             className="sm:hidden lg:block lg:object-cover lg:h-16 sm:h-10"
//             alt=""
//           />

//            <h1 className="sm:block lg:hidden text-xl font-semibold sm:h-fit   sm:ml-0 text-white">RK Builders</h1>
//         </section>

//         <section className="lg:flex lg:gap-x-10 sm:hidden items-center">
//           {/* for pages */}
//           {/* <Link to="/myorder"></Link> */}
//           <NavLink
//             to="/"
//             style={navlinkStyle}

//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="about"
//             style={navlinkStyle}

//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/Projects"
//             style={navlinkStyle}

//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/Services"
//             style={navlinkStyle}

//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/Services"
//             style={navlinkStyle}

//           >
//            Contact
//           </NavLink>

//           <Button
//             name="Enquire Now"

//           />
//         </section>
//       </nav>

//       {/* we have to toggle the menu bar on button click and once the button is clicked the button itself should change dynamically */}
//       {/*  */}

//       {shownavbar && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className=" z-40 w-full  "
//         >
//           <nav className="sticky bg-red-600 z-0 ">
//             <NavLink
//               to="/"
//               className="mt-10"
//               onClick={() => {
//                 setNavbar(false);
//                 handleScroll("landing-page");
//               }}
//             >
//               <h3 className="text-white ">Home</h3>
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => {
//                 setNavbar(false);
//                 handleScroll("About-page");
//               }}
//             >
//               <h3 className="text-white">About</h3>
//             </NavLink>

//             <NavLink
//               to="/projects"
//               onClick={() => {
//                 setNavbar(false);
//                 handleScroll("Projects-page");
//               }}
//             >
//               <h3 className="text-white">Projects</h3>
//             </NavLink>

//             <NavLink
//               to="/service"
//               onClick={() => {
//                 setNavbar(false);
//                 handleScroll("service-page");
//               }}
//             >
//               <h3 className="text-white">Service</h3>
//             </NavLink>

//             <NavLink
//               to="/contact"
//               onClick={() => {
//                 setNavbar(false);
//                 handleScroll("contact-page");
//               }}
//             >
//               <h3 className="text-white">Contact</h3>
//             </NavLink>

//               <Button name="Enquire now"/>

//             <button
//               onClick={() => {
//                 setNavbar(false);
//               }}
//               className="text-white flex items-center gap-x-5"
//             >
//               Close <FaTimes className="h-10 text-white" />
//             </button>
//           </nav>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="logo">
        <svg width="28" height="46" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0938 3.15764C21.2478 3.57003 26.9257 9.67089 26.9257 17.1375C26.9257 21.8438 24.6698 26.0078 21.2102 28.5466V21.9174L19.143 23.6035V29.796C18.6764 30.0238 18.195 30.225 17.7009 30.398V11.8979L15.6338 13.5841V30.9384C15.1294 31.0275 14.6155 31.0877 14.0938 31.1179V3.19928V3.15764Z" fill="#CCAC00"/>
<path d="M10.279 0.984198L12.4199 0.000102997V6.60413H12.4163V31.0551C12.0141 31.0153 11.617 30.9576 11.2256 30.883V7.92522L9.13698 9.62896V30.3052C8.66304 30.1316 8.20103 29.932 7.75268 29.7081V16.0734L5.66407 17.7771V28.4168C2.23151 25.8447 0 21.677 0 16.9723C0 10.3694 4.39524 4.82438 10.3382 3.26397L10.279 0.984198Z" fill="#CCAC00"/>
<path d="M7.86335 41.0184H5.86422L3.32824 37.4687C3.14616 37.4764 2.99786 37.4802 2.88336 37.4802C2.83645 37.4802 2.78575 37.4783 2.73319 37.4764C2.67876 37.4745 2.62432 37.4725 2.56614 37.4687V39.6787C2.56614 40.1558 2.61681 40.4516 2.72007 40.5661C2.85897 40.7303 3.06733 40.8123 3.34512 40.8123H3.63609V41.0184H0.4375V40.8123H0.717175C1.03253 40.8123 1.2578 40.7073 1.39293 40.4993C1.46991 40.3848 1.50745 40.11 1.50745 39.6787V34.7664C1.50745 34.2893 1.45676 33.9935 1.35352 33.8789C1.21086 33.7148 0.998755 33.6328 0.717175 33.6328H0.4375V33.4266H3.15555C3.94957 33.4266 4.53335 33.4858 4.90876 33.6022C5.28607 33.7205 5.60518 33.9381 5.8661 34.253C6.12888 34.5679 6.2603 34.9439 6.2603 35.3809C6.2603 35.8485 6.11011 36.2531 5.81167 36.5966C5.51134 36.9401 5.04955 37.1825 4.42073 37.3256L5.96559 39.4993C6.31848 39.9993 6.6207 40.3333 6.87411 40.4974C7.12565 40.6635 7.456 40.7665 7.86335 40.8123V41.0184ZM2.56614 37.1138C2.63558 37.1138 2.69564 37.1138 2.74635 37.1157C2.79702 37.1176 2.83831 37.1195 2.87023 37.1195C3.57415 37.1195 4.10536 36.963 4.46201 36.65C4.82054 36.3351 4.99887 35.9363 4.99887 35.4515C4.99887 34.9782 4.85433 34.5927 4.56712 34.295C4.27806 33.9992 3.89513 33.8503 3.42022 33.8503C3.20999 33.8503 2.92467 33.8847 2.56614 33.9534V37.1138Z" fill="#050505"/>
<path d="M15.2615 38.4878H12.3689L11.8696 39.6768C11.7457 39.9707 11.6818 40.1921 11.6818 40.3371C11.6818 40.4516 11.7363 40.5547 11.8451 40.6425C11.9521 40.7283 12.1868 40.7856 12.5453 40.8123V41.0184H10.1914V40.8123C10.503 40.757 10.7039 40.6845 10.7958 40.5948C10.9835 40.4154 11.19 40.0509 11.4172 39.5031L14.0432 33.2549H14.2291L16.8251 39.5699C17.0335 40.0776 17.2231 40.4058 17.3939 40.5585C17.5647 40.7093 17.8012 40.7932 18.1072 40.8123V41.0184H15.1639V40.8123C15.4605 40.797 15.6613 40.7474 15.7664 40.6615C15.8716 40.5757 15.9222 40.4707 15.9222 40.3467C15.9222 40.1825 15.849 39.923 15.7026 39.568L15.2615 38.4878ZM15.0925 38.0756L13.8349 35.0125L12.5434 38.0756H15.0925Z" fill="#050505"/>
<path d="M23.1289 36.8084L25.8845 39.5852C26.3369 40.0489 26.7217 40.3638 27.0408 40.5299C27.3599 40.6959 27.679 40.7894 27.9981 40.8123V41.0184H24.4429V40.8123C24.6569 40.8123 24.8089 40.7761 24.9028 40.7035C24.9966 40.631 25.0435 40.549 25.0435 40.4593C25.0435 40.3696 25.0248 40.2894 24.991 40.2188C24.9553 40.1482 24.8408 40.0146 24.6475 39.8218L22.074 37.2283V39.6787C22.074 40.0623 22.0984 40.3161 22.1472 40.4383C22.1828 40.5318 22.2617 40.6119 22.3799 40.6787C22.5395 40.7684 22.7084 40.8123 22.8868 40.8123H23.1439V41.0184H19.9453V40.8123H20.21C20.5197 40.8123 20.7431 40.7207 20.8839 40.5394C20.9721 40.4192 21.0153 40.1329 21.0153 39.6787V34.7664C21.0153 34.3828 20.9909 34.127 20.9439 34.0011C20.9064 33.9114 20.8313 33.8331 20.7168 33.7663C20.5554 33.6767 20.3864 33.6328 20.21 33.6328H19.9453V33.4266H23.1439V33.6328H22.8868C22.7122 33.6328 22.5432 33.6747 22.3799 33.7606C22.2654 33.8198 22.1847 33.9095 22.1415 34.0297C22.0965 34.148 22.074 34.3942 22.074 34.7664V37.0947C22.1472 37.0222 22.3987 36.7855 22.8267 36.3828C23.9154 35.3675 24.5743 34.69 24.8014 34.3503C24.9009 34.1996 24.9497 34.0698 24.9497 33.9572C24.9497 33.8713 24.9103 33.7969 24.8333 33.7301C24.7563 33.6652 24.6268 33.6328 24.4429 33.6328H24.2739V33.4266H27.0201V33.6328C26.8587 33.6366 26.7123 33.6595 26.5809 33.7015C26.4476 33.7415 26.2862 33.8217 26.0966 33.94C25.9051 34.0602 25.6705 34.2511 25.3927 34.5144C25.312 34.5889 24.9384 34.9706 24.2721 35.6595L23.1289 36.8084Z" fill="#050505"/>
<path d="M2.82582 43.0887L2.89606 43.9667H2.82171C2.75078 43.749 2.65848 43.5851 2.54623 43.4745C2.38369 43.3156 2.17502 43.2357 1.9202 43.2357C1.57312 43.2357 1.30867 43.3758 1.12754 43.6565C0.976038 43.8925 0.900281 44.1746 0.900281 44.5016C0.900281 44.767 0.950561 45.0085 1.05178 45.2277C1.15233 45.4462 1.28456 45.6065 1.44777 45.7087C1.611 45.8103 1.77903 45.8614 1.9512 45.8614C2.05175 45.8614 2.14953 45.8481 2.24392 45.8221C2.33756 45.7962 2.42846 45.7577 2.51593 45.7066V44.8993C2.51593 44.7593 2.50559 44.6676 2.48493 44.6249C2.4636 44.5815 2.43122 44.5485 2.38784 44.5261C2.34376 44.503 2.26663 44.4918 2.15642 44.4918V44.4162H3.21424V44.4918H3.16397C3.05929 44.4918 2.98768 44.5276 2.94842 44.599C2.92155 44.6494 2.90847 44.7495 2.90847 44.8993V45.7528C2.7542 45.8383 2.60132 45.9006 2.45119 45.9405C2.30037 45.9804 2.133 46 1.94914 46C1.42092 46 1.02012 45.8278 0.746018 45.4826C0.540108 45.2242 0.4375 44.9252 0.4375 44.5878C0.4375 44.3427 0.495349 44.1074 0.611046 43.8834C0.74808 43.6166 0.936082 43.4108 1.17507 43.2672C1.37546 43.1482 1.61168 43.0887 1.88509 43.0887C1.98425 43.0887 2.07446 43.0971 2.15573 43.1132C2.237 43.13 2.35201 43.1657 2.50147 43.2217C2.57652 43.2504 2.62749 43.2651 2.65296 43.2651C2.67845 43.2651 2.69981 43.2532 2.7184 43.2294C2.7363 43.2056 2.74732 43.1587 2.75146 43.0887H2.82582Z" fill="#050505"/>
<path d="M8.04079 46H7.30736L6.37697 44.6977C6.31016 44.7005 6.25576 44.7019 6.21374 44.7019C6.19652 44.7019 6.17792 44.7012 6.15864 44.7005C6.13867 44.6998 6.1187 44.6991 6.09736 44.6977V45.5085C6.09736 45.6835 6.11596 45.7921 6.15384 45.8341C6.2048 45.8943 6.28124 45.9244 6.38315 45.9244H6.4899V46H5.31641V45.9244H5.41901C5.53471 45.9244 5.61736 45.8859 5.66694 45.8096C5.69517 45.7675 5.70894 45.6667 5.70894 45.5085V43.7063C5.70894 43.5312 5.69035 43.4227 5.65246 43.3807C5.60013 43.3205 5.52232 43.2904 5.41901 43.2904H5.31641V43.2147H6.31361C6.60491 43.2147 6.8191 43.2364 6.95682 43.2791C7.09525 43.3226 7.21232 43.4024 7.30805 43.5179C7.40446 43.6334 7.45266 43.7714 7.45266 43.9317C7.45266 44.1033 7.39758 44.2517 7.28808 44.3777C7.1779 44.5037 7.00847 44.5927 6.77777 44.6452L7.34456 45.4427C7.47402 45.6261 7.58489 45.7486 7.67788 45.8089C7.77014 45.8698 7.89136 45.9076 8.04079 45.9244V46ZM6.09736 44.5675C6.12284 44.5675 6.14487 44.5675 6.16347 44.5682C6.18206 44.5689 6.19721 44.5696 6.20891 44.5696C6.46718 44.5696 6.66207 44.5122 6.79291 44.3973C6.92446 44.2818 6.98987 44.1355 6.98987 43.9576C6.98987 43.784 6.93685 43.6426 6.83147 43.5333C6.72543 43.4248 6.58494 43.3702 6.41071 43.3702C6.33358 43.3702 6.22888 43.3828 6.09736 43.408V44.5675Z" fill="#050505"/>
<path d="M11.5564 43.0887C11.911 43.0887 12.2189 43.2259 12.4785 43.5004C12.7388 43.7749 12.869 44.1173 12.869 44.5283C12.869 44.9512 12.7381 45.3019 12.4757 45.5813C12.214 45.8607 11.8966 46 11.524 46C11.148 46 10.8319 45.8635 10.5757 45.5911C10.3195 45.3187 10.1914 44.9665 10.1914 44.5338C10.1914 44.092 10.3395 43.7314 10.6349 43.4521C10.8918 43.2098 11.199 43.0887 11.5564 43.0887ZM11.5178 43.2357C11.274 43.2357 11.0777 43.3281 10.9304 43.513C10.7465 43.7434 10.6542 44.0801 10.6542 44.524C10.6542 44.9785 10.7492 45.3285 10.94 45.5736C11.0867 45.7598 11.2795 45.853 11.5199 45.853C11.7767 45.853 11.9882 45.7507 12.1555 45.547C12.3229 45.3425 12.4062 45.0212 12.4062 44.5815C12.4062 44.1047 12.3139 43.749 12.13 43.5151C11.9827 43.3289 11.7788 43.2357 11.5178 43.2357Z" fill="#050505"/>
<path d="M17.0206 43.2273V43.1517H17.9834V43.2273H17.8808C17.7734 43.2273 17.6907 43.2728 17.6329 43.3646C17.6046 43.4073 17.5908 43.5053 17.5908 43.66V44.7887C17.5908 45.0681 17.564 45.2844 17.5096 45.4385C17.4552 45.5925 17.3477 45.7248 17.1887 45.8347C17.0296 45.9447 16.8133 46 16.5393 46C16.2411 46 16.0145 45.9475 15.8602 45.8417C15.7053 45.7367 15.5958 45.5946 15.5317 45.4168C15.4883 45.2949 15.467 45.0667 15.467 44.7313V43.6432C15.467 43.4724 15.4436 43.3604 15.3974 43.3071C15.3513 43.2539 15.2762 43.2273 15.1729 43.2273H15.0703V43.1517H16.2521V43.2273H16.1474C16.0344 43.2273 15.9539 43.2637 15.9057 43.3359C15.8719 43.3849 15.8554 43.4878 15.8554 43.6432V44.8566C15.8554 44.9645 15.865 45.0884 15.8843 45.2284C15.9043 45.3678 15.9394 45.4763 15.9904 45.5547C16.042 45.6324 16.1157 45.6968 16.2114 45.7479C16.3079 45.7984 16.4256 45.8236 16.5654 45.8236C16.7445 45.8236 16.9049 45.7836 17.0461 45.7045C17.1873 45.6254 17.2837 45.5232 17.3354 45.4C17.387 45.276 17.4132 45.066 17.4132 44.7705V43.6432C17.4132 43.4696 17.3946 43.3611 17.3567 43.3177C17.3044 43.2574 17.2265 43.2273 17.1232 43.2273H17.0206Z" fill="#050505"/>
<path d="M20.7263 44.6942V45.5085C20.7263 45.6835 20.7449 45.7921 20.7827 45.8341C20.8337 45.8943 20.9108 45.9244 21.0141 45.9244H21.1188V46H19.9453V45.9244H20.0486C20.1643 45.9244 20.2477 45.8859 20.2972 45.8096C20.3241 45.7675 20.3379 45.6667 20.3379 45.5085V43.7063C20.3379 43.5312 20.32 43.4227 20.2835 43.3807C20.2304 43.3205 20.1526 43.2904 20.0486 43.2904H19.9453V43.2147H20.9494C21.1946 43.2147 21.3874 43.2406 21.5293 43.2917C21.6705 43.3429 21.7896 43.4297 21.8867 43.5515C21.9838 43.6733 22.032 43.8176 22.032 43.9842C22.032 44.2118 21.9583 44.3966 21.8109 44.5388C21.6636 44.6809 21.4556 44.7523 21.1863 44.7523C21.1202 44.7523 21.0493 44.7474 20.9728 44.7376C20.8957 44.7285 20.8137 44.7138 20.7263 44.6942ZM20.7263 44.5766C20.7972 44.5906 20.8606 44.6011 20.9157 44.6074C20.9701 44.6144 21.0176 44.6179 21.0562 44.6179C21.196 44.6179 21.3158 44.5626 21.417 44.4526C21.5182 44.3427 21.5692 44.2006 21.5692 44.0262C21.5692 43.9058 21.5451 43.7938 21.4969 43.6908C21.4487 43.5879 21.3798 43.5109 21.2917 43.4598C21.2028 43.4087 21.1023 43.3828 20.99 43.3828C20.9212 43.3828 20.8337 43.3961 20.7263 43.422V44.5766Z" fill="#050505"/>
<path d="M25.6795 42.9727V43.9348H25.6051C25.581 43.7499 25.5376 43.6029 25.4749 43.4937C25.4123 43.3844 25.3227 43.2976 25.2064 43.2332C25.0907 43.1688 24.9708 43.1366 24.8469 43.1366C24.7064 43.1366 24.5907 43.18 24.4991 43.2668C24.4075 43.3536 24.3613 43.453 24.3613 43.5637C24.3613 43.6484 24.3903 43.7261 24.4481 43.7961C24.5322 43.8984 24.7305 44.0356 25.0445 44.2064C25.3007 44.3465 25.4756 44.4536 25.5693 44.5278C25.6629 44.6027 25.7353 44.6902 25.7855 44.7918C25.8358 44.8933 25.8613 44.999 25.8613 45.1103C25.8613 45.3211 25.7807 45.5024 25.6203 45.6551C25.4591 45.8077 25.2518 45.884 24.9991 45.884C24.9192 45.884 24.8448 45.8777 24.7746 45.8651C24.7325 45.8581 24.6465 45.8329 24.5149 45.7895C24.3841 45.7461 24.3008 45.7244 24.2656 45.7244C24.2319 45.7244 24.205 45.7349 24.1857 45.7552C24.1665 45.7762 24.152 45.8189 24.1424 45.884H24.068V44.9304H24.1424C24.1775 45.1299 24.2243 45.2798 24.2835 45.3785C24.3428 45.4779 24.4337 45.5606 24.5556 45.6257C24.6775 45.6915 24.8111 45.7244 24.9564 45.7244C25.1244 45.7244 25.258 45.6789 25.3551 45.5885C25.4529 45.4975 25.5018 45.3904 25.5018 45.2672C25.5018 45.1986 25.4832 45.1292 25.4467 45.0592C25.4095 44.9892 25.3524 44.9241 25.2745 44.8632C25.2222 44.8219 25.0783 44.735 24.8434 44.602C24.6086 44.4697 24.4413 44.3633 24.3421 44.2841C24.2429 44.205 24.1672 44.1168 24.1162 44.0216C24.0645 43.9257 24.0391 43.8199 24.0391 43.7051C24.0391 43.5055 24.1148 43.3333 24.2656 43.1891C24.4165 43.0448 24.6093 42.9727 24.842 42.9727C24.9881 42.9727 25.1423 43.0091 25.3055 43.0812C25.3813 43.1156 25.4343 43.1324 25.4653 43.1324C25.5004 43.1324 25.5294 43.1219 25.5514 43.1009C25.5734 43.0792 25.5913 43.0372 25.6051 42.9727H25.6795Z" fill="#050505"/>
</svg>

        </div>

        {/* Regular Menu Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-500">
              Projects
            </Link>
          </li>
          <li>
          <Link
                to="/Rkfelicty"
                className="hover:text-yellow-500"
               
              >
                Rk felicty
              </Link>
          </li>
          <li>
            <Link to="/enquire" className="hover:text-yellow-500">
              Enquire Now
            </Link>
          </li>
        </ul>

        {/* Login Button (Always Visible) */}
        <button className="hidden md:block bg-yellow-500 text-white py-2 px-4 rounded-md">
          Login
        </button>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col bg-white px-4 py-2 space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/Rkfelicty"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Rk felicty
              </Link>
            </li>
            <li>
              <Link
                to="/enquire"
                className="hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </Link>
            </li>
            {/* Login Button (Always Visible) */}
            <button className="hidden sm:block md:block bg-yellow-500 text-white py-2 px-4 rounded-md">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
