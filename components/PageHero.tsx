export default function PageHero({
  label,
  titleStart,
  titleAccent,
  subtitle,
}: {
  label: string;
  titleStart: string;
  titleAccent: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-bgSection pt-40 pb-24 px-6 md:px-12 text-center">
      <p className="label">{label}</p>
      <h1 className="font-display font-light text-darkText mt-4 text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
        {titleStart} <span className="italic text-gold">{titleAccent}</span>
      </h1>
      {subtitle && (
        <p className="body-p max-w-2xl mx-auto mt-6">{subtitle}</p>
      )}
    </section>
  );
}
