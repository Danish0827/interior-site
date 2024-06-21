"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

interface FeaturedImage {
  src: string;
  alt: string;
}

interface Title {
  rendered: string;
}

interface BlogPost {
  id: number;
  slug: string;
  date: string;
  title: Title;
  fimg_data: { url: string; alt: string };
}

const BlogComp = () => {
  const [blog, setBlog] = useState<BlogPost[]>([]);
  // console.log(blog);

  // Function to format the date
  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
    }; // Specify the type explicitly
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND}/posts`);

        if (response.ok) {
          const blogData: BlogPost[] = await response.json();
          setBlog(blogData);
        } else {
          console.error("Error fetching feature data");
        }
      } catch (error) {
        console.error("Internal Server Error", error);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <>
      <div className="block py-12 bg-[#f1efea]">
        <div className="block pb-2 lg:pb-7">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#4f4d4d]"
          >
            <span className="folksco-color">BLOG</span>
          </h2>
        </div>
        <div className="lg:flex flex-wrap px-4 md:px-24">
          {blog.map(({ id, slug, date, title, fimg_data }) => (
            <div className="lg:w-1/3 w-full py-6 md:px-6 px-3" key={id}>
              <Link href={`blog/${slug}`}>
                <div className=" bg-white rounded-2xl dgdg">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      className="drdr duration-700"
                      width={"100%"}
                      height={"300px"}
                      src={fimg_data.url}
                      alt=""
                    />
                    <p className="px-2 py-1 absolute bottom-0 left-2 bg-[#222121] text-white z-1">
                      {formatDate(date)}
                    </p>
                  </div>
                  <div className="px-10 py-5">
                    <h3 className="lg:text-2xl text-xl text-[#222121] font-bold pb-7 text-left">
                      {title?.rendered}
                    </h3>
                    <span className="adad cursor-pointer text-justify duration-100 hover:text-[#ed7936] text-[#666] text-[18px] font-semibold mb-2 md:text-[15px]">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogComp;
