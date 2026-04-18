import { Link } from 'react-router-dom';
import Me from '../assets/me.png'

const Home = () => (
  <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-[--animate-reveal]">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* Huge Hero Card */}
      <div className="md:col-span-8 bento-card bg-slate-50 flex flex-col justify-between min-h-[500px]">
        <h1 className="text-7xl md:text-7xl font-black tracking-tighter leading-[0.85] text-slate-900">
          MY COLLEGE <br /> <span className="text-slate-300 italic">JOURNEY.</span>
        </h1>
        <p className="max-w-2xl text-slate-500 text-lg font-light">
          Hi names Mike, a Computer Science student surviving deadlines, debugging life, and making things look clean. From UI/UX design to building systems (and the occasional “bro I don’t even know…” moment), this is my journey of turning chaos into something functional and aesthetic.
        </p>
      </div>

      {/* Graduation Status Card */}
      <div className="md:col-span-4 bento-card relative overflow-hidden text-white flex flex-col justify-center text-center group">
        {/* The Image */}
        <img
          src={Me}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* The Dark Overlay (Crucial for readability) */}
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500" />

        {/* The Content - Must be relative and z-10 to stay on top of the image */}
        <div className="relative z-10">
          <div className="text-6xl mb-4 drop-shadow-2xl">🎓</div>
          <h3 className="text-3xl font-bold italic drop-shadow-md">2026</h3>
          <p className="text-blue-100 opacity-90 uppercase tracking-widest text-xs mt-2 font-bold drop-shadow-sm">
            Class of Ateneo
          </p>
        </div>
      </div>

      {/* Journey Redirect Card */}
      <Link to="/journey" className="md:col-span-12 bento-card bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center group">
        <div>
          <h2 className="text-5xl font-bold tracking-tight">Timeline of Growth</h2>
          <p className="text-slate-400 mt-2 text-lg">Every milestone, reflection, and breakthrough.</p>
        </div>
        <div className="mt-8 md:mt-0 w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-slate-900 text-3xl font-bold">
          →
        </div>
      </Link>
    </div>
  </main>
);

export default Home;