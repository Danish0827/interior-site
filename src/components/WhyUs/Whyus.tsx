import expertiseData from "@/data/expertiseData";
import React from "react";

import value from "@/assets/images/value.jpg";
import hassel from "@/assets/images/HASSLE.webp";
import build from "@/assets/images/build.webp";
import eye from "@/assets/images/eye.jpg";

const { bgImages } = expertiseData;
const Whyus = () => {
  return (
    <>
      <div
        id="whyus"
        className="block pt-24 pb-6"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block pb-2">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">WHY </span>US
          </h2>
        </div>
        <div className="lg:flex  px-4">
          <div className="lg:w-1/2 w-full px-6 m-auto pb-8 lg:pb-0">
            <div className="md:w-11/12 lg:ml-auto m-auto">
              <p className="text-justify text-[#666] text-[18px] font-semibold mb-4">
                We are{" "}
                <span className="folksco-color">Interiors and Exteriors</span>,
                Design & Project Management Consultancy Company.
              </p>
              <p className="text-justify text-[#666] text-[18px] font-semibold mb-4">
                Our Value Engineering, Build Quality, Eye for Detail and Hassle
                Free project delivery services as{" "}
                <span className="folksco-color">
                  best interior designer in Mumbai
                </span>{" "}
                are a big part of who we Folks are.
              </p>
              <p className="text-justify text-[#666] text-[18px] font-semibold">
                <span className="folksco-color">
                  We are on a Mission to Create an Everlasting Experience for
                  our Customers,
                </span>
                by giving our clients a front-row seat to Experience the
                transformation of Ideas to Implementation.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full md:px-6 px-0">
            <div className="md:w-full xl:w-4/5 m-auto">
              <div className="flex flex-wrap">
                <div className="w-2/5 mt-auto px-2 pb-2 ">
                  <div className="relative">
                    <img src={value.src} alt="" />
                    <h4 className="text-white lg:text-xl md:text-lg text-sm font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                      VALUE <br />
                      ENGINEERING
                    </h4>
                  </div>
                </div>
                <div className="w-3/5 px-2 pb-2">
                  <div className="relative">
                    <img src={hassel.src} alt="" />
                    <h4 className="text-white lg:text-xl md:text-lg text-sm font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                      HASSLE FREE PROJECT <br />
                      DELIVERY
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-3/5 px-2 pb-2">
                  <div className="relative">
                    <img src={build.src} alt="" />
                    <h4 className="text-white lg:text-xl md:text-lg text-sm font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                      BUILD <br /> QUALITY
                    </h4>
                  </div>
                </div>
                <div className="w-2/5 px-2 pb-2">
                  <div className="relative">
                    <img src={eye.src} alt="" />
                    <h4 className="text-white  lg:text-xl md:text-lg text-sm  text-smfont-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                      EYE FOR <br /> DETAILS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
