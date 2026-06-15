import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../../data/portfolio";
import Container from "../common/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="focus-ring text-3xl font-black tracking-[-0.08em] text-blue"
          aria-label="Zubair Manzoor home"
        >
          ZM
        </Link>

        <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `focus-ring relative flex items-center px-5 text-sm font-bold transition ${
                  isActive ? "text-blue" : "text-ink hover:text-blue"
                } after:absolute after:inset-x-5 after:bottom-0 after:h-0.5 after:bg-blue after:transition ${
                  isActive ? "after:scale-x-100" : "after:scale-x-0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/resume"
          className="focus-ring hidden min-h-10 items-center gap-2 rounded-lg bg-blue px-5 text-sm font-bold text-white shadow-lg shadow-blue/20 transition hover:bg-blue-dark lg:inline-flex"
        >
          <Download size={16} />
          View Resume
        </Link>

        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-lg border border-slate-200 bg-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <Container className="grid gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-bold ${
                      isActive ? "bg-sky text-blue" : "text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
