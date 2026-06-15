import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const styles = {
  primary:
    "bg-blue text-white shadow-[0_14px_30px_rgba(11,92,255,.25)] hover:bg-blue-dark",
  secondary:
    "border border-slate-200 bg-white text-ink hover:border-blue/30 hover:bg-sky",
  ghost: "text-ink hover:bg-slate-100"
};

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  arrow = false,
  ...props
}) {
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-200 ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
