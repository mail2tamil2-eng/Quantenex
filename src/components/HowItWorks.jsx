import { useInView } from '../hooks/useInView'

const STEPS = [
  { n: '1', tag: 'Select',    title: 'Choose Your SDK',  desc: 'Pick the SDK that matches your platform — iOS, Android, JavaScript, Python, Node.js, or .NET. All SDKs share a unified API surface for consistency.' },
  { n: '2', tag: 'Integrate', title: 'Review the Docs',  desc: 'Our comprehensive documentation, API reference, and quickstart templates get you authenticating in under 30 minutes with step-by-step guidance.' },
  { n: '3', tag: 'Launch',    title: 'Deploy & Go Live', desc: 'Test in our sandbox environment with synthetic behavioral data, then flip the switch to production. Cloud, on-premise, or hybrid — your choice.' },
]

export default function HowItWorks() {
  const [ref, visible] = useInView()

  return (
    <section id="sdk-start" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1200px] mx-auto px-6">

        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-brand/10 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-200 dark:border-brand/30">
            Getting Started
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Integrate in <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-[17.5px] text-slate-500 dark:text-slate-400 mt-4 max-w-[460px] mx-auto leading-relaxed">
            Our SDK is designed for developers. Get up and running in hours, not months.
          </p>
        </div>

        <div className="relative max-w-[900px] mx-auto grid md:grid-cols-3 gap-10">
          <div className="absolute hidden md:block top-10 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-brand to-brand-cyan" />

          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-grad-brand flex items-center justify-center text-white text-3xl font-black shadow-blue mb-6">
                {s.n}
                <div className="absolute inset-[-5px] rounded-full border-2 border-brand/20" />
              </div>

              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-widest rounded-full mb-3">
                {s.tag}
              </span>
              <h3 className="text-[19px] font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#sdk" className="inline-flex items-center gap-2 px-8 py-4 bg-grad-brand text-white font-semibold text-[15px] rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
            View SDK Documentation →
          </a>
        </div>
      </div>
    </section>
  )
}
