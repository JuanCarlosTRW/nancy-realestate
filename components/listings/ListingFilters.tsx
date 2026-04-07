"use client";
import { useState } from "react";
import ListingCard from "./ListingCard";
import { LISTINGS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "all", label: "All" },
  { key: "for-sale", label: "For Sale" },
  { key: "sold", label: "Sold" },
  { key: "coming-soon", label: "Coming Soon" },
];

export default function ListingFilters() {
  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? LISTINGS : LISTINGS.filter((l) => l.status === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={cn(
              "btn-base !px-6 !py-3 border",
              active === t.key
                ? "bg-gold text-white border-gold"
                : "border-bordr text-mediumText hover:border-gold hover:text-gold"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((l) => (
          <ListingCard key={l.id} {...l} />
        ))}
      </div>
    </>
  );
}
