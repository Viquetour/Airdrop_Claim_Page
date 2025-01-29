import Hero from "@/components/Home/Hero/Hero";
import AirdropSections from "./AirdropSections/AirdropSections";
import FloatingBox from "./Hero/FloatingBox";
import Footer from "./Footer/Footer";
import { ThirdwebProvider } from "thirdweb/react";
const Home = () => {
  return (
    <ThirdwebProvider>
      <div className="overflow-hidden">
        <Hero />
        <FloatingBox />
        <AirdropSections />
        <Footer />
      </div>
    </ThirdwebProvider>
  );
};
export default Home;
