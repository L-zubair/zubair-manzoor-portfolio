import { useState } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  Send,
  Users
} from "lucide-react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageTransition from "../components/common/PageTransition";
import CTASection from "../components/page/CTASection";
import InfoCard from "../components/page/InfoCard";
import ReferenceHero from "../components/page/ReferenceHero";
import StatsGrid from "../components/page/StatsGrid";
import { profile } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  reason: "",
  message: "",
  website: ""
};

const contactStats = [
  { value: "Open to work", label: "Actively seeking opportunities", icon: BriefcaseBusiness, tone: "green" },
  { value: "24h Response", label: "Usually replies within a day", icon: Clock3, tone: "blue" },
  { value: "Global", label: "Open to connect worldwide", icon: Globe2, tone: "purple" },
  { value: "Professional", label: "Let's build something great", icon: Users, tone: "orange" }
];

export default function Contact() {
  useDocumentTitle("Contact", "Connect with Zubair Manzoor for roles, projects, and collaborations.");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });
    const payload = {
      name: form.name,
      email: form.email,
      subject: form.reason ? `${form.subject} - ${form.reason}` : form.subject,
      message: form.message,
      website: form.website
    };

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send your message.");
      setForm(initialForm);
      setStatus({ type: "success", message: "Thanks. Your message has been sent." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    }
  };

  const contactInfo = [
    { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
    { label: "Phone / WhatsApp", value: profile.phone, icon: Phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "Location", value: "HSR Layout, Bengaluru, Karnataka, India", icon: MapPin },
    { label: "LinkedIn", value: "linkedin.com/in/zubair-manzoor-0a8391247", icon: Linkedin, href: profile.socials.linkedin },
    { label: "GitHub", value: "github.com/L-zubair", icon: Github, href: profile.socials.github }
  ];

  const availability = [
    ["Full-time Roles", "Open to full-time opportunities", BriefcaseBusiness],
    ["Freelance Projects", "Open to selected engagements", MessageSquare],
    ["Collaborations", "Open to meaningful collaborations", Users],
    ["Networking", "Open to professional networking", Network]
  ];

  return (
    <PageTransition>
      <ReferenceHero
        prefix="Contact"
        accent="Me"
        description="Let's connect for opportunities, collaborations, projects, or professional networking. I'm always open to meaningful conversations and impactful work."
        primary={{ label: "Send message", to: "/contact", icon: <Send size={16} /> }}
        secondary={{
          label: "View LinkedIn",
          href: profile.socials.linkedin,
          icon: <Linkedin size={16} />
        }}
        metricLabel="Response time"
        metricValue="24h"
      />

      <section className="pb-7">
        <Container>
          <StatsGrid items={contactStats} />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-5 lg:grid-cols-[.78fr_1fr_.9fr]">
          <div className="space-y-4">
            <InfoCard title="Contact Information" icon={Mail}>
              <div className="divide-y divide-slate-100">
                {contactInfo.map(({ label, value, icon: Icon, href }) => {
                  const content = (
                    <div className="flex gap-3 py-3 first:pt-0 last:pb-0">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky text-blue">
                        <Icon size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-black text-ink">{label}</p>
                        <p className="mt-0.5 break-words text-[10px] leading-4 text-slate-500">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </InfoCard>

            <InfoCard title="Why Reach Out?" icon={Users}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {["Collaboration", "Project Discussion", "Technical Support", "Mentorship / Guidance"].map((item) => (
                  <p key={item} className="rounded-lg bg-mist px-3 py-2 text-xs font-bold text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </InfoCard>
          </div>

          <InfoCard title="Send Me a Message" icon={Send}>
            <form onSubmit={submitForm}>
              <label className="sr-only" aria-hidden="true">
                Website
                <input
                  name="website"
                  value={form.website}
                  onChange={updateField}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" value={form.name} onChange={updateField} placeholder="Your full name" required />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={updateField} placeholder="What is this regarding?" required />
              <label className="mt-4 block">
                <span className="text-xs font-black text-ink">Reason for Contact</span>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={updateField}
                  className="focus-ring mt-2 min-h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-600"
                >
                  <option value="">Select a reason</option>
                  <option>Full-time opportunity</option>
                  <option>Freelance project</option>
                  <option>Collaboration</option>
                  <option>Networking</option>
                </select>
              </label>
              <label className="mt-4 block">
                <span className="text-xs font-black text-ink">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  minLength="20"
                  maxLength="2000"
                  placeholder="Write your message here..."
                  required
                  className="focus-ring mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-ink placeholder:text-slate-400"
                />
              </label>
              <Button type="submit" className="mt-5 min-h-11 w-full rounded-lg" disabled={status.type === "loading"}>
                <Send size={16} /> {status.type === "loading" ? "Sending..." : "Send message"}
              </Button>
              {status.message && (
                <p
                  role="status"
                  className={`mt-3 text-xs font-bold ${
                    status.type === "success" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </InfoCard>

          <div className="space-y-4">
            <InfoCard title="Let's Connect" icon={Globe2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["LinkedIn", "Let's connect", Linkedin, profile.socials.linkedin],
                  ["GitHub", "View my code", Github, profile.socials.github],
                  ["Email", "Send a message", Mail, `mailto:${profile.email}`],
                  ["Phone / WhatsApp", "Let's chat", Phone, `tel:${profile.phone.replace(/\s/g, "")}`]
                ].map(([label, description, Icon, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={String(href).startsWith("http") ? "_blank" : undefined}
                    rel={String(href).startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-xl border border-slate-200 p-4 text-center transition hover:border-blue hover:bg-sky"
                  >
                    <Icon className="mx-auto text-blue" size={23} />
                    <p className="mt-2 text-xs font-black text-ink">{label}</p>
                    <p className="mt-1 text-[10px] text-slate-500">{description}</p>
                  </a>
                ))}
              </div>
            </InfoCard>

            <InfoCard title="Availability / Working With Me" icon={BriefcaseBusiness}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {availability.map(([title, description, Icon]) => (
                  <div key={title} className="flex gap-2 rounded-xl border border-slate-100 p-3">
                    <Icon size={17} className="shrink-0 text-blue" />
                    <div>
                      <p className="text-xs font-black text-ink">{title}</p>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="text-xs font-black text-ink">{label}</span>
      <input
        {...props}
        className="focus-ring mt-2 min-h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-ink placeholder:text-slate-400"
      />
    </label>
  );
}
