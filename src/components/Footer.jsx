const COL = [
  {
    title: 'About',
    links: ['Our Mission', 'Why QuantaNex', 'Our Team'],
  },
  {
    title: 'Product',
    links: ['Cognitive AI', 'Quantum Resilience', 'Hardware Root of Trust'],
  },
  {
    title: 'Enterprise',
    links: ['The Solution', 'Deployment', 'Enrollment', 'Services'],
  },
  {
    title: 'SDK',
    links: ['SDK Overview'],
  },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#04091A' }} className="text-white/55">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 border-b pb-14" style={{ borderColor:'rgba(255,255,255,0.07)' }}>

          {/* Brand */}
          <div>
            <img src="/logo-dark.png" alt="QuantaNex" className="h-14 w-auto mb-5" />
            <p className="text-[14px] leading-relaxed max-w-[260px] mb-5" style={{ color:'rgba(255,255,255,0.45)' }}>
              Robust, cross-platform passwordless authentication for the post-quantum era.
            </p>
            <p className="text-[13px] mb-5 flex items-start gap-2" style={{ color:'rgba(255,255,255,0.28)' }}>
              <span className="mt-0.5">📍</span> 500, W Putnam Ave, Suite 400, Greenwich, Connecticut, 06830.
            </p>
            <a
              href="https://www.linkedin.com/company/quantanex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:'rgba(255,255,255,0.06)', color:'rgba(255,255,255,0.45)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,102,194,0.3)'; e.currentTarget.style.color = '#0A66C2' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Link columns */}
          {COL.map(col => (
            <div key={col.title}>
              <h5 className="text-white text-[12.5px] font-bold uppercase tracking-[0.7px] mb-5">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[13.5px] transition-colors duration-200 hover:text-white"
                      style={{ color:'rgba(255,255,255,0.45)' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <span className="text-[13px]" style={{ color:'rgba(255,255,255,0.28)' }}>
            © 2025 QuantaNex Inc. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security', 'Trust Center'].map(l => (
              <a key={l} href="#" className="text-[13px] transition-colors duration-200 hover:text-white/70"
                style={{ color:'rgba(255,255,255,0.28)' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
