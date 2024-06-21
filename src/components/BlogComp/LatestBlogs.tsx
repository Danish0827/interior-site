"use client";
import { Skeleton } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  fimg_data: { url: string; alt: string };
  date: string;
}

const LatestBlogs = () => {
  const [latestBlog, setLatestBlog] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const response = await fetch(`${process.env.BACKEND}/posts`);
      const result = await response.json();
      setLatestBlog(result);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <div>
      <h2 className="mb-5 font-medium font-title text-2xl">LATEST POST</h2>
      {loading ? (
        <>
          {Array(3)
            .fill(3)
            .map((_, index) => (
              <div className="pb-5">
                <Skeleton key={index} active />
              </div>
            ))}
        </>
      ) : (
        <>
          {latestBlog?.slice(0, 3)?.map((item: any, index: any) => (
            <div key={index} className="bg-[#f4f4f4] p-3 rounded-lg mb-2">
              {/* <Link href={`/blog/${item?.blog_title}?id=${item?.id}`}> */}
              <Link href={`/blog/${item.slug}`} className="flex flex-wrap">
                <div className="max-h-[120px] w-1/3 m-auto rounded-full overflow-hidden">
                  <img
                    className="h-[100px] m-auto w-[100px] object-cover transition-all ease-in-out hover:scale-150"
                    src={
                      item?.fimg_data?.url
                        ? item.fimg_data?.url
                        : "/placeholder.webp"
                    }
                    alt={item?.fimg_data?.alt}
                  />
                </div>
                <div className="py-2 pl-4 w-2/3 space-y-1">
                  <h2 className="text-[1rem] font-medium line-clamp-3">
                    {item.title.rendered}
                    {/* Blog Title */}
                  </h2>

                  <span className="text-aqua text-xs">
                    Published on{" "}
                    <span className="text-primary font">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LatestBlogs;
