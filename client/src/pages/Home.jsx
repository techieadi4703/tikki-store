import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Background from "../components/Background";

const Home = () => {
  const heroData = [
    {
      text1: "Welcome to Tikki Store",
      text2: "Your one-stop shop for everything!",
    },
    { text1: "Explore our Collections", text2: "Find what you love!" },
    { text1: "Join our Community", text2: "Connect with fellow enthusiasts!" },
    { text1: "Stay Updated", text2: "Subscribe to our newsletter!" },
  ];
  const [heroCount, setHeroCount] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroData.length]);
  return (
    <div className="overflow-x-hidden relative top-[70%]">
      <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025] ">
        <Background heroCount={heroCount} />
        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
      </div>
    </div>
  );
};

export default Home;
