"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiClock, FiCrosshair, FiUser, FiUsers } from "react-icons/fi";
import { PiBooksBold } from "react-icons/pi";
import SectionTitle from "./SectionTitle";

const iconMap = {
  user: FiUser,
  target: FiCrosshair,
  clock: FiClock,
  one: FiUser,
  group: FiUsers,
  book: PiBooksBold,
};

export default function CardFeatureSection({ title, subtitle, items, className = "section-soft" }) {
  return (
    <section className={`${className} card-feature-section`}>
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} />

        <motion.div
          className="feature-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {items.map((item) => {
            const Icon = iconMap[item.icon] || FiBookOpen;

            return (
              <motion.article
                key={item.title}
                className="feature-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span className="feature-icon">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
