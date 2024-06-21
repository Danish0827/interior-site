import Layout from "@/components/Layout/Layout";
import PortfolioSingleGallery from "@/components/PortfolioComp/PortfolioSingle";
import Footer from "@/components/Footer/Footer";
import React from "react";

const PortfolioSingle = () => {
  return (
    <>
      <Layout title="Portfolio Gallery" />
      <PortfolioSingleGallery />
      <Footer />
    </>
  );
};

export default PortfolioSingle;
