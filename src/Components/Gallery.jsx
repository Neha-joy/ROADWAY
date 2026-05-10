import { motion } from "framer-motion";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";


export default function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,

  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-roadwayBlack relative overflow-hidden"
    >
      {/* RED GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-roadwayRed/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-roadwayRed font-semibold uppercase tracking-[4px]">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-black italic text-white mt-4">
            Professional Garage Moments
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Explore our premium auto maintenance services,
            luxury garage environment, expert repairs,
            and professional vehicle care.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900"
            >
              <img
                src={image}
                alt="ROADWAY Garage"
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-black">
                  ROADWAY
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  Premium Auto Maintenance
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}