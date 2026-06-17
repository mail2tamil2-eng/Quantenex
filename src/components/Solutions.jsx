import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const TABS = [
  {
    id: 'solution',
    label: 'The Solution',
    visual: { icon: '🛡️', subtitle: 'Continuous Identity Assurance' },
    title: 'The Future of Identity Assurance',
    desc: 'Traditional authentication validates identity once and assumes trust. QuantaNex delivers continuous identity assurance through the convergence of Cognitive AI, Hardware Root of Trust, and Post-Quantum Cryptography — maintaining flexibility, compliance, and operational efficiency.',
    features: [
      'Passwordless Authentication — Eliminate passwords and reduce credential-based attacks',
      'Continuous Identity Verification — Monitor trust continuously, not just at a single login event',
      'Behavioral Intelligence — Analyze patterns to detect anomalies and suspicious activity in real time',
      'Hardware-Based Trust — Phishing-resistant root of trust through regulatory-compliant security keys',
      'Post-Quantum Security — Protect identities using NIST-standardized quantum-resistant cryptography',
      'Data Sovereignty — Maintain complete ownership and control of identity data',
    ],
    cta: 'Talk to a QuantaNex Expert',
  },
  {
    id: 'deployment',
    label: 'Deployment',
    visual: { icon: '🚀', subtitle: 'Cloud · On-Premise · Hybrid · Air-Gap' },
    title: 'Flexible Deployment Models',
    desc: 'Your infrastructure, regulatory requirements, security policies, and operational priorities are unique. QuantaNex is designed to operate in the manner your organization requires — security should adapt to your environment, not force your environment to adapt to the security solution.',
    features: [
      'On-Premise Deployment — For organizations requiring complete infrastructure ownership',
      'Cloud Deployment — Ideal for rapid implementation and centralized management',
      'Hybrid Deployment — Combines cloud scalability with on-premise control',
      'Air-Gapped Environments — Supports highly secure, isolated networks',
    ],
    cta: 'Find Out What Works Best for Your Organization',
  },
  {
    id: 'enrollment',
    label: 'Enrollment',
    visual: { icon: '📋', subtitle: 'Verify · Register · Authenticate' },
    title: 'Simplified User Onboarding',
    desc: 'QuantaNex simplifies user onboarding while maintaining the highest security standards. Our enrollment process guides users through a secure, step-by-step identity verification and credential registration flow.',
    features: [
      'Identity Verification — Secure, compliant identity proofing at enrollment',
      'Credential Registration — Hardware key and biometric profile creation',
      'Profile Creation — Personalized trust baseline established per user',
      'Multi-Device Registration — Supports secure access across multiple authorized devices',
      'Independent Enrollment — Enables users to onboard without IT involvement',
      'Bulk Enterprise Enrollment — Streamlines large-scale organizational onboarding',
    ],
    cta: 'Talk to a QuantaNex Expert',
  },
  {
    id: 'services',
    label: 'Services',
    visual: { icon: '🛠️', subtitle: 'Strategy · Deployment · Optimization' },
    title: 'Your Identity Transformation Partner',
    desc: 'QuantaNex partners with organizations throughout their identity transformation journey — from strategy and planning to deployment, integration, and ongoing optimization. Our team works alongside yours to ensure a smooth and successful implementation.',
    features: [
      'Identity Assessment — Evaluate your current landscape and identify security gaps',
      'Deployment Services — Guided implementation from pilot to full production rollout',
      'Integration Services — Connect QuantaNex to your existing systems and workflows',
      'Security Architecture Consulting — Design the right identity architecture for your needs',
      'Training — Empower your teams to fully leverage QuantaNex capabilities',
      'Ongoing Support — Technical support, platform updates, and security advisory',
    ],
    cta: 'Work with QuantaNex',
  },
]

const BENEFITS = [
  { icon: '🛡️', title: 'Reduced Attack Surface',        desc: 'Minimize exposure to phishing, credential theft, and identity-based attacks.',            card: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25' },
  { icon: '✨', title: 'Improved User Experience',      desc: 'Deliver seamless & secure access without the frustration of passwords.',                   card: 'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/25' },
  { icon: '📋', title: 'Enhanced Compliance',           desc: 'Strengthen governance, audit readiness, and control over identity data.',                   card: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25' },
  { icon: '⚛️', title: 'Future-Ready Architecture',     desc: "Protect identities today while preparing for tomorrow's quantum computing threats.",         card: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/25' },
  { icon: '⚡', title: 'Lower Authentication Friction', desc: 'Replace repeated login challenges with intelligent, continuous trust verification.',         card: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25' },
  { icon: '🏢', title: 'Enterprise Scalability',        desc: 'Securely support growing users, applications, and environments without compromise.',         card: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25' },
]

export default function Solutions() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]
  const [ref, visible] = useInView()

  useEffect(() => {
    const handler = (e) => setActive(e.detail)
    window.addEventListener('qn-enterprise-tab', handler)
    return () => window.removeEventListener('qn-enterprise-tab', handler)
  }, [])
  const [benefitsRef, benefitsVis] = useInView()

  return (
    <section id="enterprise" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-brand/10 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-200 dark:border-brand/30">
            Enterprise
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Enterprise Identity Security<br className="hidden lg:block" /> <span className="gradient-text">Without Compromise</span>
          </h2>
          <p className="text-[17.5px] text-slate-500 dark:text-slate-400 mt-4 max-w-[580px] mx-auto leading-relaxed">
            Modern enterprises require security that is adaptive, scalable, and future-ready. QuantaNex delivers.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border-2 transition-all duration-200 ${
                active === i
                  ? 'bg-brand border-brand text-white shadow-blue'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-brand hover:text-brand'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div key={tab.id} className="animate-[fadeIn_.4s_ease]">
            <h3 className="text-[30px] font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">{tab.title}</h3>
            <p className="text-[16px] text-slate-500 dark:text-slate-400 leading-relaxed mb-7">{tab.desc}</p>
            <ul className="space-y-3 mb-8">
              {tab.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 bg-grad-brand text-white font-semibold rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
                {tab.cta} →
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand text-brand font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-200 bg-white dark:bg-transparent">
                Request a Demo
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            className="rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1628, #0F1E36)' }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(29,110,227,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(29,110,227,0.07) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            <div className="relative z-10 text-center text-white">
              <div className="text-7xl mb-4 drop-shadow-lg">{tab.visual.icon}</div>
              <h4 className="text-[20px] font-bold mb-2">{tab.label}</h4>
              <p className="text-white/45 text-[13px]">{tab.visual.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Why your org needs QuantaNex */}
        <div
          ref={benefitsRef}
          className={`mt-20 transition-all duration-700 ${benefitsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <h3 className="text-[28px] font-extrabold text-slate-900 dark:text-white mb-3">Why Your Organization Needs QuantaNex</h3>
            <p className="text-[16px] text-slate-500 dark:text-slate-400 max-w-[600px] mx-auto leading-relaxed">
              Today's identity landscape has fundamentally changed. Passwords are routinely compromised and post-quantum computing threats challenge the foundations of traditional security.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className={`rounded-xl p-6 border ${b.card} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
                <div className="text-2xl mb-3">{b.icon}</div>
                <h4 className="text-[15px] font-bold text-slate-900 dark:text-white mb-2">{b.title}</h4>
                <p className="text-[13.5px] text-slate-500 dark:text-white/45 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[15px] text-slate-500 dark:text-slate-400 mb-5">Turn Identity Security Into A Competitive Advantage</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-8 py-4 bg-grad-brand text-white font-semibold rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
                Talk to a QuantaNex Expert
              </a>
              <a href="#" className="px-8 py-4 border-2 border-brand text-brand font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-200 bg-white dark:bg-transparent">
                Request a Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
