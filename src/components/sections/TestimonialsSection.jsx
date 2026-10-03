import Reveal from '../ui/Reveal';
import { testimonials, campusImage } from '../../data/siteData';

export default function TestimonialsSection() {
  return <section className="section testimonials" id="events"><div className="container"><Reveal><div className="testimonial-head"><div><p className="section-kicker">05 / FROM THE PARENTS</p><h2>A place to <em>belong.</em></h2></div><p>When you choose a school that chooses you, it becomes more than a place to learn — it becomes a place to belong, grow, and shine.</p></div></Reveal><div className="testimonial-layout"><Reveal><div className="campus-card"><img src={campusImage} alt="Tulas International School campus"/><div className="campus-overlay"><span>360° VIRTUAL TOUR</span><strong>DIVE INTO OUR...</strong></div></div></Reveal><div className="testimonial-list">{testimonials.map((t, i) => <Reveal key={t.name} delay={i*.04}><article className="testimonial"><div className="avatar">{t.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><h3>{t.name}</h3><span>{t.role}</span><p>{t.text}</p></div></article></Reveal>)}</div></div></div></section>;
}
