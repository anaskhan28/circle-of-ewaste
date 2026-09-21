import { cn } from "@/lib/utils";

interface CirkalLogoProps {
  scrolled?: boolean;
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CirkalLogo({
  scrolled = false,
  variant = "default",
  size = "md",
  className,
}: CirkalLogoProps) {
  const isLight = variant === "light";

  const textColor = isLight
    ? "#ffffff"
    : scrolled
    ? "#1264C4"
    : "#ffffff";

  const subTextColor = isLight ? "#9ca3af" : scrolled ? "#4b5563" : "#e2e8f0";

  const sizes = {
    sm: { height: 28, fontSize: 14, subFontSize: 8 },
    md: { height: 36, fontSize: 18, subFontSize: 10 },
    lg: { height: 48, fontSize: 24, subFontSize: 12 },
  };

  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo mark — C with globe */}
      <svg
        width={s.height}
        height={s.height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer circular arrow arc (the C) */}
        <path
          d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.51 0 10.5-2.234 14.142-5.858"
          stroke="#1264C4"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrow head on the arc */}
        <path
          d="M34 14l4 4.5-5.5 1"
          stroke="#1264C4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Globe interior - meridians */}
        <circle cx="24" cy="24" r="10" fill="#F1F9F3" stroke="#168A3A" strokeWidth="1.5" />
        <ellipse cx="24" cy="24" rx="4.5" ry="10" stroke="#168A3A" strokeWidth="1.2" fill="none" />
        <line x1="14" y1="24" x2="34" y2="24" stroke="#168A3A" strokeWidth="1.2" />
        <line x1="15.5" y1="19.5" x2="32.5" y2="19.5" stroke="#168A3A" strokeWidth="1" />
        <line x1="15.5" y1="28.5" x2="32.5" y2="28.5" stroke="#168A3A" strokeWidth="1" />
        {/* Leaf accent */}
        <path
          d="M30.5 17.5 C33 14 37 13 37 13 C37 13 36.5 17.5 34 20 C31.5 22.5 28.5 22 28.5 22 C28.5 22 28 21 30.5 17.5Z"
          fill="#62B92E"
        />
        <path d="M28.5 22 C30 20 32 17 37 13" stroke="#168A3A" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>

      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0">
          {/* C is represented by the emblem above, so we write "IRKAL" */}
          <span
            style={{
              fontSize: s.fontSize,
              fontWeight: 800,
              color: textColor,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              fontFamily: "var(--font-plus-jakarta)",
              transition: "color 0.3s",
            }}
          >
            C
          </span>
          <span
            style={{
              fontSize: s.fontSize,
              fontWeight: 700,
              color: textColor,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              fontFamily: "var(--font-plus-jakarta)",
              transition: "color 0.3s",
            }}
          >
            IRKAL
          </span>
        </div>
        <span
          style={{
            fontSize: s.subFontSize,
            fontWeight: 500,
            color: subTextColor,
            letterSpacing: "0.08em",
            lineHeight: 1,
            marginTop: 2,
            fontFamily: "var(--font-plus-jakarta)",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          of e‑waste
        </span>
      </div>
    </div>
  );
}
