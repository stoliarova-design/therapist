import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Assets
import imgIndividual from "figma:asset/94a2ef26d11ad32be6b6bd339b1621a24181a777.png";
import imgCouples from "figma:asset/4e5ee6cea8865183bc876a06ee3a339840538157.png";
import imgHolistic from "figma:asset/d214f079f976211ae96f44cff279ef2f751d8d3d.png";
import imgMindfulness from "figma:asset/ad82cfbec924abf911c38d59381b60a74b0f79d3.png";

export const Approaches = () => {
  return (
    <section id="therapy-areas" className="bg-[#fff5dc] py-20 md:py-[120px] px-6 md:px-[60px]">
      {/* Problems Section */}
      <div className="max-w-[1320px] mx-auto mb-20 md:mb-[70px]">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light leading-tight max-w-[706px]"
          >
            When life feels heavy, you don't have to carry it alone.
          </motion.h2>
          <p className="text-[#2a2420] text-base font-heading max-w-[399px] mt-10">
            The modern world often leaves us feeling disconnected, overwhelmed, or stuck in cycles that no longer serve us. Recognizing the need for support is the first act of healing.
          </p>
        </div>

        {/* Animation Circle Placeholder/Replication */}
        <div className="relative h-[300px] flex justify-center items-center mb-20">
          <div className="relative w-[270px] h-[270px]">
            <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 270 270">
              <circle cx="135" cy="135" r="134.5" stroke="#C4794A" fill="none" />
              <path d="M0 135 A 135 135 0 0 1 270 135" fill="#C4794A" opacity="0.1" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-heading text-[#f5f0e8] bg-[#C4794A] rounded-full overflow-hidden p-8">
               <div className="space-y-4">
                  <div className="text-xl">Anxiety</div>
                  <div className="text-xl">Depression</div>
                  <div className="text-xl">Grief & Loss</div>
                  <div className="text-xl">Burnout</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Therapy Areas Grid */}
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light leading-tight">
            We <span className="italic text-[#c4794a]">here to help</span> you to move forward with confidence
          </h2>
          <p className="text-[#8a7968] text-base font-body font-light mt-6">
            Every path is different. These are the ways we help people to make lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TherapyCard 
            image={imgIndividual}
            title="INDIVIDUAL"
            subtitle="Therapy"
            tag="One-on-one Guidance"
            desc="Personalized sessions focused on self-awareness, anxiety management, and personal growth."
            btnText="I need support"
          />
          <TherapyCard 
            image={imgCouples}
            title="COUPLES"
            subtitle="Therapy"
            tag="Connection & Communication"
            desc="Supporting couples and families in building resilience, understanding, and deeper intimacy."
            btnText="Get support"
          />
          <TherapyCard 
            image={imgHolistic}
            title="HOLISTIC"
            subtitle="SESSIONS"
            tag="Mind-Body Integration"
            desc="Combining cognitive techniques with mindfulness and somatic awareness for complete well-being."
            btnText="start your journey"
          />
          <TherapyCard 
            image={imgMindfulness}
            title="MINDFULLNESS &"
            subtitle="STRESS SUPPORT"
            tag="mindfulness-based sessions"
            desc="We draw on proven practices like guided meditation, mind exercises, and mindful reflection."
            btnText="Calm your mind now"
          />
        </div>
      </div>
    </section>
  );
};

const TherapyCard = ({ image, title, subtitle, tag, desc, btnText }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative flex flex-col h-[656px] group overflow-hidden bg-[#2a2420]"
  >
    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80">
      <ImageWithFallback src={image} className="w-full h-full object-cover blur-[1px] group-hover:blur-0 transition-all duration-700" alt={title} />
    </div>
    
    <div className="relative z-10 p-6 md:pt-10 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-[#f5f0e8] text-2xl font-heading tracking-wider">
          {title}<br />{subtitle}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="text-[#f5f0e8] text-[10px] uppercase tracking-[1px] font-body">{tag}</div>
        <p className="text-[#f5f0e8] text-sm font-body font-light leading-relaxed">
          {desc}
        </p>
        <button className="flex items-center gap-4 group/btn">
          <div className="w-1 h-1 bg-[#f5f0e8] rounded-full" />
          <span className="text-[#f5f0e8] text-[11px] uppercase tracking-[1.98px] border-b border-[#f5f0e8]/30 group-hover/btn:border-[#f5f0e8] transition-all pb-1 font-body">
            {btnText}
          </span>
        </button>
      </div>
    </div>
  </motion.div>
);
