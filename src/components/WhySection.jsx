import { useInView } from '../hooks/useInView'

const PROBLEMS = [
  {
    icon: '🔓',
    title: 'Identity Threat',
    desc: 'Passwords, OTPs & MFAs are easily compromised through phishing, credential stuffing, and man-in-the-middle attacks.',
  },
  {
    icon: '📱',
    title: 'Assumed Device Trust',
    desc: 'Traditional systems assume device equals identity. A lost or stolen device instantly becomes a critical security liability.',
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
  { title: 'NO Device Assumptions',      desc: 'We authenticate EVERY device — legacy or modern; smartphone, desktop or tablet.' },
  { title: 'NO Browser Assumptions',     desc: 'Compatible with all browsers, no plug-ins required.' },
  { title: 'NO Platform Limitations',    desc: 'Seamless integration across Windows, macOS, Linux, iOS, Android, and web.' },
  { title: 'Deployment Flexibility',     desc: 'Quick setup with cloud, hybrid, or on-premise options.' },
  { title: 'Data Sovereignty',           desc: 'Full privacy and control over identity data — no third-party exposure.' },
  { title: 'Integration Capability',     desc: 'Built to integrate with your existing systems and designed to extend for future needs.' },
  { title: 'Enterprise Ready',           desc: 'Scales for large organizations with robust security, compliance, and support.' },
  { title: 'Post-Quantum Ready',         desc: 'Uses quantum-resistant cryptography to protect against future threats.' },
]

export default function WhySection() {
  const [headerRef, headerVis] = useInView()
  const [probRef,   probVis]   = useInView()
  const [gridRef,   gridVis]   = useInView()

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#050D1E' }}>
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,110,227,0.14) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,214,245,0.09) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-flex px-4 py-1.5 mb-5 rounded-full text-[12.5px] font-bold uppercase tracking-widest"
            style={{ background: 'rgba(6,214,245,0.1)', color: '#06D6F5', border: '1px solid rgba(6,214,245,0.2)' }}>
            About Us
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-[17px] leading-relaxed max-w-[620px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Password-less Authentication That Eliminates Assumptions — building a world where identity is protected by intelligence, not secrets.
          </p>
        </div>

        {/* Problems + Why QuantaNex */}
        <div
          ref={probRef}
          className={`grid lg:grid-cols-2 gap-14 mb-16 transition-all duration-700 ${probVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* The Problems */}
          <div>
            <h3 className="text-[22px] font-bold text-white mb-6">The Problems</h3>
            <div className="flex flex-col gap-4">
              {PROBLEMS.map(p => (
                <div key={p.title} className="rounded-xl p-6"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{p.icon}</span>
                    <div>
                      <h4 className="text-white font-bold text-[16px] mb-1.5">{p.title}</h4>
                      <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why QuantaNex */}
          <div>
            <h3 className="text-[22px] font-bold text-white mb-6">Why QuantaNex</h3>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              QuantaNex delivers password-less authentication that eliminates assumptions — about devices, browsers, and platforms — built for enterprises that demand security without compromise.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {DIFFERENTIATORS.map(d => (
                <div key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center text-[10px] text-brand font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[14.5px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{d}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#enterprise"
                className="px-6 py-3 bg-grad-brand text-white font-semibold rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200 text-[14px]">
                See Enterprise Solutions
              </a>
              <a href="#product"
                className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-[14px]"
                style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)' }}>
                Explore Product
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div
          ref={gridRef}
          className={`transition-all duration-700 delay-150 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h3 className="text-[22px] font-bold text-white mb-8 text-center">What It Means for You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map(b => (
              <div
                key={b.title}
                className="rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(29,110,227,0.08)', border: '1px solid rgba(29,110,227,0.22)' }}
              >
                <h4 className="text-[13.5px] font-bold text-white mb-2">{b.title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
