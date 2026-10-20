import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { COMPANY, STATS, VALUES } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHead
              center={false}
              eyebrow="About us"
              title="A young company with big ambition"
              text={`${COMPANY.name} was founded in Lahore with one goal: to give businesses in Pakistan and beyond the same quality of software that global companies enjoy. We are a small, focused team that cares about clean design, solid engineering and honest communication.`}
            />
            <div className="values">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={0.1 * i} className="value">
                  <span className="icon-box">
                    <Icon name={v.icon} />
                  </span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i} className="stat">
                <strong>
                  <Counter value={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
