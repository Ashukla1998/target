import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Info,
  FileText,
  Phone,
  Calendar,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/NewParth_no.png"
              alt="Parth Academy"
              className="h-14 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavItem to="/" label="Home" icon={<Home size={16} />} />
            <NavItem to="/notes" label="Notes" icon={<BookOpen size={16} />} />
            <NavItem to="/about" label="About" icon={<Info size={16} />} />
            <NavItem to="/blog" label="Blog" icon={<FileText size={16} />} />
            <NavItem to="/contact" label="Contact" icon={<Phone size={16} />} />
          </div>

          {/* DESKTOP CTA */}
          <NavLink
            to="/news"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2 text-sm font-semibold text-black hover:brightness-110 transition"
          >
            <Calendar size={16} />
            Career News
          </NavLink>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-sm">
              <MobileItem to="/" label="Home" icon={<Home size={18} />} setOpen={setOpen} />
              <MobileItem to="/notes" label="Notes" icon={<BookOpen size={18} />} setOpen={setOpen} />
              <MobileItem to="/about" label="About" icon={<Info size={18} />} setOpen={setOpen} />
              <MobileItem to="/blog" label="Blog" icon={<FileText size={18} />} setOpen={setOpen} />
              <MobileItem to="/contact" label="Contact" icon={<Phone size={18} />} setOpen={setOpen} />

              <NavLink
                to="/news"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-black"
              >
                <Calendar size={16} />
                Career News
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ================= DESKTOP NAV ITEM ================= */

function NavItem({ to, label, icon }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{ y: -2 }}
          className={`relative flex items-center gap-2 ${
            isActive ? "text-accent" : "text-white/80 hover:text-white"
          }`}
        >
          {icon}
          <span>{label}</span>

          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent"
            />
          )}
        </motion.div>
      )}
    </NavLink>
  );
}

/* ================= MOBILE NAV ITEM ================= */

function MobileItem({ to, label, icon, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 text-white/80 hover:text-white transition"
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
