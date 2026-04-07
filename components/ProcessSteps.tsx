export default function ProcessSteps({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x max-w-4xl">
        {steps.map((s) => (
          <div
            key={s.n}
            className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 border-b border-bordr last:border-0"
          >
            <p className="font-display text-5xl md:text-6xl text-goldLight leading-none">
              {s.n}
            </p>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-darkText">
                {s.title}
              </h3>
              <p className="body-p mt-4">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
