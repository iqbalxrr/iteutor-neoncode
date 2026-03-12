"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      className={`section-title ${center ? "center" : ""} ${light ? "light" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </motion.div>
  );
}
