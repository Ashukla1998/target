import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  FileText,
  Phone,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", path: "/", icon: <Home size={16} /> },
    { name: "Notes", path: "/notes", icon: <FileText size={16} /> },
    { name: "About", path: "/about", icon: <Info size={16} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={16} /> },
  ];

  return (
    <footer className="mt-20 bg-black/80 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP ================= */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-semibold tracking-tight">
              Parth <span className="text-accent">Academy</span>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-xs">
              Building strong academic foundations and confident learners
              from Class 1 to 8.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-2 text-white/70 hover:text-accent transition"
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-white/80">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Porsa, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@parthacademy.in</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ================= SOCIAL ================= */}
        <motion.div
          className="flex justify-center md:justify-end gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <SocialButton icon={<Instagram size={18} />} />
          <SocialButton icon={<Linkedin size={18} />} />
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-light">
            Learn with clarity · Grow with confidence
          </p>
          <p className="text-[11px] mt-4 text-white/20">
            © {new Date().getFullYear()} Parth Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= COMPONENT ================= */

function SocialButton({ icon }) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/5 transition"
    >
      {icon}
    </motion.button>
  );
}
