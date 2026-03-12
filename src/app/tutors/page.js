"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { TutorCard } from "@/components/TutorsGrid";
import { pageHeroImage, tutors } from "@/lib/content";

const expFilters = [
  "All",
  "0.5 Years",
  "1 Years",
  "10+ Years",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
];

const dayFilters = ["All", "1 Days/Week", "2 Days/Week", "3 Days/Week", "4 Days/Week", "5 Days/Week", "6 Days/Week"];

export default function TutorsPage() {
  return (
    <>
      <PageHero title="Tutors" image={pageHeroImage} />

      <section className="section-soft tutors-page-wrap">
        <div className="container tutors-layout">
          <aside className="filter-panel">
            <h3>Filter</h3>
            <input type="text" placeholder="search here..." />
            <select>
              <option>All</option>
            </select>
            <select>
              <option>All Subject</option>
            </select>
            <select>
              <option>All Time</option>
            </select>

            <div className="filter-group">
              <h4>Experiences</h4>
              {expFilters.map((filter, idx) => (
                <label key={filter} className="check-line">
                  <input type="checkbox" defaultChecked={idx === 0} />
                  {filter}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Days</h4>
              {dayFilters.map((filter, idx) => (
                <label key={filter} className="check-line">
                  <input type="checkbox" defaultChecked={idx === 0} />
                  {filter}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Filter by Price</h4>
              <input type="range" min="0" max="100" defaultValue="70" />
              <p className="price-label">Price : $0 - $2000</p>
            </div>
          </aside>

          <div className="tutors-main-panel">
            <div className="tutors-topbar">
              <h3>Sort by</h3>
              <select>
                <option>All</option>
                <option>Top Rated</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>
            </div>

            <motion.div
              className="tutor-grid"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {tutors.map((tutor) => (
                <motion.div
                  key={tutor.name}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                >
                  <TutorCard tutor={tutor} />
                </motion.div>
              ))}
            </motion.div>

            <div className="pagination-row">
              <span>Showing 1 to 15 of 226 results</span>
              <div className="pager">
                <button aria-label="Previous page">‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                <button>…</button>
                <button>15</button>
                <button>16</button>
                <button aria-label="Next page">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
