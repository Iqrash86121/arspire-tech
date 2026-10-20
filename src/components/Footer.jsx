import { COMPANY, CONTACT, NAV } from "../data";

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="wordmark">
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
              <path d="M17 3 L5 31 H11 L17 17 Z" fill="#c89b3c" />
              <path d="M19 9 L29 31 H23 L16 14 Z" fill="#d7ad55" />
            </svg>
            <span>
              AR<b>spire</b> Tech
            </span>
          </div>
          <p className="footer-tag">{COMPANY.tagline}</p>
          <p className="footer-city">{CONTACT.address}</p>
        </div>
        <nav aria-label="Footer">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)}>
              {n.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="container copy">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}
