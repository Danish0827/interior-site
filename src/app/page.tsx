import Expertise from "@/components/Expertise/Expertise";
import Header from "@/components/Header/Header";
import Reachus from "@/components/Reachus/Reachus";
import Slider from "@/components/Slider/Slider";
import Whyus from "@/components/WhyUs/Whyus";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  // console.log(process.env.BACKEND, "fdsfdsfdsf");
  return (
    <>
      <Header />
      <Slider />
      <Expertise />
      <Whyus />
      <Reachus />
      <Footer />
    </>
  );
}
