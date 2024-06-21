"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import LatestBlogs from "./LatestBlogs";
import { Skeleton } from "antd";

interface BlogData {
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  fimg_data: { url: string; alt: string };
  date: string;
}

const BlogPage = () => {
  const path = usePathname();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const slug = path.replace("/blog/", "");
  //   console.log(slug);

  // console.log(slug);
  useEffect(() => {
    // setLoading(true);
    const fetchPostData = async () => {
      const response = await fetch(`${process.env.BACKEND}/posts?slug=${slug}`);
      const result = await response.json();
      // console.log(result[0], "rtytuvbhijnokml");
      setBlogData(result[0]);
      setLoading(false);
    };
    fetchPostData();
  }, []);

  return (
    <>
      <title>{blogData?.title?.rendered}</title>
      <meta name="description" content={blogData?.excerpt?.rendered} />
      <div className="bg-[#f4f4f4] p-3 lg:py-10 lg:px-24 lg:flex gap-5 w-full">
        {loading ? (
          <div className="lg:w-[73%] p-5 bg-white mb-5 rounded-lg">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <div>
                  <Skeleton key={index} active />
                  <br />
                </div>
              ))}
          </div>
        ) : (
          <>
            <div className="lg:w-[73%] p-3 lg:p-3 bg-white mb-5 rounded-lg">
              {/* <BreadCrumb
          label1={"Blogs"}
          url={"/blogs"}
        /> */}

              <div className="p-2 lg:p-3 space-y-3">
                <h1 className="text-[1.3rem] lg:text-[2rem]  font-semibold leading-tight">
                  {blogData?.title?.rendered}
                  Blog Title
                </h1>
                <div>
                  <span className="text-black tracking-wider text-sm">
                    Published by{" "}
                    <span className="text-primary font-medium">
                      {/* {blogData?.author || "NA"} */}
                      Folksco
                    </span>{" "}
                    on{" "}
                    <span className="text-primary font-medium">
                      {blogData?.date
                        ? new Date(blogData.date).toLocaleDateString()
                        : "Unknown Date"}
                    </span>
                  </span>
                </div>
                <img
                  className="w-full"
                  src={blogData?.fimg_data?.url}
                  alt={blogData?.fimg_data?.alt}
                />
                <div
                  className="space-y-3 blogdescription pt-5"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.content?.rendered || "",
                  }}
                ></div>
                {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
              </div>
            </div>
          </>
        )}
        <div className="h-[100%] lg:w-[27%] p-3 lg:p-5 bg-white sticky top-[90px] rounded-lg font-title">
          <LatestBlogs />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
