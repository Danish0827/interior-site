import Layout from "@/components/Layout/Layout";
import PortfolioComp from "@/components/PortfolioComp/PortfolioComp";
import React from "react";
import Footer from "@/components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <Layout title={"Our Portfolio"} />
      <PortfolioComp />
      <Footer />
    </>
  );
};

export default Portfolio;
