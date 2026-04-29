import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: `"Working with Solace has been the most transformative thing I have done for myself. I came in completely lost and leave every session feeling more like myself."`,
    author: "A.V., Ground Client"
  },
  {
    text: `"I was sceptical about therapy. Now I cannot imagine navigating life without it. Genuinely changed how I see myself and those around me."`,
    author: "D.K., Rise Client"
  },
  {
    text: `"The Restore programme quite literally saved me after a very difficult period. I felt held, understood, and never once judged. A space unlike any other."`,
    author: "M.H., Restore Client"
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-[#f5f0e8] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light">You are not alone in this</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative border border-[#e8ddd0] p-10 pt-16 flex flex-col gap-8"
            >
              {/* Quote Mark Background */}
              <div className="absolute top-10 left-8 text-[#e8ddd0] text-8xl font-heading leading-none">"</div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#c4794a] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#2a2420] text-xl font-heading italic leading-relaxed relative z-10">
                {t.text}
              </p>

              <div className="text-[#8a7968] text-[10px] tracking-[2px] uppercase font-body">
                — {t.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
