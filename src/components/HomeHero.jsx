"use client";

import { motion } from "framer-motion";

// HomeHero component displays the hero section of the homepage with a title, description, and search form. It uses framer-motion for animation effects.

export default function HomeHero({ hero }) {
  return (
    <section className="home-hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container home-hero-inner">
        <motion.div
          className="home-hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <span className="hero-tag">{hero.tag}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>

          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <div className="hero-search-field">
              <input className="hero-search-input" type="text" placeholder="Search here..." aria-label="Search" />
            </div>
            <button type="submit" className="hero-search-btn">
              Search
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
