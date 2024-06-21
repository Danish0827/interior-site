"use client";
import React from "react";
import Header from "../Header/Header";

interface LayoutProps {
  title: string; // Define the type of the title prop as string
}

const Layout: React.FC<LayoutProps> = ({ title = "" }) => {
  return (
    <>
      <Header />
      <div className="about-image">
        <div className=" bg-[#00000082] pt-40 pb-24 lg:pt-64 lg:pb-28">
          <div className="lg:px-20">
            <h5 className="text-white text-center text-3xl lg:text-4xl font-bold">
              {title}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
