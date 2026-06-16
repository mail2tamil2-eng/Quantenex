const BADGES = [
  { icon: '🔬', name: 'IEEE' },
  { icon: '📐', name: 'NIST' },
  { icon: '🔑', name: 'FIDO2' },
  { icon: '🌐', name: 'IETF' },
  { icon: '🛡️', name: 'ISO 27001' },
  { icon: '⚡', name: 'WebAuthn' },
]

export default function TrustBar() {
  return (
    <div className="bg-slate-50 border-y border-slate-200 py-7">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-10">
        <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">
          Recognized by
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {BADGES.map(b => (
            <div key={b.name} className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200 grayscale hover:grayscale-0">
              <span className="text-[22px]">{b.icon}</span>
              <span className="text-[14px] font-bold text-slate-600 tracking-wide">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
