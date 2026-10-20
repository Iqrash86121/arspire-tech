import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { OPEN_SOURCE, PROJECT_FILTERS, PROJECTS } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

const STATUS_ICON = { Merged: "GitMerge", "In review": "GitPullRequest", Published: "Package" };

function ProjectCard({ p, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={ref}
        className="project"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      >
        <div className="project-link">
          <div className="project-visual" style={{ background: p.gradient }}>
            <div className="mock">
              <i /><i /><i />
              <div className="mock-lines">
                <b /><b /><b />
              </div>
            </div>
            <motion.span
              className="project-icon"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon name={p.icon} size={44} />
            </motion.span>
          </div>
          <div className="project-body">
            <span className="project-cat">{p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            {p.metrics && (
              <dl className="metrics">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {(p.link || p.github) && (
              <div className="project-actions">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.group === "client" ? "Visit website" : "View live"} <Icon name="ArrowUpRight" size={16} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Icon name="Github" size={16} /> Source code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.group === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Our work"
          title="Projects we are proud of"
          text="Websites and business systems for real clients, plus mobile apps and developer tools we built and open-sourced."
        />

        <Reveal className="filters" y={16}>
          <div role="tablist" aria-label="Filter projects">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={filter === f.id ? "active" : ""}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* key={filter} remounts the grid so the cards animate in again on each tab change */}
        <div key={filter} className="cards-3 projects">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

        <div className="oss">
          <Reveal className="oss-head" y={16}>
            <h3>Open-source contributions</h3>
            <p>Our code is part of libraries that React Native teams around the world use.</p>
          </Reveal>
          <div className="cards-3">
            {OPEN_SOURCE.map((o, i) => (
              <Reveal key={o.repo} delay={0.1 * i}>
                <a className="oss-card" href={o.link} target="_blank" rel="noreferrer">
                  <span className={`oss-status ${o.status === "In review" ? "wip" : ""}`}>
                    <Icon name={STATUS_ICON[o.status]} size={14} /> {o.status}
                  </span>
                  <h4>{o.repo}</h4>
                  <p>{o.text}</p>
                  <span className="oss-more">
                    View on {o.link.includes("npmjs") ? "npm" : "GitHub"} <Icon name="ArrowUpRight" size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
