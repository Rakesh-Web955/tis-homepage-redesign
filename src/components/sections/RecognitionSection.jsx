import Reveal from '../ui/Reveal';
import { recognitions } from '../../data/siteData';

export default function RecognitionSection() {
  return <section className="section recognition"><div className="container"><Reveal><div className="section-heading"><div><p className="section-kicker">04 / RECOGNITION</p><h2>A school that<br /><em>keeps raising</em> the bar.</h2></div><p className="heading-note">Tulas is recognised across Dehradun, Uttarakhand, North India and India for its co-educational boarding school experience.</p></div></Reveal><div className="recognition-grid">{recognitions.map((r, i) => <Reveal key={r.number + r.place} delay={i*.06}><article><strong>{r.number}</strong><span>{r.place}</span><p>{r.text}</p></article></Reveal>)}</div></div></section>;
}
