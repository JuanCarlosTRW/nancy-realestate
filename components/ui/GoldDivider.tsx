export default function GoldDivider({ className = "" }: { className?: string }) {
  return <div className={`gold-divider ${className || "w-24"}`} />;
}
