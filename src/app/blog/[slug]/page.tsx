import BlogPage from "@/components/BlogComp/BlogPage";
import React from "react";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Footer/Footer";

const singleBlogPage = () => {
  return (
    <>
      <Layout title="Blog Single" />
      <BlogPage />
      <Footer />
    </>
  );
};

export default singleBlogPage;
