import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

/* WhatsApp Icon */
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
  </svg>
);

const WhatsAppCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F1] py-20 md:py-32">
      {/* IMAGE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[45%]">
        <img
          src="/img/image_2.jpg"
          alt="Impact"
          className="h-full w-full object-cover object-center"
        />

        {/* Desktop overlay - kotak foto disamarkan */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(248,245,241,0.98) 0%,
                rgba(248,245,241,0.92) 26%,
                rgba(248,245,241,0.72) 48%,
                rgba(248,245,241,0.28) 74%,
                rgba(248,245,241,0.06) 100%
              )
            `,
          }}
        />

        {/* Soft blur transition desktop */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-24"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            background:
              "linear-gradient(to right, rgba(248,245,241,0.55), transparent)",
          }}
        />

        {/* Mobile overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "radial-gradient(circle at center 38%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.42) 32%, rgba(0,0,0,0.15) 68%, transparent 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="container relative">
        <div className="max-w-2xl text-center md:text-left px-4 md:px-0">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="
              font-heading font-bold
              text-3xl sm:text-4xl md:text-5xl
              leading-tight
              mb-4
              text-white md:text-[#4A2E1F]
              drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]
              md:drop-shadow-none
            "
          >
            Every Good Deed Begins
            <br />
            <span className="text-[#E89B67] md:text-[#C97B50]">
              with a First Step
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="
              mb-8 md:mb-10
              text-base sm:text-lg md:text-xl
              text-white/95 md:text-[#4A2E1F]/95
              drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]
              md:drop-shadow-none
            "
          >
            Give with purpose. Start your sadaqah journey today.
          </motion.p>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              px-6 md:px-8 py-3 md:py-4
              text-sm md:text-base
              rounded-full
              bg-[#25D366]
              text-white
              font-semibold
              shadow-[0_8px_20px_rgba(37,211,102,0.45)]
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)]
            "
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat with Admin on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;