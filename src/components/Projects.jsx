import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

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

  const Wrapper = p.link ? "a" : "div";
  const wrapProps = p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Reveal delay={0.12 * index}>
      <motion.div
        ref={ref}
        className="project"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      >
        <Wrapper className="project-link" {...wrapProps}>
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
            <h3>
              {p.title}
              {p.link && <Icon name="ArrowUpRight" size={20} className="out" />}
            </h3>
            <p>{p.text}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Wrapper>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Our work"
          title="Projects we are proud of"
          text="A selection of products we have designed and built for real businesses and institutions."
        />
        <div className="cards-3 projects">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
