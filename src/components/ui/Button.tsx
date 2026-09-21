import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "green" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-deep-blue shadow-blue hover:shadow-lg",
  secondary:
    "bg-white text-brand-blue border-2 border-brand-blue hover:bg-very-light-blue",
  ghost:
    "text-brand-blue hover:bg-very-light-blue",
  green:
    "bg-brand-green text-white hover:bg-[#126b2e] shadow-green hover:shadow-lg",
  "outline-light":
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-xl gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      icon,
      iconPosition = "right",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span aria-hidden="true">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span aria-hidden="true">{icon}</span>}
      </>
    );

    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
      return (
        <Link href={href} className={classes} {...linkProps}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
