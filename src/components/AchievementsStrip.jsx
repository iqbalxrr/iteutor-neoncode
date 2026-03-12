"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function AchievementsStrip({ items }) {
  return (
    <section className="achievement-strip">
      <div className="container">
        <SectionTitle
          title="Our Great Achievement"
          subtitle="Building trust with our impact in education"
          light
        />

        <motion.div
          className="achievement-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              className="achievement-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
