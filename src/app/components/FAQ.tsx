import React from 'react';

const faqs = [
  "Do you offer online sessions?",
  "What is your cancellation policy?",
  "How do I know if therapy is right for me?",
  "How often should I come?"
];

export const FAQ = () => {
  return (
    <section id="faq" className="bg-[#fff5dc] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-[#2a2420] text-3xl md:text-[56px] font-heading font-light leading-tight mb-12">
          Frequently <span className="italic text-[#c4794a]">Asked Questions</span>
        </h2>

        <div className="divide-y divide-[#e8ddd0]">
          {faqs.map((q, i) => (
            <div key={i} className="py-7 flex justify-between items-center group cursor-pointer hover:bg-black/5 transition-all">
              <span className="text-[#2a2420] text-lg md:text-xl font-heading font-light tracking-wide">{q}</span>
              <div className="w-6 h-6 rounded-full border border-[#d4b896] flex items-center justify-center text-[#c4794a] text-lg font-body group-hover:bg-[#c4794a] group-hover:text-white transition-all">+</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
