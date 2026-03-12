"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { pageHeroImage } from "@/lib/content";

export default function RegisterPage() {
  return (
    <>
      <PageHero title="Register" image={pageHeroImage} />

      <section className="section-soft auth-wrap">
        <motion.div
          className="container auth-shell single-auth"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <form className="auth-form full" onSubmit={(event) => event.preventDefault()}>
            <h2>Create Your Account</h2>
            <p>
              Already have an account? <Link href="/login">Login Now</Link>
            </p>

            <div className="form-row">
              <label>
                First Name <span>*</span>
                <input type="text" />
              </label>
              <label>
                Last Name <span>*</span>
                <input type="text" />
              </label>
            </div>

            <label>
              Email Address <span>*</span>
              <input type="email" />
            </label>

            <label>
              Password <span>*</span>
              <input type="password" />
            </label>

            <label>
              Confirm Password <span>*</span>
              <input type="password" />
            </label>

            <label className="check-line remember">
              <input type="checkbox" /> I agree with terms and privacy policy.
            </label>

            <button type="submit" className="btn btn-solid submit-btn">
              Register
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
