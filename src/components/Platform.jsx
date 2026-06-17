import { useInView } from '../hooks/useInView'

const PILLARS = [
  {
    icon: '🧠',
    iconClass: 'bg-blue-100 dark:bg-blue-500/20',
    borderHover: 'hover:border-blue-400/60',
    title: 'Cognitive AI',
    desc: 'QuantaNex uses AI and behavioral biometrics to authenticate you continuously. It recognizes your unique patterns — how you type, move, or click — and spots any anomaly in real time, providing dynamic risk assessment and proactive threat prevention.',
    tags: ['Behavioral Biometrics', 'Continuous Auth', 'Anomaly Detection'],
    tagClass: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300',
    link: 'Explore Cognitive AI',
  },
  {
    icon: '⚛️',
    iconClass: 'bg-cyan-100 dark:bg-cyan-500/20',
    borderHover: 'hover:border-cyan-400/60',
    title: 'Quantum Resilience',
    desc: 'Post-Quantum Cryptography (PQC) is embedded at the architectural core. We leverage NIST-standardized quantum-resistant algorithms to keep your digital identities secure now and in the future — even as quantum technology advances.',
    tags: ['NIST PQC', 'ML-KEM / ML-DSA', 'Future-Proof'],
    tagClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
    link: 'Explore Quantum Resilience',
  },
  {
    icon: '🔩',
    iconClass: 'bg-violet-100 dark:bg-violet-500/20',
    borderHover: 'hover:border-violet-400/60',
    title: 'Hardware Root of Trust',
    desc: 'QuantaNex uses physical security keys that are FIDO2-compliant and phishing-resistant. Built with tamper-resistant secure elements, cryptographic verification happens at the hardware level — creating an un-phishable foundation of trust.',
    tags: ['FIDO2 / WebAuthn', 'Secure Enclave', 'Phishing-Resistant'],
    tagClass: 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300',
    link: 'Explore Hardware Trust',
  },
]

function PillarCard({ pillar, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`group border-[1.5px] border-slate-200 dark:border-slate-700 ${pillar.borderHover} bg-white dark:bg-slate-800 rounded-2xl p-9 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms' }}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${pillar.iconClass}`}>
        {pillar.icon}
      </div>
      <h3 className="text-[21px] font-bold text-slate-900 dark:text-white mb-3">{pillar.title}</h3>
      <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
      <div className="flex flex-wrap gap-2 mt-5">
        {pillar.tags.map(t => (
          <span key={t} className={`px-3 py-1 text-[12px] font-semibold rounded-full ${pillar.tagClass}`}>{t}</span>
        ))}
      </div>
      <a href="#" className="inline-flex items-center gap-1.5 mt-5 text-[14px] font-semibold text-brand hover:gap-3 transition-all duration-200">
        {pillar.link} <span>→</span>
      </a>
    </div>
  )
}

export default function Platform() {
  const [ref, visible] = useInView()
  return (
    <section id="product" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-brand/10 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-200 dark:border-brand/30">
            Product
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Intelligent Post-Quantum<br className="hidden lg:block" /> <span className="gradient-text">Trust Platform</span>
          </h2>
          <p className="text-[17.5px] text-slate-500 dark:text-slate-400 leading-relaxed mt-4 max-w-[620px] mx-auto">
            A simple, secure way to authenticate without passwords — combining AI-driven biometrics, hardware authentication, and future-proof encryption in one unified framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PILLARS.map((p, i) => <PillarCard key={p.title} pillar={p} delay={i * 120} />)}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[16px] text-slate-500 dark:text-slate-400 mb-5">Ready to future-proof your identity security with QuantaNex?</p>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-grad-brand text-white font-semibold text-[15px] rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
            Talk to a QuantaNex Expert →
          </a>
        </div>
      </div>
    </section>
  )
}
