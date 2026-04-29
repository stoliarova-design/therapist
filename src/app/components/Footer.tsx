import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#2a2420] text-[#f5f0e8]/45 pt-20 pb-10 px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-[#f5f0e8]/10 pb-12 mb-10">
          <div className="space-y-4">
            <div className="text-[#f5f0e8] text-2xl tracking-[2.88px] font-heading font-light">Serenity Mind</div>
            <div className="text-[12px] tracking-[0.72px] font-body uppercase opacity-40">Psychology & Psychotherapy</div>
            <div className="text-[12px] tracking-[0.72px] font-body opacity-40 max-w-[250px]">
              · Ukraine, Lviv, Ivana Franka str., 111/7, 79000
            </div>
            <div className="text-[13px] font-body opacity-45">
               · hello@serenitymindstudio.ua
            </div>
          </div>

          <div className="flex gap-20">
            <div className="space-y-6">
              <div className="text-[#d4b896] text-[10px] tracking-[2.2px] uppercase font-body">Practice</div>
              <ul className="space-y-3">
                {['About', 'Therapy areas', 'Pricing', 'FAQ'].map((item) => (
                  <li key={item} className="text-[13px] font-body hover:text-[#f5f0e8] transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[#d4b896] text-[10px] tracking-[2.2px] uppercase font-body">Socials</div>
              <ul className="space-y-3">
                {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((item) => (
                  <li key={item} className="text-[13px] font-body hover:text-[#f5f0e8] transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-body opacity-30 tracking-[0.66px]">
          <div>© 2026 Serenity Mind. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
