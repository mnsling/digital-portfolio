import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const Reflections = () => {
  const insights = [
    {
      category: "Growth",
      title: "Adapting & Finding My Place",
      content: "Taking a gap year meant I didn’t meet my original batch, so coming into face-to-face classes, I felt shy and out of place around younger classmates. Thankfully, they were welcoming, and it didn’t take long for me to find my circle and feel comfortable.",
      lesson: "Community transcends age."
    },
    {
      category: "Adaptability",
      title: "Choosing a Path & Learning to Cope",
      content: "This wasn’t my preferred course, and I initially felt unsure stepping into something new. But with the support of my friends, learning became more manageable, and I slowly adjusted.",
      lesson: "Support systems define success."
    },
    {
      category: "Persistence",
      title: "Facing Failure & Growing From It",
      content: "In my third year, I failed a math subject due to lack of focus and support. It was a tough experience, but during my retake, I worked harder and eventually passed, teaching me the value of persistence.",
      lesson: "Failure is a pivot, not a period."
    },
    {
      category: "Collaboration",
      title: "Challenges, Letting Go & Moving Forward",
      content: "My mini thesis journey was filled with conflict, leading to a group disband. Despite that, we still passed. With a new group for our final thesis, everything improved—we supported each other and successfully defended, showing how important the right people are.",
      lesson: "The right team changes the outcome."
    }
  ];

  return (
    <div className="pt-40 bg-white">
      <Navbar />
      
      <header className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-brand-blue font-black tracking-[0.4em] uppercase text-[10px]">Interior Journey</span>
        <h1 className="text-[10vw] font-black tracking-tighter leading-none mt-4 uppercase italic">
          Reflections<span className="text-slate-200">.</span>
        </h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pb-40">
        {insights.map((item, i) => (
          <div key={i} className="group p-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
            <span className="text-brand-blue font-bold tracking-widest text-[10px] uppercase block mb-6 px-3 py-1 bg-blue-50 w-fit rounded-full">
              {item.category}
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-slate-900 group-hover:text-brand-blue transition-colors">
              {item.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {item.content}
            </p>
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Key Lesson</p>
              <p className="text-xl font-bold italic text-slate-800">"{item.lesson}"</p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Reflections;