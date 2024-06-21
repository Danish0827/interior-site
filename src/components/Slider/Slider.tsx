"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { SkeletonTheme } from "react-loading-skeleton";
import BannerSkeleton from "../Skeletons/BannerSkeleton";

interface SliderData {
  id: number;
  meta: { heading: string; image: string; paragraph: string };
}

const Slider = () => {
  const [sliderData, setSliderData] = useState<SliderData[]>([]);
  const [isBannerLoading, setIsBannerLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsBannerLoading(true);
      try {
        const response = await fetch(`${process.env.BACKEND}/slider`);

        if (response.ok) {
          const SliderData: SliderData[] = await response.json();
          setSliderData(SliderData);
        } else {
          console.error("Error fetching feature data");
        }
      } catch (error) {
        console.error("Internal Server Error", error);
      } finally {
        setIsBannerLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {isBannerLoading ? (
          <BannerSkeleton />
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {sliderData.map((slider) => (
              <SwiperSlide
                key={slider.id}
                className="bg-black relative z-20 h-dvh"
              >
                <div className="h-dvh">
                  <img
                    width={"100%"}
                    height={"100vh"}
                    className="h-dvh object-cover"
                    src={slider.meta.image}
                    alt={slider.meta.heading}
                  />
                </div>
                <div
                  className="absolute z-10 top-[50%] left-[50%] w-full lg:w-auto"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <h1 className="text-center text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                    {slider.meta.heading}
                  </h1>
                  <div className="px-3">
                    <p className="text-white bg-[#ee8143] text-center w-full md:w-3/5 m-auto py-1 rounded-xl font-semibold">
                      {slider.meta.paragraph}
                    </p>
                  </div>
                </div>
                <div className="block z-10 -mt-6 relative text-center w-full">
                  <Link
                    href="/portfolio/current-projects"
                    className="text-white relative bottom-12 w-full md:w-auto border-[#ee8143] py-1 mr-3 px-2 border-2 hover:bg-[#ee8143] rounded-md"
                  >
                    Current Project Update
                  </Link>
                  <Link
                    target="_blank"
                    href="https://wa.me/918828800343"
                    className="text-white relative bottom-12 w-full md:w-auto border-[#ee8143] py-1 px-2 border-2 hover:bg-[#ee8143] rounded-md"
                  >
                    Connect With Us
                  </Link>
                </div>
                <div className="block absolute bottom-0 h-full bg-[#00000050] text-center w-full"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Slider;
