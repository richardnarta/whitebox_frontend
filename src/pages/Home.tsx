import Navbar from '../components/general/Navbar';
import HeroSection from '../components/home/Hero';
import AboutSection from '../components/home/About';
import WeddingsSection from '../components/home/Wedding';
import PortraitureSection from '../components/home/Portraiture';
import StudioSection from '../components/home/Studio';
import PrintingSection from '../components/home/Printing';
import FaqSection from '../components/general/FAQ';
import Footer from '../components/general/Footer';

function Home() {
  return (
    <div className="bg-brand-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WeddingsSection />
      <PortraitureSection />
      <StudioSection />
      <PrintingSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Home
