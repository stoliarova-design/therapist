import React from 'react';
import { motion } from 'motion/react';

const plans = [
  {
    tag: '01',
    title: 'Individual session',
    price: '₴1,200',
    period: 'Single Session · 50 minutes',
    features: ['One 50-minute session', 'Priority booking', 'Between-session support', 'Progress tracking'],
    popular: false
  },
  {
    tag: '02 most popular',
    title: '1-Month Programme',
    price: '₴11,400',
    period: '12 Sessions · Save 10%',
    features: ['12 × 50-minute sessions', 'Weekly continuity', 'Personalized resource kit', '24/7 priority support'],
    popular: true
  },
  {
    tag: '03',
    title: 'Couple Therapy',
    price: '₴2,400',
    period: 'Single Session · 50 minutes',
    features: ['One 50-minute session', 'Joint assessment', 'Communication exercises', 'Conflict resolution plan'],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#fff5dc] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light">
            Therapy <span className="italic text-[#c4794a]">Plans & Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-10 md:p-[56px] flex flex-col gap-6 relative overflow-hidden ${plan.popular ? 'bg-[#2a2420] text-[#f5f0e8]' : 'bg-[#fff5dc] text-[#2a2420] border border-[#e8ddd0]'}`}
            >
              <div className={`text-[9px] uppercase tracking-[1.98px] font-body ${plan.popular ? 'text-[#8a7968]' : 'text-[#d4b896]'}`}>
                {plan.tag}
              </div>
              <h3 className="text-[28px] font-heading leading-tight max-w-[180px]">{plan.title}</h3>
              <div className="text-[#c4794a] text-[52px] font-heading font-light leading-none">{plan.price}</div>
              <div className="text-[#8a7968] text-[11px] tracking-[1.32px] font-body uppercase">{plan.period}</div>
              
              <ul className="py-8 space-y-4 border-t border-b border-[#e8ddd0]/20">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-4 items-center text-sm font-body font-light">
                    <span className="text-[#c4794a]">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-4 py-5 px-8 text-[11px] uppercase tracking-[1.76px] font-body border transition-all ${plan.popular ? 'bg-[#c4794a] border-[#c4794a] text-[#f5f0e8] hover:bg-[#d4b896]' : 'bg-transparent border-[#2a2420] text-[#2a2420] hover:bg-[#2a2420] hover:text-[#fff5dc]'}`}>
                Book a Session
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
