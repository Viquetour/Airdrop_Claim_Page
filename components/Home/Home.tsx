import Hero from "@/components/Home/Hero/Hero";
import AirdropSections from "./AirdropSections/AirdropSections";
import FloatingBox from "./Hero/FloatingBox";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FloatingBox />
      <AirdropSections />
      <Footer />
      
    </div>
  );
}
export default Home