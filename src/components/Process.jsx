import { motion } from "framer-motion";
import { PROCESS, TECH } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

export default function Process() {
  return (
    <section id="process" className="section dark">
      <div className="blob blob-3" />
      <div className="container">
        <SectionHead
          eyebrow="How we work"
          title="A simple process, clear results"
          text="No surprises. You always know where your project stands and what comes next."
        />

        <div className="steps">
          <motion.span
            className="steps-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {PROCESS.map((s, i) => (
            <Reveal key={s.title} delay={0.15 * i} className="step">
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="icon-box gold">
                <Icon name={s.icon} size={26} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="tech">
          <h4>Technologies we love</h4>
          <div className="marquee" aria-label="Technologies">
            <div className="marquee-track">
              {[...TECH, ...TECH].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
