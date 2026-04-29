import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[60px] py-[18px] bg-[#fff5dc]/90 backdrop-blur-md border-b border-[#2a2420]/5">
      <ul className="hidden md:flex gap-10">
        {['About', 'Therapy areas', 'Pricing', 'FAQ'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#8a7968] text-[11px] tracking-[1.98px] uppercase hover:text-[#2a2420] transition-colors font-body font-normal">
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-col items-center">
        <span className="text-[#2a2420] text-[22px] tracking-[2.64px] font-heading font-light">Serenity Mind</span>
      </div>

      <div className="hidden md:block">
        <button className="px-6 py-[11px] border border-[#2a2420] text-[#2a2420] text-[11px] tracking-[1.54px] uppercase font-body font-normal hover:bg-[#2a2420] hover:text-[#fff5dc] transition-all">
          Book a Session
        </button>
      </div>

      <button className="md:hidden text-[#2a2420]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </nav>
  );
};
