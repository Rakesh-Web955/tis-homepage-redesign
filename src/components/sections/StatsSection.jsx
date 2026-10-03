import Reveal from '../ui/Reveal';
import { stats } from '../../data/siteData';

export default function StatsSection() {
  return <section className="stats-section"><div className="container stats-grid">{stats.map((stat, i) => <Reveal key={stat.label} delay={i * .05}><div className="stat"><strong>{stat.value}</strong><span>{stat.label}</span></div></Reveal>)}</div></section>;
}
