import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./Components/WhatsAppFloat";
import Gallery from "./Components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-roadwayBlack text-roadwayWhite">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      
    </div>
  );
}