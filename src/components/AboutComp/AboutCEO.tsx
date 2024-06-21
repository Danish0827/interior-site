import expertiseData from "@/data/expertiseData";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import asif from "@/assets/images/asif.jpg";
import vivek from "@/assets/images/vivek.jpg";
const { bgImages } = expertiseData;
const AboutCEO = () => {
  return (
    <>
      <div
        className="block py-16"
        style={{
          background: `url(${bgImages.src})`,
        }}
      >
        <div className="block pb-6 px-10 md:px-24">
          <h3 className="text-3xl folksco-color font-bold pb-3 text-left">
            OUR FOLKS
          </h3>
          <p className="text-justify text-[#666] xl:text-[20px] font-bold mb-2 md:text-[15px]">
            When Asif and Vivek were schoolmates, they shared laughs, memories,
            and a bench together. Little did they know that someday they would
            wind up sharing a work table and a vision for spaces, patrons, and
            creativity? They change their challenges into highlights of their
            work, to create spaces with soul for you.
          </p>
        </div>
        <div className="lg:flex flex-wrap px-24">
          <div className="lg:w-2/3 w-full lg:px-6 m-auto">
            <div className="md:w-full">
              <h3 className="lg:text-2xl text-xl folksco-color font-bold pb-3 text-left">
                Mohammed Asif
              </h3>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold mb-2 md:text-[15px]">
                Ratail and Project Management Professional, served in the
                MiddleEast for more than 20 Years, managed Operations to the
                scale of more than 1 Billion Dhs and lead team to launchmore
                than 100 plus retail store.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full md:px-6 lg:pr-0 py-6 m-auto">
            <div className="md:w-full ml-auto">
              <div className="w-5/6 p-4 lg:mr-0 m-auto">
                <img width={"100%"} src={asif.src} alt={asif.src} />
                <h3 className="relative -mt-8 w-full text-center pb-3 pt-2 bg-[#ed7936] font-semibold flex justify-center items-center text-white">
                  <Link href="https://www.facebook.com/hellofolksco?mibextid=ZbWKwL">
                    {" "}
                    <FaFacebookF className="p-1 w-6 h-6 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/folksco-interior-and-exterior-space-management-company/">
                    {" "}
                    <FaLinkedinIn className="p-1 w-5 h-5 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                  <Link href="https://www.instagram.com/folksco.in/">
                    {" "}
                    <FaInstagram className="p-1 w-6 h-6 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-wrap px-24">
          <div className="lg:w-1/3 w-full md:px-6 lg:pr-0 py-6 m-auto ">
            <div className="md:w-full ml-auto">
              <div className="w-5/6 p-4 lg:ml-0 m-auto">
                <img width={"100%"} src={vivek.src} alt={vivek.src} />
                <h3 className="relative -mt-8 w-full text-center pb-3 pt-2 bg-[#ed7936] font-semibold flex justify-center items-center text-white">
                  <Link href="https://www.facebook.com/hellofolksco?mibextid=ZbWKwL">
                    {" "}
                    <FaFacebookF className="p-1 w-6 h-6 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/folksco-interior-and-exterior-space-management-company/">
                    {" "}
                    <FaLinkedinIn className="p-1 w-5 h-5 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                  <Link href="https://www.instagram.com/folksco.in/">
                    {" "}
                    <FaInstagram className="p-1 w-6 h-6 mr-2 rounded-full bg-white text-[#ed7936]" />
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 w-full lg:px-6 m-auto">
            <div className="md:w-full">
              <h3 className="lg:text-2xl text-xl folksco-color font-bold pb-3 text-left">
                Vivek Agrawal
              </h3>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold mb-2 md:text-[15px]">
                Ratail and Project Management Professional, served in the
                Vivek,yoga instructor turned biker, excels in design with
                precision and passion. With 25+ years in interiors, his keep eye
                and rational approach elevate dream spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCEO;
