import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const Home = () => (
  <div className="pt-32">
    <Navbar />
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {/* Intro Hero */}
      <div className="md:col-span-3 md:row-span-2 glass-card bento-hover p-12 flex flex-col justify-end bg-gradient-to-br from-white to-slate-50">
        <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-4">AdDU Digital Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
          SHAPING THE <br/><span className="text-slate-300 italic">FUTURE</span> OF SERVICE.
        </h1>
        <p className="max-w-md text-slate-500">A documentation of growth, academic excellence, and Ignatian values through my years in Ateneo.</p>
      </div>

      {/* Quick Profile */}
      <div className="md:col-span-1 md:row-span-2 glass-card bento-hover p-8 flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 bg-slate-100 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden">
          <img src="https://via.placeholder.com/150" alt="me" />
        </div>
        <h2 className="font-bold text-lg leading-tight">Your Name</h2>
        <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-semibold">AB - Interdisciplinary Studies</p>
      </div>

      {/* View Journey CTA */}
      <div className="md:col-span-2 md:row-span-1 glass-card bento-hover bg-brand-blue p-8 flex justify-between items-center group cursor-pointer">
        <h3 className="text-white text-2xl font-bold">Step into my <br/>4-year Timeline</h3>
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-blue transition-all">
          →
        </div>
      </div>
      
      {/* Skill Pill Card */}
      <div className="md:col-span-2 md:row-span-1 glass-card bento-hover p-8">
        <p className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">Core Values</p>
        <div className="flex flex-wrap gap-2">
          {['Magis', 'Cura Personalis', 'Social Justice'].map(v => (
            <span key={v} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase">{v}</span>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;