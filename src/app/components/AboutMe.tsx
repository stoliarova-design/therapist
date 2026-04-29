import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Assets
import imgOlivia from "figma:asset/efad48d3cd475ec016c33581c85e5f0b9dc9bca4.png";

export const AboutMe = () => {
  return (
    <div id="about" className="bg-white">
      {/* Quote Section */}
      <section className="bg-[#2a2420] py-20 px-6 md:px-[60px] relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#c4794a]/15 to-transparent rounded-full -translate-y-1/2" />
        
        <div className="relative z-10 max-w-[900px] mx-auto space-y-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f5f0e8] text-4xl md:text-[56px] font-heading font-light leading-tight"
          >
            "Therapy is about <br />
            <span className="italic text-[#d4b896]">more than managing symptoms.</span><br />
            It's about building a life <br />
            that feels like yours."
          </motion.h2>
          <div className="text-[#d4b896] text-[11px] tracking-[1.76px] uppercase font-body">— Dr. Olena Marchuk, Psychotherapist</div>
          
          <div className="flex justify-center pt-10">
            <div className="w-[406px] h-[332px] overflow-hidden">
               <ImageWithFallback src={imgOlivia} className="w-full h-full object-cover" alt="Dr. Olena Marchuk" />
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-[#fffdfb] py-20 px-6 md:px-[60px] relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-[40px] items-center">
          <div className="w-full md:w-1/2 h-[600px] md:h-[800px]">
            <ImageWithFallback src={imgOlivia} className="w-full h-full object-cover" alt="Dr. Olena Marchuk" />
          </div>
          
          <div className="w-full md:w-1/2 space-y-12 py-10">
            <div className="space-y-6">
              <div className="text-[#8a7968] text-[10px] tracking-[2.2px] uppercase font-body">meet Dr. Olena Marchuk</div>
              <h2 className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light leading-tight">
                I help people find their way back to themselves
              </h2>
              <p className="text-[#2a2420] text-base font-body font-light leading-relaxed">
                With over a decade of clinical experience, I help you navigate life’s challenges with confidence and care. Trained in CBT, EMDR, somatic approaches, and mindfulness-based therapy, sessions are always tailored — never formulaic.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[#8a7968] text-[10px] tracking-[2.2px] uppercase font-body">i specialize in:</div>
              <div className="divide-y divide-[#e8ddd0]">
                {['Cognitive behavioural therapy (CBT)', 'Acceptance and commitment therapy (ACT)', 'Internal family systems (IFS)', 'Dialectical behavioural therapy (DBT)'].map((spec, i) => (
                  <div key={i} className="py-6 flex justify-between items-center group cursor-pointer hover:bg-black/5 transition-all">
                    <span className="text-[#2a2420] text-lg font-heading">{spec}</span>
                    <div className="w-6 h-6 rounded-full border border-[#d4b896] flex items-center justify-center text-[#c4794a] text-lg font-body group-hover:bg-[#c4794a] group-hover:text-white transition-all">+</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with overlapping box */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden px-6">
        <ImageWithFallback src={imgOlivia} className="absolute inset-0 w-full h-full object-cover" alt="Therapy Session" />
        <div className="absolute inset-0 bg-black/20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 bg-white/90 backdrop-blur-sm p-12 md:p-20 text-center max-w-[600px] shadow-2xl border border-white/50"
        >
          <h2 className="text-[#2a2420] text-3xl md:text-4xl font-heading font-light leading-tight mb-8">Book a free 30-min session with Olena Marchuk</h2>
          <button className="bg-[#c4794a] text-[#f5f0e8] px-12 py-5 text-[11px] uppercase tracking-[1.98px] font-body hover:bg-[#2a2420] transition-all">
            Schedule Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};
