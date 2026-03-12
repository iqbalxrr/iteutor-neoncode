"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function TestimonialsSection({ items }) {
  return (
    <section className="section-soft testimonials-wrap">
      <div className="container">
        <SectionTitle title="What Our Students Say" subtitle="Inspiring Stories of Academic Success and Growth" />

        <motion.div
          className="testimonial-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {items.map((item) => (
            <motion.article
              key={item.name}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="stars" aria-hidden="true">
                ★★★★★
              </div>
              <p>{item.message}</p>
              <div className="testimonial-user">
                <Image src={item.avatar} alt={item.name} width={40} height={40} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
