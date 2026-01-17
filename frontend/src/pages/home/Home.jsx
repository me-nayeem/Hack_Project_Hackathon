import './Home.css';

// all components:
import HeroSection from '../../components/home/HeroSection';
import Navbar from '../../components/home/Navbar';
import About from '../../components/home/About';
import Features from '../../components/home/Features';
import Testimonials from '../../components/home/Testimonials';
import Footer from '../../components/home/Footer';





export default function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      {/* <About /> */}

      {/* Features Section */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </>
  );
}