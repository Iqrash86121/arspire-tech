import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS, PROJECT_FILTERS, OPEN_SOURCE } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

function ProjectCard({ p }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const isNpm = p.link && p.link.includes("npmjs.com");

  return (
    <motion.div
      layout
      className="project-wrap"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        ref={ref}
        className="project"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      >
        <div className={`project-visual ${p.video || p.image ? "has-media" : ""}`} style={{ background: p.gradient }}>
          {p.video ? (
            <video
              className="project-media"
              src={p.video}
              poster={p.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : p.image ? (
            <img className="project-media" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
          ) : (
            <>
              <div className="mock">
                <i /><i /><i />
                <div className="mock-lines"><b /><b /><b /></div>
              </div>
              <motion.span
                className="project-icon"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon name={p.icon} size={44} />
              </motion.span>
            </>
          )}
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
            <div className="proj-links">
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer">
                  <Icon name={isNpm ? "Package" : "ExternalLink"} size={16} />
                  {isNpm ? "View on npm" : "Visit website"}
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
      </motion.article>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.group === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Our work"
          title="Projects we are proud of"
          text="Client websites and business systems, mobile apps, and developer tools we have designed and built."
        />

        <Reveal className="filters" role="tablist" aria-label="Filter projects">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "active" : ""}
              onClick={() => setFilter(f.id)}
            >
              {filter === f.id && <motion.span layoutId="filter-pill" className="filter-pill" />}
              <span>{f.label}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="cards-3 projects">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="oss">
          <Reveal>
            <h3 className="oss-title">
              <Icon name="GitPullRequest" size={24} /> Open source contributions
            </h3>
            <p className="oss-sub">Pull requests to libraries other React Native teams depend on.</p>
          </Reveal>
          <div className="oss-grid">
            {OPEN_SOURCE.map((o, i) => (
              <Reveal key={o.repo} delay={0.1 * i}>
                <a className="oss-card" href={o.link} target="_blank" rel="noreferrer">
                  <span className={`status ${o.status.toLowerCase().replace(/\s/g, "-")}`}>
                    <Icon name={o.status === "Merged" ? "GitMerge" : "GitPullRequest"} size={14} />
                    {o.status}
                  </span>
                  <h4>{o.repo}</h4>
                  <p>{o.text}</p>
                  <Icon name="ArrowUpRight" size={20} className="oss-out" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
