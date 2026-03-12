"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { pageHeroImage } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" image={pageHeroImage} />

      <section className="section-soft contact-wrap">
        <div className="container contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2>Write To Us</h2>

            <div className="form-row">
              <label>
                Name <span>*</span>
                <input type="text" />
              </label>
              <label>
                Email <span>*</span>
                <input type="email" />
              </label>
            </div>

            <label>
              Subject <span>*</span>
              <input type="text" />
            </label>

            <label>
              Message <span>*</span>
              <textarea rows="6" />
            </label>

            <div className="captcha-mock">I&apos;m not a robot</div>

            <button type="submit" className="btn btn-solid submit-btn">
              Submit
            </button>
          </motion.form>

          <motion.div
            className="map-box"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <iframe
              title="London Map"
              src="https://maps.google.com/maps?q=London&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
