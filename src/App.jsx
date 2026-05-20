import { NavLink, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";

const links = [
  ["/", "Services"],
  ["/about", "About Us"],
  ["/case-study", "Case Study"],
  ["/contact", "Contact Us"],
];

export default function App() {
  return (
    <div className="app-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <header className="header glass-card">
        <div className="container navbar">
          <div className="brand-wrap">
            <div className="brand-mark">M</div>
            <div>
              <div className="brand">MARKETOPS</div>
              <small className="brand-sub">Digital Growth Studio</small>
            </div>
          </div>

          <nav className="menu" aria-label="Main navigation">
            {links.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"} className="link">
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container page-enter">
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer glass-card">
        <div className="container footer-wrap">
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#">Policy</a>
            <a href="#">Careers</a>
            <a href="#">Affiliate</a>
            <a href="#">Learning</a>
          </nav>

          <p className="mail">
            Mail ID: <a href="mailto:connect@marketops.in">connect@marketops.in</a> (Business Query)
          </p>
        </div>
      </footer>
    </div>
  );
}
