import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { IMG } from "@/lib/constants";

export default function MeetAgent() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <PlaceholderImage
          src={IMG.agentTall}
          alt="Nancy"
          className="aspect-[4/5] w-full"
        />
        <div>
          <p className="label">Meet Your Agent</p>
          <h2 className="h-display mt-3">
            Real Estate, <span className="italic text-gold">Done Personally</span>
          </h2>
          <GoldDivider className="mt-6" />
          <p className="body-p mt-8">
            [PLACEHOLDER — short intro paragraph about Nancy. Where she's from,
            why she got into real estate, what makes her different.]
          </p>
          <p className="body-p mt-4">
            [PLACEHOLDER — second paragraph about her approach and the kind of
            clients she loves working with.]
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-bordr">
            {[
              { n: "[XX]+", l: "Homes Sold" },
              { n: "[XX]", l: "Years Experience" },
              { n: "[X]M+", l: "In Sales Volume" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-4xl text-gold">{s.n}</p>
                <p className="text-[10px] tracking-label uppercase font-semibold text-lightText mt-2">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/about" variant="outline">
              Learn More About Nancy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
