
import AIm from "../components/Aim/AIm";
import Features from "../components/Features/Features";
import OurWork from "../components/OurWork/OurWork";
import Question from "../components/Question/Question";
import Review from "../components/Review/Review";
import Navbar from "../layout/Navbar";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <div className="w-full px-2"> 
           <Navbar/>
           <HeroSection/>
           <Features/>
           <OurWork/>
           <Review/>
           <AIm/>
           <Question/>
        </div>
    );
};

export default Home;