import Reveal from '../ui/Reveal';
import { sports, sportImage } from '../../data/siteData';

export default function SportsSection() {
  return <section className="section sports" id="beyond"><div className="container"><div className="sports-intro"><Reveal><p className="section-kicker">03 / BEYOND ACADEMICS</p><h2>Sports?<br /><em>It’s the foundation.</em></h2><p>It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life.</p></Reveal><Reveal delay={.12}><div className="sports-image"><img src={sportImage} alt="Students enjoying sport at Tulas"/><span>PLAY<br /><b>TO GROW</b></span></div></Reveal></div><Reveal><div className="sports-marquee" aria-label="Sports available at Tulas">{sports.map((sport) => <span key={sport}>{sport}<i>✦</i></span>)}</div></Reveal></div></section>;
}
