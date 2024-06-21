import React from "react";
import expertiseData from "@/data/expertiseData";

const { bgImages, expertise } = expertiseData;

const Expertise = () => {
  return (
    <>
      <div
        id="service"
        className="block pt-24 pb-6 expertise-logo"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block pb-8 lg:pb-16 px-7 lg:px-20">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-8 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">OUR </span>SERVICES
          </h2>
          <p className="raleway text-justify text-[#666] text-[18px] font-semibold">
            Being Part of many{" "}
            <span className="folksco-color">
              Best Interior designer in Mumbai
            </span>
            , we have always stood apart is because of our Hassle Free Project
            deliveries and an Eye for Detail. The reason why a well-designed
            interior adds personality to your home is that most homes or offices
            look more or less the same on the inside.
          </p>
        </div>

        <div className="flex flex-wrap w-full px-2 md:px-11 lg:px-20 xl:px-32 pb-4 lg:pb-8">
          {expertise.map(({ id, image, heading, count }) => (
            <div className="lg:w-1/3 md:w-1/2 w-full p-3" key={id}>
              <div className="gdfg overflow-hidden h-[360px]">
                <img
                  className="hover:scale-125 duration-100 object-cover h-[97.7%]"
                  src={require(`/src/assets/images/${image}`).default.src}
                  alt=""
                />
                <h3 className="dasda relative md:text-lg text-xs -mt-8 w-full h-10 flex items-center justify-center  text-center pb-4 pt-4  bg-[#ed7936] hover:bg-white hover:foct-bold hover:text-[#ed7936] font-semibold text-white">
                  {heading}
                </h3>
              </div>
              <h4
                style={{ textShadow: "0 4px 5px #ff5c00, 0 0 3px #ff5c00" }}
                className="text-white text-3xl md:text-5xl font-bold text-right py-2"
              >
                {count}
              </h4>
            </div>
          ))}
        </div>
        <div className="block pb-8 lg:pb-4 px-7 lg:px-20">
          <p className="text-justify text-[#666] text-[18px] font-semibold">
            Surely there are different{" "}
            <span className="folksco-color">interior and exterior designs</span>
            , but for the most part, there are only floors and walls. However,
            by changing the colour and materials that are used for floors and
            walls, you can give your home an aspect that is all yours. You can
            take this even further by adding furniture that shows your
            personality. This will give you a home that is your own and that
            shows your style.
          </p>
        </div>
      </div>
    </>
  );
};

export default Expertise;
