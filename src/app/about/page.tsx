import AboutCEO from "@/components/AboutComp/AboutCEO";
import AboutComp from "@/components/AboutComp/AboutComp";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Layout title={"About Us"} />
      <AboutComp />
      <AboutCEO />
      <Footer />
    </>
  );
};

export default About;
