/**
 * A simple ribbon bow. This is the site's one recurring decorative motif —
 * used sparingly (timeline markers, the music toggle, a small accent on the
 * opening button) rather than scattered everywhere.
 */
export default function Bow({
  size = 18,
  color = "var(--color-rose-deep)",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 0.62}
      viewBox="0 0 32 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15 10C15 10 11 3 5.5 3C2.5 3 1 5.4 1 8C1 11.4 4.3 13.6 9 13.2C12 12.9 15 10 15 10Z"
        fill={color}
      />
      <path
        d="M17 10C17 10 21 3 26.5 3C29.5 3 31 5.4 31 8C31 11.4 27.7 13.6 23 13.2C20 12.9 17 10 17 10Z"
        fill={color}
      />
      <circle cx="16" cy="10" r="3.4" fill={color} />
    </svg>
  );
}
