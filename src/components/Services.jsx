import { motion } from "framer-motion";
import { SERVICES } from "../data";
import { SectionHead } from "./Reveal";
import Icon from "./Icon";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Services built around your business"
          text="From the first idea to a live product, we cover everything you need to get online and grow."
        />
        <motion.div
          className="cards-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              className="card service"
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="icon-box big">
                <Icon name={s.icon} size={28} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="card-line" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
