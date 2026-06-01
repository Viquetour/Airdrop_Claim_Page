import Hero from "@/components/Home/Hero/Hero";
import AirdropSections from "./AirdropSections/AirdropSections";
import FloatingBox from "./Hero/FloatingBox";
import Footer from "./Footer/Footer";
import { ThirdwebProvider } from "thirdweb/react";
const Home = () => {
  return (
    <ThirdwebProvider>
      <div className="w-full min-h-screen overflow-hidden flex flex-col">
        <Hero />
        <AirdropSections />
        <FloatingBox />
        <Footer />
      </div>
    </ThirdwebProvider>
  );
};
export default Home;
