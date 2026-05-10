import {
  ShieldCheck,
  Wrench,
  Gauge,
  Clock,
  Star,
  Car,
} from "lucide-react";

import aboutBg from "../assets/about-bg.jpg";

export default function About() {
  const qualities = [
    "Experienced and skilled technicians",
    "Advanced diagnostic technology",
    "Honest and transparent pricing",
    "Fast service with reliable support",
  ];


  const features = [
    { icon: <Wrench />, title: "Expert Repair" },
    { icon: <Gauge />, title: "Full Diagnostics" },
    { icon: <Clock />, title: "Quick Delivery" },
    { icon: <Car />, title: "All Car Brands" },
  ];

  return (
    <section id="about" className="relative py-24 bg-roadwayBlack overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Red Glow */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-roadwayRed/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-roadwayRed/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-roadwayRed font-semibold tracking-widest uppercase">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black italic text-roadwayWhite mt-4 leading-tight">
            Professional Garage & Premium Car Care
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            ROADWAY Auto Maintenance delivers reliable repair, diagnostics,
            detailing, and complete vehicle care with expert technicians,
            modern tools, and customer-focused service.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Card */}
          <div className="rounded-[2rem] bg-neutral-950/80 backdrop-blur border border-white/10 p-8 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-roadwayRed transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 text-roadwayRed flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Quality service designed for performance, safety, and comfort.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-roadwayRed/30 bg-white/5 text-white mb-6">
              <Star className="w-4 h-4 text-roadwayRed" />
              Trusted Automotive Service
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Built on Quality, Trust, and Professional Workmanship
            </h3>

            <p className="text-gray-300 mt-6 leading-relaxed text-lg">
              We understand that every customer wants a garage they can trust.
              That is why ROADWAY focuses on careful inspection, clear service
              advice, fair pricing, and dependable repair quality.
            </p>

            <div className="mt-8 space-y-4">
              {qualities.map((point) => (
                <div key={point} className="flex items-center gap-3 text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-roadwayRed" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-9 px-8 py-4 rounded-2xl bg-roadwayRed hover:bg-red-700 text-white font-bold shadow-lg shadow-red-500/25 transition"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}