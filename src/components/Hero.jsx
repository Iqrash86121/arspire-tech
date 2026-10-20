import { motion } from "framer-motion";
import { COMPANY } from "../data";
import Icon from "./Icon";

const words = COMPANY.headline.split(" ");
const GOLD = ["software", "grow."];

const chips = [
  { icon: "Globe", label: "Web", pos: "chip-a" },
  { icon: "Smartphone", label: "Mobile", pos: "chip-b" },
  { icon: "Server", label: "Backend", pos: "chip-c" },
  { icon: "Code2", label: "Clean Code", pos: "chip-d" },
];

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="grid-bg" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="dot" /> Software company · Lahore, Pakistan
          </motion.span>

          <h1 aria-label={COMPANY.headline}>
            {words.map((w, i) => (
              <span className="word-mask" key={i} aria-hidden="true">
                <motion.span
                  className={`word ${GOLD.includes(w.toLowerCase()) ? "gold" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {COMPANY.intro}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <button className="btn btn-gold" onClick={() => go("projects")}>
              View our work <Icon name="ArrowRight" size={18} />
            </button>
            <button className="btn btn-ghost" onClick={() => go("contact")}>
              Start a project
            </button>
          </motion.div>

          <motion.div
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {COMPANY.tagline}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="code-card">
            <div className="code-bar">
              <i /><i /><i />
              <span>arspire.config.js</span>
            </div>
            <pre>
{`const company = {
  name: "ARspire Tech",
  city: "Lahore",
  motto: [
    "Innovate",
    "Build",
    "Grow",
  ],
};

build(company)
  .then(() => "🚀 launched");`}
            </pre>
          </div>

          {chips.map((c, i) => (
            <motion.div
              key={c.label}
              className={`float-chip ${c.pos}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              <Icon name={c.icon} size={18} /> {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        className="scroll-cue"
        onClick={() => go("about")}
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span />
      </motion.button>
    </section>
  );
}
