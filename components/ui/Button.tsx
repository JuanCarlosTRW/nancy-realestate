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
  gold: "bg-gold text-white border border-gold hover:bg-goldDark hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(168,137,63,0.25)]",
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
