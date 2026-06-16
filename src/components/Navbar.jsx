import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Product',    href: '#product' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'SDK',        href: '#sdk' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBase   = `fixed top-0 left-0 right-0 z-50 transition-all duration-300`
  const navBg     = scrolled ? 'bg-white shadow-md' : 'bg-transparent'
  const linkCol   = scrolled ? 'text-slate-700 hover:text-brand hover:bg-blue-50' : 'text-white/90 hover:text-white hover:bg-white/10'
  const signinCol = scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white/85 hover:bg-white/10'

  return (
    <>
      <nav className={`${navBase} ${navBg}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <a href="#">
            {scrolled
              ? <img src="/logo-light.png" alt="QuantaNex" className="h-12 w-auto" />
              : <img src="/logo-dark.png"  alt="QuantaNex" className="h-12 w-auto" />}
          </a>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center px-3.5 py-2 rounded-lg text-[14.5px] font-medium transition-all duration-200 ${linkCol}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="#" className="px-5 py-2.5 bg-grad-brand text-white text-[14px] font-semibold rounded-lg shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
              Request a Demo
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 p-6 overflow-y-auto lg:hidden">
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-3.5 text-[16px] font-medium text-slate-700 border-b border-slate-100">
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="py-3 text-center bg-grad-brand text-white font-semibold rounded-xl">Request a Demo</a>
          </div>
        </div>
      )}
    </>
  )
}
