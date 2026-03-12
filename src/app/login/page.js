"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import PageHero from "@/components/PageHero";
import { pageHeroImage } from "@/lib/content";

export default function LoginPage() {
  return (
    <>
      <PageHero title="Login" image={pageHeroImage} />

      <section className="section-soft auth-wrap">
        <motion.div
          className="container auth-shell"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="auth-welcome">
            <div>
              <h2>Welcome Back!</h2>
              <p>
                Access your personalized learning experience. Enter your credentials to continue your educational journey
                with ease.
              </p>
            </div>
          </div>

          <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
            <h2>Log in to Your Account</h2>
            <p>
              Don&apos;t have Account? <Link href="/register">Register Now</Link>
            </p>

            <button type="button" className="social-btn">
              <FcGoogle size={20} /> Log in with Google
            </button>
            <button type="button" className="social-btn">
              <FiFacebook size={18} /> Log in with Facebook
            </button>
            <button type="button" className="social-btn">
              <FiLinkedin size={18} /> Log in with Linkedin
            </button>

            <span className="auth-divider">OR</span>

            <label>
              Username or Email <span>*</span>
              <input type="text" />
            </label>

            <label>
              Password <span>*</span>
              <input type="password" />
            </label>

            <div className="captcha-mock">I&apos;m not a robot</div>

            <div className="auth-helpers">
              <label className="check-line remember">
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className="btn btn-solid submit-btn">
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
