import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'

const NAV_ITEMS = [
  {
    label: 'About', href: '#about',
    sub: [
      { label: 'Our Mission',    href: '#about' },
      { label: 'Why QuantaNex', href: '#why-quantanex' },
      { label: 'Our Team',      href: '#team' },
    ],
  },
  {
    label: 'Product', href: '#product',
    sub: [
      { label: 'Cognitive AI',           href: '#product' },
      { label: 'Quantum Resilience',     href: '#product' },
      { label: 'Hardware Root of Trust', href: '#product' },
    ],
  },
  {
    label: 'Enterprise', href: '#enterprise',
    sub: [
      { label: 'The Solution', href: '#enterprise', tab: 0 },
      { label: 'Deployment',   href: '#enterprise', tab: 1 },
      { label: 'Enrollment',   href: '#enterprise', tab: 2 },
      { label: 'Services',     href: '#enterprise', tab: 3 },
    ],
  },
  {
    label: 'SDK', href: '#sdk',
  },
]

export default function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [hovered, setHovered]   = useState(null)
  const [mobileExp, setMobileExp] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const enter = label => { clearTimeout(closeTimer.current); setHovered(label) }
  const leave = ()    => { closeTimer.current = setTimeout(() => setHovered(null), 160) }

  const navBg   = scrolled ? 'bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/60' : 'bg-transparent'
  const linkCol = scrolled
    ? 'text-slate-700 dark:text-slate-200 hover:text-brand hover:bg-blue-50 dark:hover:bg-slate-800'
    : 'text-white/90 hover:text-white hover:bg-white/10'
  const chevCol = scrolled ? 'text-slate-400 dark:text-slate-500' : 'text-white/50'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <a href="#">
            {scrolled && !dark
              ? <img src="/logo-light.png" alt="QuantaNex" className="h-12 w-auto" />
              : <img src="/logo-dark.png"  alt="QuantaNex" className="h-12 w-auto" />}
          </a>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none">
            {NAV_ITEMS.map(item => (
              <li key={item.label} className="relative"
                onMouseEnter={() => enter(item.label)}
                onMouseLeave={leave}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${linkCol}`}
                >
                  {item.label}
                  {item.sub && <ChevronDown size={13} className={`flex-shrink-0 transition-transform duration-200 ${chevCol} ${hovered === item.label ? 'rotate-180' : ''}`} />}
                </a>

                {/* Dropdown panel */}
                {item.sub && hovered === item.label && (
                  <div className="absolute top-full left-0 mt-1 min-w-[200px] bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 z-50"
                    onMouseEnter={() => enter(item.label)}
                    onMouseLeave={leave}
                  >
                    {item.sub.map(s => (
                      <a key={s.label} href={s.href}
                        onClick={() => s.tab !== undefined && window.dispatchEvent(new CustomEvent('qn-enterprise-tab', { detail: s.tab }))}
                        className="block px-4 py-2.5 text-[13.5px] font-medium text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-150">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions — desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={onToggleDark}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white/65 hover:text-white hover:bg-white/10'}`}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#" className="px-5 py-2.5 bg-grad-brand text-white text-[14px] font-semibold rounded-lg shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
              Request a Demo
            </a>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={onToggleDark}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-500 dark:text-slate-400' : 'text-white/65'}`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[72px] bg-white dark:bg-slate-900 z-40 overflow-y-auto lg:hidden">
          <div className="px-6 pb-6">
            {NAV_ITEMS.map(item => (
              <div key={item.label} className="border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <a href={item.href} onClick={() => setOpen(false)}
                    className="flex-1 py-3.5 text-[16px] font-medium text-slate-700 dark:text-slate-200">
                    {item.label}
                  </a>
                  {item.sub && (
                    <button
                      onClick={() => setMobileExp(mobileExp === item.label ? null : item.label)}
                      className="p-2 text-slate-400 dark:text-slate-500"
                    >
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExp === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.sub && mobileExp === item.label && (
                  <div className="pb-3 pl-4 flex flex-col gap-0.5">
                    {item.sub.map(s => (
                      <a key={s.label} href={s.href}
                        onClick={() => {
                          setOpen(false)
                          if (s.tab !== undefined) window.dispatchEvent(new CustomEvent('qn-enterprise-tab', { detail: s.tab }))
                        }}
                        className="py-2 text-[14px] text-slate-500 dark:text-slate-400 hover:text-brand transition-colors">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href="#" onClick={() => setOpen(false)} className="py-3 text-center bg-grad-brand text-white font-semibold rounded-xl">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
