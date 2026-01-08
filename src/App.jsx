import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ValueProposition from "./components/sections/ValueProposition";
import ProofOfConcept from "./components/sections/ProofOfConcept";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <Hero />
      <About />
      <ValueProposition />
      <ProofOfConcept />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
