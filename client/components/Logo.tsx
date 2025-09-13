import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: {
    text: "text-xl",
    dot: "w-2 h-2 -top-1 left-[22px]",
  },
  md: {
    text: "text-2xl",
    dot: "w-2.5 h-2.5 -top-1.5 left-[28px]",
  },
  lg: {
    text: "text-4xl",
    dot: "w-3 h-3 -top-2 left-[52px]",
  },
};

export default function Logo({ size = "md", className }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <span className={cn("font-extrabold tracking-tight text-primary leading-none select-none", s.text)}>
        Attnd
      </span>
      <span
        aria-hidden
        className={cn(
          "absolute rounded-full bg-[#FFB100]",
          s.dot,
        )}
      />
    </div>
  );
}
