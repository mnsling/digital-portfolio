import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
    <div className="glass px-8 py-3 rounded-full flex gap-8 items-center">
      <Link to="/" className="text-sm font-black tracking-widest text-brand-blue uppercase italic">ADDU.2026</Link>
      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <Link to="/" className="hover:text-brand-blue transition">Home</Link>
        <Link to="/journey" className="hover:text-brand-blue transition">The Journey</Link>
        <Link to="/reflections" className="hover:text-brand-blue transition">Reflections</Link>
      </div>
      <a href="mailto:contact@you.com" className="bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Connect</a>
    </div>
  </nav>
);