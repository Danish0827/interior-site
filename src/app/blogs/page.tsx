import BlogComp from "@/components/BlogComp/BlogComp";
import Layout from "@/components/Layout/Layout";
import React from "react";
import Footer from "@/components/Footer/Footer";

const Blog = () => {
  return (
    <>
      <Layout title="Blog" />
      <BlogComp />
      <Footer />
    </>
  );
};

export default Blog;
