"use client";
import expertiseData from "@/data/expertiseData";
import { Image } from "antd";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const { bgImages } = expertiseData;

interface ImageData {
  id: number;
  meta: {
    image: string[];
  };
}

const PortfolioSingleGallery: React.FC = () => {
  const portpart = usePathname();
  const trimmedPortpart = portpart.substring(11);
  // console.log(trimmedPortpart, "sdfdsg");

  const [data, setData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/${trimmedPortpart}?per_page=100`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div
        className="block py-12 expertise-logo"
        style={{
          background: `url(${bgImages.src})`,
        }}
      >
        <div className="block px-7 lg:px-20">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="uppercase lg:text-5xl md:text-3xl text-2xl pb-8 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">OUR </span>
            {/* {trimmedPortpart} */}Portfolio
          </h2>
          {/* <p className="raleway text-justify pb-4 text-[#666] text-[18px] font-semibold">
            Being Part of many{" "}
            <span className="folksco-color">
              Best Interior designer in Mumbai
            </span>
            , we have always stood apart is because of our Hassle Free Project
            deliveries and an Eye for Detail. The reason why a well-designed
            interior adds personality to your home is that most homes or offices
            look more or less the same on the inside.
          </p>
          <p className="text-justify text-[#666] text-[18px] font-semibold">
            Surely there are different{" "}
            <span className="folksco-color">interior and exterior designs</span>
            , but for the most part, there are only floors and walls. However,
            by changing the colour and materials that are used for floors and
            walls, you can give your home an aspect that is all yours. You can
            take this even further by adding furniture that shows your
            personality. This will give you a home that is your own and that
            shows your style.
          </p> */}
        </div>

        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {data.map((item) => (
              <Image
                key={`${item.id}`}
                src={`${item.meta.image}`}
                alt={`${item.meta.image}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSingleGallery;
