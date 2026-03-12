"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function PartnerStrip({ items }) {
  return (
    <section className="section-white partner-strip">
      <div className="container">
        <SectionTitle title="Join Forces to Provide Top Quality Tutoring" />
        <motion.div
          className="partner-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              className="partner-item"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="partner-dot" style={{ background: item.accent }} />
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
