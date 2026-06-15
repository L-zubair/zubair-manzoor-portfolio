import { Rocket, Send } from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";

export default function CTASection({
  title = "Let's build something impactful together.",
  description = "I'm always open to new opportunities and exciting collaborations."
}) {
  return (
    <section className="py-6">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-dark via-blue to-sky-500 px-6 py-6 text-white shadow-xl shadow-blue/15 sm:flex sm:items-center sm:justify-between sm:px-10">
          <div className="absolute right-32 top-0 h-full w-40 opacity-20 [background-image:radial-gradient(circle,white_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
          <div className="relative flex items-center gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-blue">
              <Rocket size={26} />
            </span>
            <div>
              <h2 className="text-xl font-black sm:text-2xl">{title}</h2>
              <p className="mt-1 text-sm text-blue-100">{description}</p>
            </div>
          </div>
          <Button
            to="/contact"
            className="relative mt-5 min-h-10 rounded-lg bg-white px-6 text-blue shadow-none hover:bg-sky sm:mt-0"
          >
            <Send size={16} /> Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
