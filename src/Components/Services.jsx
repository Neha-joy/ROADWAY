import { motion } from "framer-motion";
import { Wrench, Gauge, Car, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "General Repair",
      text: "Complete mechanical repair, inspection, and maintenance for all car brands.",
    },
    {
      icon: <Gauge className="w-7 h-7" />,
      title: "Oil & Engine Service",
      text: "Engine oil change, filter replacement, tuning, and performance checks.",
    },
    {
      icon: <Car className="w-7 h-7" />,
      title: "AC & Electrical",
      text: "Car AC repair, battery service, wiring, lights, and diagnostic scanning.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Brake & Safety Check",
      text: "Brake pads, suspension, tyres, alignment, and full safety inspection.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-roadwayRed font-semibold">OUR SERVICES</p>

          <h3 className="text-4xl md:text-5xl font-black mt-3 text-roadwayWhite">
            Complete Garage Solutions
          </h3>

          <p className="text-gray-400 mt-4">
            Everything your vehicle needs, handled by skilled technicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl bg-roadwayBlack border border-white/10 p-6 hover:border-roadwayRed transition shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-roadwayRed/15 text-roadwayRed flex items-center justify-center mb-5">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold mb-3 text-roadwayWhite">
                {service.title}
              </h4>

              <p className="text-gray-400 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}