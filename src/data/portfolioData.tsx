import bgImages from "@/assets/images/background-image.jpg";
import image1 from "@/assets/images/porfoliocontent.jpg";
import image2 from "@/assets/images/Homes.jpeg";
import image3 from "@/assets/images/Offices.jpeg";
import image4 from "@/assets/images/Retail.jpeg";
import image5 from "@/assets/images/Hospitality.jpeg";

const portfolioData = {
  bgImages,
  portfolio: [
    {
      id: 1,
      image: image2,
      heading: "HOME",
      purl: "/porfolios/home",
    },
    {
      id: 2,
      image: image3,
      heading: "COMMERCIAL OFFICES",
      purl: "/porfolios/commercial-space",
    },
    {
      id: 3,
      image: image4,
      heading: "RETAIL",
      purl: "/porfolios/retail",
    },
    {
      id: 4,
      image: image5,
      heading: "HOSPITALITY",
      purl: "/porfolios/hospitality",
    },
    {
      id: 5,
      image: image1,
      heading: "CURRENT PROJECTS",
      purl: "/porfolio/current-projects",
    },
  ],
};

export default portfolioData;
