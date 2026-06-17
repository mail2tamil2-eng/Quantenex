import { useInView } from '../hooks/useInView'

const PROBLEMS = [
  {
    icon: '🔓',
    cardClass: 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/25',
    iconClass:  'bg-rose-100 dark:bg-rose-500/20',
    title: 'Identity Threat',
    desc:  'Passwords, OTPs & MFAs are easily compromised through phishing, credential stuffing, and man-in-the-middle attacks.',
  },
  {
    icon: '📱',
    cardClass: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25',
    iconClass:  'bg-amber-100 dark:bg-amber-500/20',
    title: 'Assumed Device Trust',
    desc:  'Traditional systems assume device equals identity. A lost or stolen device instantly becomes a critical security liability.',
  },
]

const DIFFERENTIATORS = [
  'NO Device Assumptions',
  'NO Browser Assumptions',
  'NO Platform Limitations',
  'Deployment Flexibility & Ease',
  'Data Sovereignty: Full privacy & control over identity',
  'Integration Capability: Built to integrate, designed to extend',
  'Enterprise Ready',
]

const BENEFITS = [
  { icon: '💻', title: 'NO Device Assumptions',   desc: 'We authenticate EVERY device — legacy or modern; smartphone, desktop or tablet.', card: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25' },
  { icon: '🌐', title: 'NO Browser Assumptions',  desc: 'Compatible with all browsers, no plug-ins required.',                              card: 'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/25' },
  { icon: '🔄', title: 'NO Platform Limitations', desc: 'Seamless integration across Windows, macOS, Linux, iOS, Android, and web.',        card: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/25' },
  { icon: '🚀', title: 'Deployment Flexibility',  desc: 'Quick setup with cloud, hybrid, or on-premise options.',                          card: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25' },
  { icon: '🔒', title: 'Data Sovereignty',        desc: 'Full privacy and control over identity data — no third-party exposure.',           card: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25' },
  { icon: '🔗', title: 'Integration Capability',  desc: 'Built to integrate with your existing systems and designed to extend for future needs.', card: 'bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/25' },
  { icon: '🏢', title: 'Enterprise Ready',        desc: 'Scales for large organizations with robust security, compliance, and support.',    card: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25' },
  { icon: '⚛️', title: 'Post-Quantum Ready',      desc: 'Uses quantum-resistant cryptography to protect against future threats.',           card: 'bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/25' },
]

export default function WhySection() {
  const [headerRef, headerVis] = useInView()
  const [probRef,   probVis]   = useInView()
  const [whyRef,    whyVis]    = useInView()
  const [gridRef,   gridVis]   = useInView()

  return (
    <section id="about">

      {/* ── Our Mission ─────────────────────────────── */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div
          ref={headerRef}
          className={`text-center max-w-[760px] mx-auto px-6 transition-all duration-700 ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-flex px-4 py-1.5 mb-5 rounded-full text-[12.5px] font-bold uppercase tracking-widest bg-blue-50 dark:bg-brand/10 text-brand border border-blue-200 dark:border-brand/30">
            About Us
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-[17px] leading-relaxed text-slate-500 dark:text-white/55">
            Password-less Authentication That Eliminates Assumptions — building a world where identity is protected by intelligence, not secrets.
          </p>
        </div>
      </div>

      {/* ── The Problem ─────────────────────────────── */}
      <div className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div
          ref={probRef}
          className={`max-w-[1200px] mx-auto px-6 transition-all duration-700 ${probVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <span className="inline-flex px-4 py-1.5 mb-4 rounded-full text-[12.5px] font-bold uppercase tracking-widest bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30">
              The Problem
            </span>
            <h3 className="text-[32px] lg:text-[38px] font-extrabold text-slate-900 dark:text-white mb-3">
              Why Legacy Authentication Fails
            </h3>
            <p className="text-[16px] text-slate-500 dark:text-white/50 max-w-[560px] mx-auto leading-relaxed">
              Traditional authentication methods leave your organization exposed to a growing wave of sophisticated identity attacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {PROBLEMS.map(p => (
              <div key={p.title}
                className={`rounded-2xl p-8 border-2 ${p.cardClass} hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-2xl ${p.iconClass} flex items-center justify-center text-2xl mb-5`}>
                  {p.icon}
                </div>
                <h4 className="text-[20px] font-bold text-slate-900 dark:text-white mb-3">{p.title}</h4>
                <p className="text-[15px] leading-relaxed text-slate-500 dark:text-white/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why QuantaNex ───────────────────────────── */}
      <div id="why-quantanex" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div
          ref={whyRef}
          className={`max-w-[1200px] mx-auto px-6 transition-all duration-700 ${whyVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <span className="inline-flex px-4 py-1.5 mb-4 rounded-full text-[12.5px] font-bold uppercase tracking-widest bg-blue-50 dark:bg-brand/10 text-brand border border-blue-200 dark:border-brand/30">
              Why QuantaNex
            </span>
            <h3 className="text-[32px] lg:text-[38px] font-extrabold text-slate-900 dark:text-white mb-3">
              Authentication Without Assumptions
            </h3>
            <p className="text-[16px] text-slate-500 dark:text-white/55 leading-relaxed max-w-[600px] mx-auto">
              QuantaNex delivers password-less authentication that eliminates assumptions — about devices, browsers, and platforms — built for enterprises that demand security without compromise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-[980px] mx-auto mb-10">
            {DIFFERENTIATORS.map(d => (
              <div key={d}
                className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-xl px-5 py-4 border border-slate-200 dark:border-slate-700 hover:border-brand/40 hover:shadow-sm transition-all duration-200">
                <span className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-[13.5px] font-medium text-slate-700 dark:text-white/80 leading-snug">{d}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="#enterprise"
              className="px-6 py-3 bg-grad-brand text-white font-semibold rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200 text-[14px]">
              See Enterprise Solutions
            </a>
            <a href="#product"
              className="px-6 py-3 text-brand dark:text-brand font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-[14px] border-2 border-brand/30 hover:border-brand bg-white dark:bg-transparent">
              Explore Product
            </a>
          </div>
        </div>
      </div>

      {/* ── Benefits Grid ───────────────────────────── */}
      <div className="py-20 bg-white dark:bg-slate-900">
        <div
          ref={gridRef}
          className={`max-w-[1200px] mx-auto px-6 transition-all duration-700 delay-150 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-[32px] lg:text-[38px] font-extrabold text-slate-900 dark:text-white mb-3">
              What It Means for You
            </h3>
            <p className="text-slate-500 dark:text-white/50 text-[15px] max-w-[540px] mx-auto leading-relaxed">
              Eight reasons why organizations choose QuantaNex to protect their most critical assets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map(b => (
              <div key={b.title}
                className={`rounded-xl p-5 border ${b.card} hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-2xl mb-3">{b.icon}</div>
                <h4 className="text-[13.5px] font-bold text-slate-800 dark:text-white mb-2">{b.title}</h4>
                <p className="text-[13px] leading-relaxed text-slate-500 dark:text-white/45">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
