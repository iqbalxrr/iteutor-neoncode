"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

export function TutorCard({ tutor }) {
  return (
    <article className="tutor-card">
      <div className="tutor-image-wrap">
        <Image src={tutor.image} alt={tutor.name} fill sizes="(max-width: 900px) 100vw, 33vw" />
        <div className="tutor-social-bar" aria-hidden="true">
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
          <FiYoutube />
        </div>
      </div>
      <div className="tutor-body">
        <h3>{tutor.name}</h3>
        <p>{tutor.role}</p>
        <div className="tutor-meta">
          <span>
            <FiCalendar /> {tutor.days}
          </span>
          <strong>{tutor.fee}</strong>
        </div>
      </div>
    </article>
  );
}

export default function TutorsGrid({
  items,
  title,
  subtitle,
  showHeading = true,
  compact = false,
  showViewAll = false,
}) {
  const cards = compact ? items.slice(0, 8) : items;

  return (
    <section className="section-white tutors-grid-wrap">
      <div className="container">
        {showHeading ? <SectionTitle title={title} subtitle={subtitle} /> : null}

        <motion.div
          className="tutor-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {cards.map((tutor) => (
            <motion.div
              key={tutor.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            >
              <TutorCard tutor={tutor} />
            </motion.div>
          ))}
        </motion.div>

        {showViewAll ? (
          <div className="section-action-row">
            <Link className="btn btn-outline" href="/tutors">
              View All Tutors
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
