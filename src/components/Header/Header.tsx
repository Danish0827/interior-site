"use client";
import { useScroll } from "@react-hooks-library/core";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import headerData from "@/data/headerData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import imagesData from "@/data/images";
const { folksLogo } = imagesData;
const Header = () => {
  const { logo, navData } = headerData;
  const [showContent, setShowContent] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState<string>("");
  const [statelink, setStateLink] = useState("");
  // console.log(path);

  useEffect(() => {
    const currentPath = window.location.pathname + window.location.hash;

    setPath(currentPath);
  }, [path]);
  // console.log(path);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="site-header header-one fixed z-10 w-full">
      <div
        className={`afterscrollhidden px-5 pt-4 py-3 hidden ${
          showContent ? "hidden lg:flex" : "hidden"
        }`}
      >
        <div className="w-1/2 flex items-center">
          <ul className="flex">
            <li className="mr-3 p-2 bg-white text-[#ed7936] rounded-xl">
              <Link
                target="_blank"
                href="https://www.facebook.com/hellofolksco?mibextid=ZbWKwL"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li className="mr-3 p-2 bg-white text-[#ed7936] rounded-xl">
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/folksco-interior-and-exterior-space-management-company/"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="mr-3 p-2 bg-white text-[#ed7936] rounded-xl">
              <Link
                target="_blank"
                href="https://www.instagram.com/folksco.in/"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="mr-3 p-2 bg-white text-[#ed7936] rounded-xl">
              <Link target="_blank" href="https://www.youtube.com/@FolksCo">
                <AiFillYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 text-right flex justify-end items-center">
          <Link
            className="text-white font-semibold mr-3 flex items-center"
            href=""
          >
            <FaPhoneAlt className="mr-1" />
            +91 8828800343
          </Link>
          <Link
            className="bg-white text-[#ed7936] p-1 pl-3 flex items-center"
            href="/#reachus"
          >
            BOOK APPOINTMENT {"  "}
            <FaLongArrowAltRight className="text-2xl" />
          </Link>
        </div>
      </div>
      <hr
        className={`afterscrollhidden border mb-2 ${
          showContent ? "hidden lg:block" : "hidden"
        }`}
      />
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky animated 
         `}
      >
        <div className=" clearfix px-5 py-2 flex justify-between bg-[#ed7936]">
          <div className="logo-box clearfix flex items-center">
            <Link href="/">
              {/* <a className="navbar-brand"> */}
              <img
                src={folksLogo.src}
                className="w-60"
                width={100}
                height={100}
                alt="Awesome Image"
              />
              {/* </a> */}
            </Link>
            <button
              onClick={() => handleToggle()}
              className="absolute right-5 lg:hidden text-3xl z-auto"
            >
              {!toggle === true ? (
                <GiHamburgerMenu
                  className="text-white "
                  // onClick={() => handleToggle()}
                />
              ) : (
                <IoClose
                  className="text-white"
                  // onClick={() => handleToggle()}
                />
              )}
            </button>
          </div>
          <div className={`main-navigation flex items-center`}>
            <ul
              className={`${
                toggle === true ? "" : "hidden"
              } navigation-box one-page-scroll-menu lg:flex absolute lg:relative lg:h-auto lg:top-0 lg:bg-[#ed7936] left-0 w-full text-left top-20 py-2 px-5 lg:p-0 bg-white h-dvh`}
            >
              {navData.map((navItem) => (
                <li
                  key={navItem.id}
                  className={`raleway hover:text-black hover:font-bold px-3 lg:px-1 xl:px-3 font-medium lg:py-3 mr-2 lg:mr-0 xl:mr-2 border-b-2 lg:border-none py-3 lg:text-white`}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave
                  onClick={() => setStateLink(navItem.href)}
                >
                  <Link
                    className={`${
                      statelink === navItem.href ? "active-page" : ""
                    }${path === navItem.href ? "active-page" : ""}`}
                    href={navItem.href}
                    onClick={() => handleToggle()}
                  >
                    {navItem.name}
                  </Link>
                  {/* {navItem.name === "PROJECTS" && showSubItems && (
                    <div>
                      {" "}
                      <BiDownArrow
                        onClick={() => handledropdown()}
                        className={`${
                          !showDrops === true ? "rotate-0" : "rotate-180"
                        } lg:hidden absolute -mt-5 right-10 z-20`}
                      />
                      {showDrops && (
                        <ul className="hidden fgsdf relative lg:absolute top-18 lg:top-12 lg:p-3 pt-4 px-4 bg-white z-100">
                          {navItem.subItems?.map((subItem) => (
                            <li
                              className="py-2 lg:py-1 font-medium"
                              key={subItem.id}
                            >
                              <Link
                                className="hover:text-[#ed7936]"
                                href={subItem.href}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
