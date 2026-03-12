import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import BrandLogo from "./BrandLogo";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Tutors", href: "/tutors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Tutor Hiring policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandLogo compact />
          <p className="footer-brand-copy">
            Transforming education through innovation, Imentor connects students and mentors for a brighter future.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        <div>
          <h4>Useful Link</h4>
          <ul className="footer-links">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>- {item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Policy Page</h4>
          <ul className="footer-links">
            {policyLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>- {item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <FiPhone />
              <span>+1 719-504-1984</span>
            </li>
            <li>
              <HiOutlineMail />
              <span>demo@imentor.com</span>
            </li>
            <li>
              <FiMapPin />
              <span>7755 Grand Ave, Coconut Grove, Merrick Way, KY 44555</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2026 iMentor All Rights Reserved</div>
    </footer>
  );
}
