import { ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-roadwayBlack">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[2rem] bg-neutral-950 border border-white/10 p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-roadwayRed p-6">
              <h4 className="text-4xl font-black text-roadwayWhite">10+</h4>
              <p className="text-sm mt-2 text-roadwayWhite">Years Experience</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
              <h4 className="text-4xl font-black text-roadwayWhite">100%</h4>
              <p className="text-sm mt-2 text-gray-300">Customer Focus</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
              <h4 className="text-4xl font-black text-roadwayWhite">24/7</h4>
              <p className="text-sm mt-2 text-gray-300">Support</p>
            </div>

            <div className="rounded-3xl bg-roadwayRed/20 p-6 border border-roadwayRed/30">
              <h4 className="text-4xl font-black text-roadwayWhite">Fast</h4>
              <p className="text-sm mt-2 text-gray-300">Service Delivery</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-roadwayRed font-semibold">ABOUT ROADWAY</p>

          <h3 className="text-4xl md:text-5xl font-black mt-3 text-roadwayWhite">
            Professional Care for Your Vehicle
          </h3>

          <p className="text-gray-300 mt-6 leading-relaxed text-lg">
            ROADWAY is a reliable and customer-friendly auto maintenance garage
            focused on quality repair, professional diagnostics, and fast
            service delivery.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Experienced mechanics",
              "Modern diagnostic tools",
              "Transparent pricing",
              "Quick and reliable service",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 text-gray-300">
                <ShieldCheck className="w-5 h-5 text-roadwayRed" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}