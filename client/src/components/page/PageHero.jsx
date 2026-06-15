import Container from "../common/Container";
import Badge from "../common/Badge";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-mist py-20 sm:py-28">
      <div className="grid-pattern absolute inset-0" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-[-0.05em] text-ink sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </Container>
    </section>
  );
}
