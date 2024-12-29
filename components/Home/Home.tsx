import Hero from "@/components/Home/Hero/Hero";
import AirdropSections from "./AirdropSections/AirdropSections";
import FloatingBox from "./Hero/FloatingBox";
import Gridsection from "./AirdropSections/Gridsection";
import Roadmap from "./AirdropSections/Roadmap";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FloatingBox />
      <AirdropSections />
      <Gridsection />
      <Roadmap />
      <Footer />
      
    </div>
  )
}
export default Home