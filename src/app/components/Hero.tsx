import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[900px] flex items-end pb-[90px] px-6 md:px-[60px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d2b1f] via-[#6b4226] via-[#9e4f2a] to-[#c4794a]" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,36,32,0.7)] to-transparent to-[60%]" />

      {/* Circle Elements */}
      <div className="absolute -top-[120px] -right-[120px] w-[600px] h-[600px] border border-[#f5f0e8]/10 rounded-full" />
      <div className="absolute -top-[50px] -right-[50px] w-[478px] h-[478px] border border-[#f5f0e8]/5 rounded-full" />

      <div className="relative w-full max-w-[1320px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="flex flex-col items-start max-w-[637px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#f5f0e8] text-6xl md:text-[96px] font-heading font-light tracking-[-0.08em] leading-[0.9] md:leading-[1]"
          >
            A Space to <span className="italic text-[#d4b896]">Heal.</span><br />
            Clarity You Can <span className="italic text-[#d4b896]">Feel.</span>
          </motion.h1>

          <div className="flex mt-10 md:mt-20 gap-8 md:gap-0 border-t border-[#f5f0e8]/10 pt-10 w-full">
            {[
              { num: '12+', label: 'Years Practice' },
              { num: '800+', label: 'Clients Supported' },
              { num: '1000+', label: 'Sessions Completed' }
            ].map((stat, i) => (
              <div key={i} className="flex-1 border-l border-[#f5f0e8]/10 first:border-l-0 pl-6 md:px-8 text-center md:text-left">
                <div className="text-[#d4b896] text-[32px] md:text-[42px] font-heading font-light leading-none">{stat.num}</div>
                <div className="text-[#f5f0e8]/45 text-[10px] uppercase tracking-[1.6px] mt-2 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[467px] flex flex-col gap-10">
          <p className="text-[#f5f0e8]/70 text-base md:text-lg font-body font-light leading-relaxed tracking-[0.28px]">
            A private psychotherapy practice to help you navigate life’s challenges with confidence and care. 
            Together, we’ll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace.
          </p>
          <div className="flex flex-wrap gap-10 items-center">
            <button className="bg-[#c4794a] text-[#f5f0e8] px-10 py-[18px] text-[11px] uppercase tracking-[1.98px] font-body hover:bg-[#d4b896] transition-all">
              Book a Session
            </button>
            <button className="text-[#f5f0e8] border-b border-[#f5f0e8]/30 pb-1 text-[11px] uppercase tracking-[1.98px] font-body hover:border-[#f5f0e8] transition-all">
              Therapy Areas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
