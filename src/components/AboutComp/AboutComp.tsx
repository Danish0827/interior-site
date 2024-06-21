import expertiseData from "@/data/expertiseData";
import React from "react";

import imagesm from "@/assets/images/aboutmain.jpg";
const { bgImages } = expertiseData;
const AboutComp = () => {
  return (
    <>
      <div
        className="block py-12"
        style={{
          background: `url(${bgImages.src})`,
        }}
      >
        <div className="block pb-2 lg:pb-7">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">ABOUT </span>US
          </h2>
        </div>
        <div className="lg:flex  px-4">
          <div className="lg:w-2/3 w-full lg:px-6">
            <div className="md:w-full m-auto">
              <div className="flex flex-wrap">
                <div className="w-full mt-auto px-2 pb-2 ">
                  <div className="relative">
                    <img width={"100%"} src={imagesm.src} alt={imagesm.src} />
                    <h4 className="text-white text-xl font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]"></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full md:px-6 lg:pr-0 py-6 m-auto lg:relative -left-24 bg-white lg:mb-0">
            <div className="md:w-full ml-auto">
              <h3 className="text-3xl folksco-color font-bold pb-3 text-center">
                OUR FOLKS
              </h3>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold mb-2 md:text-[15px]">
                At Folksco, our team works with you to create spaces for{" "}
                <span className="folksco-color">
                  Best Interior Designer in Mumbai
                </span>{" "}
                that are truly special. Our team is the pillars of our projects;
                they run our studio with passion, vision, and energy. As a team,
                we have made Eye for Detail, Value Engineering, Built Quality a
                habit—not just something we strive for but something we live by
                every day.
              </p>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold mb-2 lg:text-[15px]">
                As part of our customer experience management at Folksco as{" "}
                <span className="folksco-color">
                  best interior designer in Mumbai,
                </span>{" "}
                we share our natural sense of "Folkship" by Creating Happy
                Spaces Together.
              </p>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold mb-2 md:text-[15px]">
                And we are always ready for more!
              </p>
              <p className="text-justify text-[#666] xl:text-[20px] font-semibold md:text-[15px]">
                To date, we’ve completed many projects. Will yours be next?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
