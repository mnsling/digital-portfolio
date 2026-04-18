export const Footer = () => (
  /* 1. Remove max-width from the footer tag to make it full width */
  <footer id="contact" className="w-full bg-white pt-24 pb-12 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
      
      {/* The Blue Bento Card */}
      <div className="rounded-[3rem] bg-brand-blue p-10 md:p-16 text-white flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl shadow-blue-900/20">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight italic">
            Ready for the <br/> next chapter?
          </h2>
          <p className="mt-4 text-blue-200 text-lg font-medium">
            Let's discuss future opportunities or collaborations.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <a 
            href="mailto:your-email@gmail.com" 
            className="px-10 py-5 bg-white text-brand-blue rounded-full font-bold text-center hover:scale-105 transition-transform shadow-lg"
          >
            Send an Email
          </a>
        </div>
      </div>
      
      {/* Copyright area */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-8 gap-4">
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em]">
          &copy; 2026 • Your Name
        </p>
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em]">
          Ateneo de Davao University • Digital Portfolio
        </p>
      </div>
    </div>
  </footer>
);