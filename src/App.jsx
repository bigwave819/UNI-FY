import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSectioon";
import ProductSection from "./components/ProductSection";
import ProductOne from "./components/ProductOne";
import Services from "./components/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <ProductOne/>
      <Services/>
    </div>
    
  );
}

export default App;
