import { useTheme } from './hooks/useTheme';
import ScrollProgress from './components/animation/ScrollProgress';
import CustomCursor from './components/animation/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import AcademicsSection from './components/sections/AcademicsSection';
import StatsSection from './components/sections/StatsSection';
import SportsSection from './components/sections/SportsSection';
import RecognitionSection from './components/sections/RecognitionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AdmissionSection from './components/sections/AdmissionSection';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return <>
    <ScrollProgress />
    <CustomCursor />
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main>
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <StatsSection />
      <SportsSection />
      <RecognitionSection />
      <TestimonialsSection />
      <AdmissionSection />
    </main>
    <Footer />
  </>;
}
