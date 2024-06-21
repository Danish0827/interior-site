"use client";
import portfolioData from "@/data/portfolioData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

const { bgImages } = portfolioData;

interface testimonialData {
  id: number;
  meta: { image: string; link: string; heading: string; paragraph: string };
}

const TestimonialComp = () => {
  const [testimonialData, setTestimonialData] = useState<testimonialData[]>([]);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND}/testimonial`);
        if (response.ok) {
          const testimonialData: testimonialData[] = await response.json();
          setTestimonialData(testimonialData);
        }
      } catch (error) {
        console.error("Internal Server Error", error);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

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
            <span className="folksco-color">TESTIMONIALS</span>
          </h2>
          <h6 className="text-2xl lg:text-3xl text-gray-500 text-center font-bold">
            WHAT OUR CLIENTS SAYS
          </h6>
        </div>
        <div className="lg:flex flex-wrap px-4 lg:px-10">
          {testimonialData.map((items) => (
            <div className="lg:w-1/3 w-full py-6 md:px-9" key={items.id}>
              <div className="px-5">
                <div className="relative">
                  <img
                    className="mb-5"
                    width={"100%"}
                    height={"300px"}
                    src={items.meta.image}
                    alt=""
                  />
                  <h4 className="text-white text-xl font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                    <Link target="_blank" href={items.meta.link}>
                      <IoPlayCircleSharp className="text-7xl" />
                    </Link>
                  </h4>
                </div>
              </div>
              <h3 className="text-2xl folksco-color font-bold pb-3 text-center h-14 leading-none">
                {items.meta.heading}
              </h3>
              <p
                className={`text-justify text-[#666] xl:text-[18px] font-semibold mb-2 md:text-[15px] ${
                  expandedTestimonial === items.id ? "" : "line-clamp-5"
                }`}
              >
                {items.meta.paragraph}
              </p>
              <p
                className="cursor-pointer text-[#ed7936]"
                onClick={() => handleLoadMore(items.id)}
              >
                {expandedTestimonial === items.id ? "Read less" : "Read more"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialComp;
