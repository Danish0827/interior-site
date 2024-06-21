import Layout from "@/components/Layout/Layout";
import PortfolioSingleVideo from "@/components/PortfolioComp/PortfolioSingleVideo";
import Footer from "@/components/Footer/Footer";
import React from "react";

const PortfolioSingle = () => {
  return (
    <>
      <Layout title="Portfolio Gallery" />
      <PortfolioSingleVideo />
      <Footer />
    </>
  );
};

export default PortfolioSingle;
