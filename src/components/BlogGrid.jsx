"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-image-wrap">
        <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
      </div>
      <div className="blog-body">
        <p className="blog-date">
          <FiCalendar /> {post.date}
        </p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href="#">Read More</a>
      </div>
    </article>
  );
}

export default function BlogGrid({ items, title, subtitle, showHeading = true, limit, className = "section-soft" }) {
  const posts = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={`${className} blog-grid-wrap`}>
      <div className="container">
        {showHeading ? <SectionTitle title={title} subtitle={subtitle} /> : null}

        <motion.div
          className="blog-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.42, ease: "easeOut" }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {limit ? (
          <div className="section-action-row">
            <Link className="btn btn-outline" href="/blog">
              View All Posts
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
