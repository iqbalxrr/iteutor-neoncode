"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSplit({ image }) {
  return (
    <section className="section-soft about-split-wrap">
      <div className="container about-split">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2>Transforming Education with Expert Tutors</h2>
          <p className="lead">
            Auto-generate catchy original and high-converting copies in popular tones. From blogs to emails to ad copies
            in seconds.
          </p>
          <p>
            At iMentor, we believe every student deserves access to quality education. Our mission is to connect students
            with experienced and dedicated tutors who can help them achieve their academic goals. Whether you need help
            with a specific subject, preparing for an exam, or improving your learning skills, we have the right tutor
            for you.
          </p>
          <a href="#" className="btn btn-solid">
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image src={image} alt="Tutoring session" fill sizes="(max-width: 992px) 100vw, 46vw" />
          <div className="about-floating-card">
            <span>OUR COMMITMENT TO EXCELLENCE</span>
            <h3>Why Choose Us?</h3>
            <p>Personalized Learning, Anytime, Anywhere</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
