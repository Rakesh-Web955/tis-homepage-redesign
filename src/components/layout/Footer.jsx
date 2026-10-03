import { ArrowUpRight } from 'lucide-react';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

import { logoImage } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">

        {/* School Information */}
        <div>
          <img
            className="footer-logo"
            src={logoImage}
            alt="Tulas International School"
          />

          <p className="footer-copy">
            Tulas International School was established in 2012 under the aegis
            of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <span className="footer-label">Explore</span>

          <a href="#about">
            About TIS
          </a>

          <a href="#academics">
            Academics
          </a>

          <a href="#boarding">
            Boarding Life
          </a>

          <a href="#beyond">
            Beyond Academics
          </a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <span className="footer-label">Connect</span>

          <a href="#admission">
            Admission
            <ArrowUpRight size={15} />
          </a>

          <a href="tel:+919837983791">
            +91-9837983791
          </a>

          <a href="mailto:info@tis.edu.in">
            info@tis.edu.in
          </a>

          <span>
            0135-2699444, 0135-2699666
          </span>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <span className="footer-label">Follow</span>

          <div className="socials">

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              data-cursor
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={21} />
            </a>

          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom container">

        <span>
          © 2026 Tulas International School, Dehradun | All Rights Reserved
        </span>

        <a
          href="https://tis.edu.in/"
          data-cursor
          target="_blank"
          rel="noreferrer"
        >
          Official Website
          <ArrowUpRight size={14} />
        </a>

      </div>
    </footer>
  );
}