"use client";

import { motion } from "framer-motion";

export default function PageHero({ title, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(8, 42, 76, 0.86), rgba(8, 42, 76, 0.86)), url(${image})` }}>
      <div className="container page-hero-inner">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
