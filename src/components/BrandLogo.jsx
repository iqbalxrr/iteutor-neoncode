import Link from "next/link";

export default function BrandLogo({ compact = false }) {
  return (
    <Link href="/" className={`brand-logo ${compact ? "compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="dot" />
      </span>
      <span className="brand-text-wrap">
        <span className="brand-text">mentor</span>
        <span className="brand-subtext">Tutor Hiring Platform</span>
      </span>
    </Link>
  );
}
