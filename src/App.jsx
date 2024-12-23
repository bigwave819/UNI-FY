import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSectioon";
import ProductSection from "./components/ProductSection";
import ProductOne from "./components/ProductOne";
import Services from "./components/Service";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <ProductOne/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
    
  );
}

export default App;
