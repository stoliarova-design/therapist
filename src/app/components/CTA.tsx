import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Assets
import imgFooterBg from "figma:asset/7a36e3136520a12b6b46008be27946531c368806.png";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-[120px] px-6 md:px-[60px] text-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback src={imgFooterBg} className="w-full h-full object-cover" alt="Awaken Mind and Heart" />
        <div className="absolute inset-0 bg-[#2a2420]/40" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto space-y-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#c4794a]/12 to-transparent rounded-full -translate-y-1/2" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#f5f0e8] text-5xl md:text-[72px] font-heading font-light leading-tight"
        >
          Ready to <br />
          <span className="italic text-[#d4b896]">Awaken</span> Mind <br />
          and Heart?
        </motion.h2>

        <p className="text-[#f5f0e8]/55 text-base md:text-[15px] font-body font-light leading-relaxed max-w-[500px] mx-auto">
          Take the first step. Book a session, ask a question, or simply reach out — there's no pressure, only welcome.
        </p>

        <div className="pt-6">
          <button className="bg-[#c4794a] text-[#f5f0e8] px-12 py-5 text-[11px] uppercase tracking-[1.98px] font-body hover:bg-[#d4b896] transition-all">
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
};
