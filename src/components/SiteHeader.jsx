"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tutors", href: "/tutors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

function HeaderLink({ href, label, pathname, onClick }) {
  return (
    <Link
      href={href}
      className={`header-link ${isActive(pathname, href) ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo />

        <nav className="header-nav desktop-only" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <HeaderLink key={link.href} {...link} pathname={pathname} />
          ))}
        </nav>

        <div className="header-actions desktop-only">
          <Link href="/login" className="btn btn-solid small-btn">
            Login
          </Link>
          <Link href="/register" className="btn btn-outline small-btn">
            Register
          </Link>
          <button type="button" className="lang-switch" aria-label="Language switch">
            <span className="flag" aria-hidden="true">
              🇺🇸
            </span>
            English
            <FiChevronDown size={14} />
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-btn mobile-only"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu mobile-only"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="container mobile-menu-inner">
              {navLinks.map((link) => (
                <HeaderLink
                  key={link.href}
                  {...link}
                  pathname={pathname}
                  onClick={() => setOpen(false)}
                />
              ))}

              <div className="mobile-action-row">
                <Link href="/login" className="btn btn-solid" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="/register" className="btn btn-outline" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
