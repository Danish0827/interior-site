"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import headerData from "@/data/headerData";
import imagesData from "@/data/images";

import instagram from "@/assets/images/Instagram.png";
import whatsapp from "@/assets/images/whatsapp.png";
import facebook from "@/assets/images/facebook-logo.svg";
import linkedin from "@/assets/images/linkedin.png";

const { folksLogo } = imagesData;
const { navData } = headerData;

// Extend the window object to include WhWidgetSendButton
declare global {
  interface Window {
    WhWidgetSendButton: any;
  }
}

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://static.getbutton.io/widget-send-button/js/init.js";
    script.onload = () => {
      const options = {
        whatsapp: "+91 8828800343",
        email: "hello@folksco.in",
        call_to_action: "Message us",
        button_color: "#ff7542",
        position: "left",
        order: "whatsapp,email",
      };
      if (window.WhWidgetSendButton) {
        window.WhWidgetSendButton.init(
          "getbutton.io",
          document.location.protocol,
          options
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="block bg-white">
      <div className="lg:px-10">
        <div className="bg-white py-12 text-center lg:px-16 px-6 flex flex-wrap">
          <div className="lg:w-1/3 w-full pb-8 lg:p-0">
            <img
              className="w-2/3 xl:w-68 block m-auto pb-8"
              src={folksLogo.src}
              alt="Folks Logo"
            />
            <ul className="flex justify-center">
              <Link href="https://www.instagram.com/folksco.in/">
                <li className="ml-2">
                  <img className="w-10" src={instagram.src} alt="Instagram" />
                </li>
              </Link>
              <Link href="https://wa.me/918828800343">
                <li className="ml-2">
                  <img className="w-10" src={whatsapp.src} alt="WhatsApp" />
                </li>
              </Link>
              <Link href="https://www.facebook.com/hellofolksco?mibextid=ZbWKwL">
                <li className="ml-2">
                  <img className="w-10" src={facebook.src} alt="Facebook" />
                </li>
              </Link>
              <Link href="https://www.linkedin.com/company/folksco-interior-and-exterior-space-management-company/">
                <li className="ml-2">
                  <img className="w-10" src={linkedin.src} alt="LinkedIn" />
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/3 w-1/2 ">
            <h3 className="text-xl pb-5 w-full text-left lg:-ml-3 lg:text-center">
              Quick Link
            </h3>
            <div className="flex flex-wrap lg:justify-center">
              <ul>
                {navData.map((navItem) => (
                  <Link href={navItem.href} key={navItem.id}>
                    <li
                      className={`font-normal text-sm hover:font-bold pb-2 text-left`}
                    >
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 w-1/2">
            <h3 className="text-xl pb-5 w-full text-left">Contact Us</h3>
            <ul className="w-full text-left font-normal">
              <li className="flex pb-3">
                <FaLocationDot className="md:text-2xl text-6xl md:mt-0 -mt-4 text mr-1 text-[#ed7936]" />
                A/102, Shelter Complex, Sector 8 Plot 12B, Kharghar, Navi
                Mumbai, Maharashtra 410210
              </li>
              <li className="flex pb-3 -ml-1">
                <IoIosMail className="text-2xl mr-1 text-[#ed7936]" />
                <Link
                  className=" hover:font-bold"
                  href="mailto:hello@folksco.in"
                >
                  hello@folksco.in
                </Link>
              </li>
              <li className="flex pb-3">
                <FaPhoneAlt className="text-xl mr-1 text-[#ed7936]" />
                <Link className=" hover:font-bold" href="tel:+918828800343">
                  +91 8828800343
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#ed7936] py-3 flex flex-wrap md:px-24">
        <div className="lg:w-1/2 w-full lg:text-left text-center">
          <p className="font-normal">
            © 2024 <b> Folksco</b> All Rights Reserved.
          </p>
        </div>
        <div className="lg:w-1/2 w-full lg:text-right text-center">
          <p className="font-normal">
            Crafted By{" "}
            <Link className="font-bold" href="https://sagartech.co.in/">
              Sagar Tech - Technical Solutions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
