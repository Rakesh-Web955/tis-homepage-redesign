import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import Button from '../ui/Button';
import { sportImage, studentImage } from '../../data/siteData';

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span /> DEHRADUN · INDIA</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>Learning that<br /><em>moves</em> you.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .18 }}>Welcome to Tulas International School — where academic excellence, holistic development, and global leadership grow together.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .25 }}><Button href="#admission">Enquire Now</Button><a className="text-link" href="#about" data-cursor>Discover TIS <ArrowDown size={16}/></a></motion.div>
          <div className="hero-proof"><span className="proof-dot" /><span>Boarding + Day School</span><span className="proof-separator" /><span>CBSE Curriculum</span></div>
        </div>
        <div className="hero-art">
          <motion.div className="hero-orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="hero-orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
          <div className="hero-glow" />
          <motion.div className="hero-image-card" initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ duration: .8, delay: .12, ease: [0.22,1,.36,1] }}>
            <img src={sportImage} alt="Tulas students playing basketball" />
          </motion.div>
          <motion.div className="floating-student" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .45 }}><img src={studentImage} alt="Tulas student" /></motion.div>
          <div className="hero-badge"><strong>16+</strong><span>Olympic<br />sports</span></div>
          <div className="hero-note">LET'S DO IT<br /><b>with Tulas</b></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About TIS" data-cursor><span>SCROLL TO EXPLORE</span><Play size={13} fill="currentColor" /></a>
    </section>
  );
}
