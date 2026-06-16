import { useInView } from '../hooks/useInView'

const BADGES = [
  { icon: '⚛️', name: 'NIST PQC',   sub: 'Post-Quantum Standard' },
  { icon: '🔑', name: 'FIDO2',       sub: 'WebAuthn L2' },
  { icon: '🌐', name: 'IETF',        sub: 'ML-DSA Contributor' },
  { icon: '🔬', name: 'IEEE',        sub: 'Peer-Reviewed Research' },
  { icon: '🛡️', name: 'SOC 2',      sub: 'Type II' },
  { icon: '🏥', name: 'HIPAA',       sub: 'Compliant' },
  { icon: '🏦', name: 'PCI-DSS',    sub: 'Level 1' },
]

export default function Compliance() {
  const [ref, visible] = useInView()

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 text-center">
        <span className={`inline-block px-4 py-1.5 bg-blue-50 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Standards & Compliance
        </span>
        <h2 className={`text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-tight tracking-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Built on the foundations <span className="gradient-text">regulators trust</span>
        </h2>
        <p className={`text-[17px] text-slate-500 mt-4 mb-12 max-w-[560px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          QuantaNex contributes to the standards it implements — including IETF proposals for ML-DSA within WebAuthn and peer-reviewed research presented at IEEE conferences.
        </p>

        <div className={`flex flex-wrap justify-center gap-5 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {BADGES.map(b => (
            <div
              key={b.name}
              className="flex flex-col items-center gap-2.5 px-7 py-6 border-[1.5px] border-slate-200 rounded-2xl min-w-[120px] hover:border-brand hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <span className="text-3xl">{b.icon}</span>
              <span className="text-[13.5px] font-bold text-slate-800">{b.name}</span>
              <span className="text-[11.5px] text-slate-400">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
