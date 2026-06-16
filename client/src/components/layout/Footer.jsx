import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, profile } from "../../data/portfolio";
import Container from "../common/Container";

const socialLinks = [
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-8 py-9 md:grid-cols-[1fr_1fr_1.1fr_1fr]">
        <div>
          <Link
            to="/"
            className="inline-grid size-14 overflow-hidden rounded-full border-2 border-blue/30 bg-sky shadow-lg shadow-black/20"
            aria-label="Zubair Manzoor home"
          >
            <img
              src={profile.profileImage}
              alt=""
              width="112"
              height="112"
              className="h-full w-full object-cover object-top"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Building scalable digital solutions that create real impact.
          </p>
        </div>

        <div>
          <p className="text-sm font-black">Quick Links</p>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs text-slate-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black">Connect</p>
          <div className="mt-3 space-y-2">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Linkedin size={15} /> linkedin.com/in/zubair-manzoor-0a8391247
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Github size={15} /> github.com/L-zubair
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Mail size={15} /> {profile.email}
            </a>
            <p className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin size={15} /> {profile.location}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-black">Let&apos;s Connect</p>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            Always open to discussing new projects, opportunities, and collaborations.
          </p>
          <div className="mt-4 flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg border border-white/15 text-slate-300 transition hover:border-blue hover:bg-blue hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Zubair Manzoor. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
