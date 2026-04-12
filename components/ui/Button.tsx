import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "outline-white";

interface Props {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const styles: Record<Variant, string> = {
  gold: "bg-gold text-charcoal border border-gold hover:bg-[#D4B87A] hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(196,169,108,0.25)] hover:shadow-[0_6px_28px_rgba(196,169,108,0.35)]",
  outline:
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white hover:-translate-y-[3px]",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white/10 hover:-translate-y-[3px]",
};

export default function Button({
  href,
  variant = "gold",
  children,
  className,
  type = "button",
  onClick,
}: Props) {
  const cls = cn("btn-base", styles[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
