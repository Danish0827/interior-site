import portfolioData from "@/data/portfolioData";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const { bgImages, portfolio } = portfolioData;

const PortfolioComp = () => {
  return (
    <>
      <div
        className="block py-12 expertise-logo"
        style={{
          background: `url(${bgImages.src})`,
        }}
      >
        <div className="block pb-8 lg:pb-16 px-7 lg:px-20">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-3xl text-2xl pb-8 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">OUR </span>PORTFOLIO
          </h2>
          <p className="raleway text-justify pb-4 text-[#666] text-[18px] font-semibold">
            In our way, we try to provide the{" "}
            <span className="folksco-color">
              Best Interior designer in Mumbai
            </span>{" "}
            for your homes and offices. We have delivered more than 50 homes &
            Offices in this bustling city of Mumbai. For best reference, look at
            our project option to see some of our most recently completed
            projects.
          </p>
          <p className="text-justify text-[#666] text-[18px] font-semibold">
            We are known as Best Interior designers in Mumbai because of our
            stunning <span className="folksco-color">residential designs </span>{" "}
            and
            <span className="folksco-color"> commercial interior designs</span>,
            and Project deliveries. Interior design is very different from home
            decor.
          </p>
        </div>

        <div className="flex flex-wrap justify-center w-full px-2 md:px-11 lg:px-10 xl:px-12 pb-4 lg:pb-8">
          {portfolio.map(({ id, image, heading, purl }) => {
            const firstSpaceIndex = heading.indexOf(" ");

            // Split the heading into two parts: before the first space and after the first space
            const firstWord = heading.substring(0, firstSpaceIndex);
            const remainingWords = heading.substring(firstSpaceIndex + 1);

            return (
              <div className="lg:w-1/5 md:w-1/3 w-1/2 p-2" key={id}>
                <Link href={purl}>
                  <div className="relative h-[440px]">
                    <img
                      className="object-cover h-full"
                      src={typeof image === "string" ? image : image.src}
                      alt=""
                    />
                    <div className="text-white text-sm md:text-xl font-semibold flex-wrap text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                      <div className="w-full">
                        <h4 className="w-full mb-3">
                          {firstWord}
                          <br />
                          {remainingWords}
                        </h4>
                        <IoIosArrowDropright className="w-full text-3xl text-[#ed7936]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PortfolioComp;
