import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import BeforeAfter from "./components/sections/BeforeAfter";
import ValueProposition from "./components/sections/ValueProposition";
import Portfolio from "./components/sections/Portfolio";
import WorkProcess from "./components/sections/WorkProcess";
import ProofOfConcept from "./components/sections/ProofOfConcept";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";
import StickyBottomNav from "./components/layout/StickyBottomNav";

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <Hero />
      <About />
      <BeforeAfter />
      <ValueProposition />
      <Portfolio />
      <WorkProcess />
      <ProofOfConcept />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      <StickyBottomNav />
    </div>
  );
}

export default App;
