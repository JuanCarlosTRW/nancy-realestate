import { cn } from "@/lib/utils";

export default function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return <Tag className={cn("h-display mt-3", className)}>{children}</Tag>;
}
