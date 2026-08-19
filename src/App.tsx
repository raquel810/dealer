import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Differentiators from '@/components/Differentiators';
import PainPoints from '@/components/PainPoints';
import MarginCalculator from '@/components/MarginCalculator';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import OptiFit from '@/components/OptiFit';
import DoorStyles from '@/components/DoorStyles';
import StainFinishes from '@/components/StainFinishes';
import ProjectGallery from '@/components/ProjectGallery';
import LineFinder from '@/components/LineFinder';
import Downloads from '@/components/Downloads';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <Differentiators />
      <PainPoints />
      <MarginCalculator />
      <ComparisonMatrix />
      <OptiFit />
      <DoorStyles />
      <StainFinishes />
      <ProjectGallery />
      <LineFinder />
      <Downloads />
      <Footer />
    </div>
  );
}
