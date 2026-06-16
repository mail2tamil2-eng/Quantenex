import { useInView } from '../hooks/useInView'

const METRICS = [
  { num: '73%',  label: 'Reduction in IT support tickets' },
  { num: '15',   label: 'Legacy systems unified into one' },
  { num: '0',    label: 'Security breaches post-deployment' },
  { num: '40K+', label: 'Users authenticated daily' },
]

export default function CaseStudy() {
  const [leftRef, leftVis]   = useInView()
  const [rightRef, rightVis] = useInView()

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#050D1E' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(29,110,227,0.16) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Quote */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3.5 py-1 bg-emerald-500/12 text-emerald-400 text-[12px] font-bold uppercase tracking-widest rounded-full mb-6 border border-emerald-500/25">
            Customer Story
          </span>
          <blockquote className="text-[21px] leading-relaxed font-medium italic mb-7 pl-6 border-l-4 border-brand"
            style={{ color:'rgba(255,255,255,0.88)' }}>
            "QuantaNex unified authentication across fifteen disconnected systems into one seamless, passwordless experience — reducing our IT support tickets by 73% and eliminating our most common attack vector overnight."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-grad-brand flex items-center justify-center text-white text-[17px] font-extrabold flex-shrink-0">
              VP
            </div>
            <div>
              <div className="text-white font-bold text-[15px]">VP of Information Security</div>
              <div className="text-[13px] mt-0.5" style={{ color:'rgba(255,255,255,0.4)' }}>
                Leading Indian Educational Institution — 40,000+ users
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div ref={rightRef} className={`transition-all duration-700 delay-150 ${rightVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {METRICS.map(m => (
              <div
                key={m.num}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-[34px] font-black leading-none mb-2 gradient-text">{m.num}</div>
                <div className="text-[13px] leading-relaxed" style={{ color:'rgba(255,255,255,0.45)' }}>{m.label}</div>
              </div>
            ))}
          </div>
          <a href="#"
            className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background:'rgba(255,255,255,0.08)', border:'2px solid rgba(255,255,255,0.18)' }}>
            Read the Full Case Study →
          </a>
        </div>

      </div>
    </section>
  )
}
