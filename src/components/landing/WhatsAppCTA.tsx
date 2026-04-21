import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

const WhatsAppCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#FAF7F2]">

      {/* 🔥 Background Image (COOL TONE) */}
      <div className="absolute inset-0">
        <img
          src="/img/image_2.jpg"
          alt="donation"
          className="
            w-full h-full object-cover
            scale-105
            opacity-80 md:opacity-150
          "
        />

        {/* 🔥 Dark overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/40" />

        {/* 🔥 Optional gradient focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container flex justify-center">
        <div className="
          max-w-xl text-center 
          bg-white/90 backdrop-blur-md 
          rounded-3xl 
          p-6 md:p-10 
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        ">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            ● INAAYAH SG
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-2xl md:text-4xl font-bold text-[#4A2E1F] leading-tight"
          >
            Every Good Deed Begins
            <br />
            <span className="text-[#C97B50]">
              with a First Step
            </span>
          </motion.h2>

          {/* Subtext */}
          <p className="mt-4 text-[#4A2E1F]/80 text-sm md:text-base">
            Give with purpose. Start your sadaqah journey today  
          </p>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center gap-3
              px-7 py-3 md:px-9 md:py-4
              bg-[#25D366]
              text-white font-semibold
              rounded-full
              shadow-[0_8px_25px_rgba(37,211,102,0.35)]
              hover:shadow-[0_12px_35px_rgba(37,211,102,0.45)]
              transition-all duration-300
            "
          >
            <WhatsAppIcon />
            Start via WhatsApp Now
          </motion.a>

          {/* Trust */}
          <p className="mt-4 text-xs text-gray-500">
            100% secure • No spam • Direct admin support
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;