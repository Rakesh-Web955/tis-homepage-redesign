import { ArrowUpRight, BookOpen, FlaskConical, Globe2 } from 'lucide-react';
import Reveal from '../ui/Reveal';

const cards = [
  { no: '01', icon: BookOpen, title: 'Academic Excellence', text: 'A CBSE learning journey built around curiosity, confidence, strong foundations and meaningful achievement.' },
  { no: '02', icon: FlaskConical, title: 'Innovation & Discovery', text: 'Modern facilities and opportunities that encourage students to question, experiment, create and solve.' },
  { no: '03', icon: Globe2, title: 'Global Leadership', text: 'A nurturing environment that develops communication, collaboration, character and lifelong learning.' },
];

export default function AcademicsSection() {
  return (
    <section className="section academics" id="academics">
      <div className="container"><Reveal><div className="section-heading"><div><p className="section-kicker">02 / ACADEMICS</p><h2>Make learning feel<br /><em>like an adventure.</em></h2></div><p className="heading-note">When students are inspired, they don’t just learn — they grow, explore, and shape their own futures.</p></div></Reveal>
        <div className="feature-grid">{cards.map((card, i) => { const Icon = card.icon; return <Reveal key={card.no} delay={i * .08}><article className="feature-card" data-cursor><span className="card-number">{card.no}</span><Icon size={30} strokeWidth={1.5}/><h3>{card.title}</h3><p>{card.text}</p><a href="#admission" aria-label={`Learn more about ${card.title}`}><ArrowUpRight size={20}/></a></article></Reveal> })}</div>
      </div>
    </section>
  );
}
