import { motion } from "framer-motion";
import { Star } from "lucide-react";

import logo from "../assets/roadway-logo.png";
import car from "../assets/car.png";
import bg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 bg-black"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 scale-110"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* RED GLOW */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-roadwayRed/20 blur-3xl rounded-full" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-10 min-h-[90vh]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/30 bg-white/5 text-white mb-8 backdrop-blur">

            <Star className="w-4 h-4 text-roadwayRed" />

            <span className="text-sm tracking-wide">
              Trusted Auto Maintenance Service
            </span>

          </div>

          {/* LOGO */}
          <div className="mb-8">

            <h2 className="text-5xl md:text-7xl font-black italic leading-tight text-white uppercase">
              Professional
            </h2>

            <h2 className="text-5xl md:text-7xl font-black italic leading-tight text-roadwayRed uppercase">
              Garage &
            </h2>

            <h2 className="text-5xl md:text-7xl font-black italic leading-tight text-white uppercase">
              Car Service
            </h2>

          </div>



          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            ROADWAY provides premium auto maintenance,
            diagnostics, detailing, and repair services with
            professional care, expert technicians, and modern
            equipment for every vehicle.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="px-10 py-4 rounded-2xl bg-roadwayRed hover:bg-red-700 text-white font-bold text-lg shadow-2xl shadow-red-500/30 transition"
            >
              Book Service
            </a>

            <a
              href="#gallery"
              className="px-10 py-4 rounded-2xl border border-white/20 hover:border-roadwayRed text-white font-bold text-lg bg-white/5 hover:bg-white/10 transition"
            >
              Explore Services
            </a>

          </div>

          {/* STATS */}
          {/* STATS
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">

            <div>
              <h3 className="text-4xl font-black text-roadwayRed">
                New
              </h3>

              <p className="text-gray-400 mt-2">
                Modern Garage
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-roadwayRed">
                100%
              </h3>

              <p className="text-gray-400 mt-2">
                Quality Focus
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-roadwayRed">
                Fast
              </h3>

              <p className="text-gray-400 mt-2">
                Service Support
              </p>
            </div>

          </div> */}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex items-center justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[600px] h-[600px] bg-roadwayRed/20 blur-3xl rounded-full" />

          {/* CAR IMAGE */}
          <img
            src={car}
            alt="Sports Car"
            className="relative z-10 w-[140%] max-w-none object-contain animate-[float_4s_ease-in-out_infinite]"
          />

        </motion.div>
      </div>
    </section>
  );
}