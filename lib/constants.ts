export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const IMG = {
  heroExterior:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop",
  interior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
  interior2:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop",
  dallas:
    "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=1920&auto=format&fit=crop",
  agent:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  agentTall:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
  listing1:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
  listing2:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  listing3:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  listing4:
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1200&auto=format&fit=crop",
  listing5:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  listing6:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
};

export const LISTINGS = [
  { id: 1, img: IMG.listing1, price: "$[XXX,XXX]", address: "[123 Placeholder Lane]", hood: "[Highland Park]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "for-sale" },
  { id: 2, img: IMG.listing2, price: "$[XXX,XXX]", address: "[456 Sample Street]", hood: "[Preston Hollow]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "for-sale" },
  { id: 3, img: IMG.listing3, price: "$[XXX,XXX]", address: "[789 Example Ave]", hood: "[Lakewood]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "for-sale" },
  { id: 4, img: IMG.listing4, price: "$[XXX,XXX]", address: "[1010 Demo Drive]", hood: "[University Park]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "sold" },
  { id: 5, img: IMG.listing5, price: "$[XXX,XXX]", address: "[222 Test Trail]", hood: "[Bluffview]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "sold" },
  { id: 6, img: IMG.listing6, price: "$[XXX,XXX]", address: "[333 Coming Court]", hood: "[Devonshire]", beds: "[X]", baths: "[X]", sqft: "[X,XXX]", status: "coming-soon" },
];

export const NEIGHBORHOODS = [
  "[Highland Park]", "[Preston Hollow]", "[Lakewood]", "[University Park]",
  "[Bluffview]", "[Devonshire]", "[Bishop Arts]", "[Uptown]",
];

export const TESTIMONIALS = [
  { quote: "[PLACEHOLDER — paste a real client testimonial here. Aim for 2–3 sentences about Nancy's process and outcome.]", name: "[Client Name]", detail: "[Bought in Highland Park, 2025]" },
  { quote: "[PLACEHOLDER — paste a second client testimonial. Sellers love when other sellers vouch for results.]", name: "[Client Name]", detail: "[Sold in Lakewood, 2025]" },
];

export const BUY_STEPS = [
  { n: "01", title: "Discovery Call", body: "We start with a relaxed conversation about your goals, timeline, must-haves, and the lifestyle you're moving toward." },
  { n: "02", title: "Curated Search", body: "I send you only the homes that match what you actually want — not a flood of MLS noise." },
  { n: "03", title: "Tours & Insights", body: "We walk through homes together. I share what I notice, what to ask, and what to walk away from." },
  { n: "04", title: "Offer & Negotiation", body: "When the right one shows up, I write a strong offer and negotiate hard on your behalf." },
  { n: "05", title: "Closing Day", body: "I stay with you through inspection, financing, and closing. The keys are just the beginning." },
];

export const SELL_STEPS = [
  { n: "01", title: "Home Evaluation", body: "I walk your property and assess the market position based on real comparable sales — not a website estimate." },
  { n: "02", title: "Strategic Pricing", body: "We set a price that attracts serious buyers and protects your equity." },
  { n: "03", title: "Preparation & Staging", body: "I guide you on what to fix, freshen, and stage so your home photographs and shows beautifully." },
  { n: "04", title: "Marketing & Exposure", body: "Professional photography, targeted digital campaigns, and my buyer network — your home gets seen." },
  { n: "05", title: "Offers & Negotiation", body: "I review every offer with you and negotiate terms that go beyond just price." },
  { n: "06", title: "Smooth Closing", body: "I coordinate inspections, appraisals, and closing logistics so you can focus on what's next." },
];
