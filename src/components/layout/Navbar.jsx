import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems, logoImage } from '../../data/siteData';
import Button from '../ui/Button';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#top" className="brand" data-cursor aria-label="Tulas International School home">
          <img src={logoImage} alt="Tulas International School" />
        </a>
        <nav className={`desktop-nav ${open ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} data-cursor>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" data-cursor>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Button href="#admission">Apply Now</Button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} data-cursor>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
