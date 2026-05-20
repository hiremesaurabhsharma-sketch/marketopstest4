import { NavLink, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";

const links = [
  ["/", "Service"],
  ["/about", "About Us"],
  ["/case-study", "Case Study"],
  ["/contact", "Contact Us"],
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="header">
        <div className="container navbar">
          <div className="brand">MARKETOPS</div>
          <nav className="menu">
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

      <footer>
        <div className="container footer-wrap">
          <nav className="footer-links">
            <a href="#">Policy</a>
            <a href="#">Careers</a>
            <a href="#">Affiliate</a>
            <a href="#">Learning</a>
          </nav>
          <p className="mail">Mail ID: <a href="mailto:connect@marketops.in">connect@marketops.in</a> (Business Query)</p>
        </div>
      </footer>
    </div>
  );
}
