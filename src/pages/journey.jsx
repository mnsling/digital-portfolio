import First from '../assets/1st.png'
import Second from '../assets/2nd.png'
import Third from '../assets/3rd.png'
import Fourth from '../assets/4th.png'

const Journey = () => {
  const steps = [
    {
      year: "2020 — 2023",
      label: "Year 01",
      title: "The Remote Beginning",
      desc: "My first year of college didn’t feel like real college. Everything was online, so instead of meeting people or building connections, it was just me in front of a screen every day. It was all classes, deadlines, and submissions—repetitive and isolating, with little sense of the college experience I expected.",
      img: First
    },
    {
      year: "2023 — 2024",
      label: "Year 02",
      title: "Back to Reality",
      desc: "My second year felt unfamiliar at first after the pandemic, but it was also exciting. I finally met new people, joined activities, and experienced campus life instead of just online classes. Being around others again made everything feel more real—sharing struggles, laughing, and getting through things together.",
      img: Second
    },
    {
      year: "2024 — 2025",
      label: "Year 03",
      title: "Pressure Point",
      desc: "My third year was overwhelming, with heavier subjects, deadlines, projects, and a mini thesis all at once. It was tough—some friendships faded, and failing became real—but it also showed our persistence and determination to keep going despite everything.",
      img: Third
    },
    {
      year: "2025 — 2026",
      label: "Year 04",
      title: "The Final Stretch",
      desc: "My fourth year brought new friendships that helped me grow and see things differently. Learning felt a bit lighter despite the ongoing projects and deadlines, and I’m now focused on finishing this final semester with steady support from my classmates.",
      img: Fourth
    }
  ];

  return (
    <div className="pt-48 pb-40">
      <header className="max-w-7xl mx-auto px-6 mb-40">
        <h1 className="text-[12vw] font-black tracking-tighter leading-none italic uppercase">
          Timeline<span className="text-brand-blue">.</span>
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-80">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-20 items-center group">
            <div className="w-full md:w-3/5 overflow-hidden rounded-[3.5rem] bg-slate-100 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <img src={step.img} alt={step.title} className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="w-full md:w-2/5">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-8xl font-black text-slate-100 group-hover:text-brand-blue/10 transition-colors leading-none">{step.label}</span>
                <div className="h-[2px] flex-grow bg-slate-50"></div>
              </div>
              <p className="text-brand-blue font-black tracking-[0.3em] text-[10px] uppercase mb-4">{step.year}</p>
              <h2 className="text-5xl font-bold tracking-tight mb-6">{step.title}</h2>
              <p className="text-slate-500 text-xl leading-relaxed italic">"{step.desc}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;