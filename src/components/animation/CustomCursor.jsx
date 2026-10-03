import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 38, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 500, damping: 38, mass: 0.25 });

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    setEnabled(!coarse);
    if (coarse) return undefined;
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovering(true); };
    const out = (e) => { if (e.target.closest('a,button,[data-cursor]')) setHovering(false); };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    document.addEventListener('pointerout', out);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.removeEventListener('pointerout', out);
    };
  }, [x, y]);

  if (!enabled) return null;
  return <motion.div className={`custom-cursor ${hovering ? 'is-hovering' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true" />;
}
