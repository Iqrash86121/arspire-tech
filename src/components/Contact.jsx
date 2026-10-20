import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data";
import Reveal, { SectionHead } from "./Reveal";
import Icon from "./Icon";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend yet: opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const items = [
    { icon: "MapPin", label: "Visit us", value: CONTACT.address },
    { icon: "Mail", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: "Phone", label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: "Clock", label: "Working hours", value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="section section-tint">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Let's build something great together"
          text={`Tell us about your idea. We are based in ${CONTACT.city}, ${CONTACT.country} and happy to meet or talk online.`}
        />

        <div className="contact-grid">
          <Reveal x={-30} y={0} className="contact-info">
            {items.map((it) => (
              <div className="info-row" key={it.label}>
                <span className="icon-box">
                  <Icon name={it.icon} />
                </span>
                <div>
                  <small>{it.label}</small>
                  {it.href ? <a href={it.href}>{it.value}</a> : <p>{it.value}</p>}
                </div>
              </div>
            ))}
            <div className="map">
              <iframe
                title="ARspire Tech location, Lahore"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
              />
            </div>
          </Reveal>

          <Reveal x={30} y={0}>
            <form className="form" onSubmit={submit}>
              <label>
                Your name
                <input required value={form.name} onChange={set("name")} placeholder="Ayesha Khan" />
              </label>
              <label>
                Email address
                <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
              </label>
              <label>
                Project details
                <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Tell us what you want to build..." />
              </label>
              <motion.button whileTap={{ scale: 0.97 }} className="btn btn-green" type="submit">
                Send message <Icon name="Send" size={18} />
              </motion.button>
              {sent && <p className="sent">Thank you! Your email app should open to send the message.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
