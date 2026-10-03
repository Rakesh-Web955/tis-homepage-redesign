import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal><p className="section-kicker">01 / ABOUT TIS</p></Reveal>
        <Reveal delay={.08}><div className="about-main"><h2>Boarding and Day School <em>Excellence</em></h2><p className="lead">TIS is one of India’s top boarding and day schools in Dehradun, India.</p><p>Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders. We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.</p><Button href="#academics" variant="outline">Explore the school</Button></div></Reveal>
        <Reveal delay={.14}><div className="about-aside"><div className="quote-mark">“</div><p>We feel supported in what we do and nudged further to do more.</p><span>— Tulas community</span><div className="mini-line" /></div></Reveal>
      </div>
    </section>
  );
}
