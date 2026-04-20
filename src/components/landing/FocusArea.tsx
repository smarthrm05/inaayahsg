import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const focusAreas = [
  {
    img: "/img/alquran.jpg",
    title: "Quranic Projects",
    desc: "Supporting Quran distribution, memorisation programmes, and access to Islamic education.",
  },
  {
    img: "/img/khatamul.jpg",
    title: "Khatamul Quran",
    desc: "Facilitating Quran completion initiatives that unite communities in worship and reflection.",
  },
  {
    img: "/img/gallery-1.jpg",
    title: "Waqaf Projects",
    desc: "Building sustainable charitable impact through long-term waqaf initiatives.",
  },
  {
    img: "/img/masjib.jpg",
    title: "Madrasah and Masjid Developments",
    desc: "Supporting the growth of Islamic institutions through development and restoration.",
  },
];

const FocusArea: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="focus"
      className="relative py-24 lg:py-32 bg-white"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 font-body text-sm font-medium tracking-wider uppercase"
            style={{
              backgroundColor: "rgba(139,111,71,0.08)",
              color: "#8B6F47",
            }}
          >
            Focus Area
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-5 leading-tight text-[#6B4A34]">
            Our Focus in <br />
            <span className="text-[#D9A07B]">Faith & Community</span>
          </h2>

          {/* Desc */}
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed text-black/70">
            Rooted in faith and driven by compassion, our initiatives are
            dedicated to uplifting communities and creating lasting impact where
            it matters most.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease,
              }}
              className="group overflow-hidden rounded-3xl border border-[#EDE7E0] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: "#F8F5F1" }}
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7 text-center">
                <h3 className="mb-3 font-heading text-xl font-semibold text-[#6B4A34]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-black/70">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FocusArea;