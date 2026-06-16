import { useInView } from '../hooks/useInView'

const PLATFORMS = [
  { icon: '📱', label: 'iOS / Swift' },
  { icon: '🤖', label: 'Android / Kotlin' },
  { icon: '🌐', label: 'JavaScript' },
  { icon: '🐍', label: 'Python' },
  { icon: '☁️', label: 'Node.js' },
  { icon: '🔷', label: '.NET / C#' },
]

const CODE = [
  { type: 'comment', text: '// Install: npm install @quantanex/web-sdk' },
  { type: 'blank' },
  { type: 'line', parts: [
    { c: 'keyword', t: 'import' }, { c: 'text', t: ' { QuantaNex } ' },
    { c: 'keyword', t: 'from' },   { c: 'string', t: " '@quantanex/web-sdk'" }, { c: 'text', t: ';' },
  ]},
  { type: 'blank' },
  { type: 'comment', text: '// Initialize with your project key' },
  { type: 'line', parts: [
    { c: 'keyword', t: 'const' }, { c: 'var', t: ' qn' }, { c: 'text', t: ' = ' },
    { c: 'keyword', t: 'new' },   { c: 'func', t: ' QuantaNex' }, { c: 'text', t: '({' },
  ]},
  { type: 'line', parts: [{ c: 'text', t: '  projectId: ' }, { c: 'string', t: "'proj_live_x9k2m...'" }, { c: 'text', t: ',' }]},
  { type: 'line', parts: [{ c: 'text', t: '  mode: ' },      { c: 'string', t: "'post-quantum'" },        { c: 'text', t: ',' }]},
  { type: 'line', parts: [{ c: 'text', t: '  biometrics: ' },{ c: 'keyword', t: 'true' }]},
  { type: 'line', parts: [{ c: 'text', t: '});' }]},
  { type: 'blank' },
  { type: 'comment', text: '// Authenticate — one call, all three pillars' },
  { type: 'line', parts: [
    { c: 'keyword', t: 'const' }, { c: 'var', t: ' result' }, { c: 'text', t: ' = ' },
    { c: 'keyword', t: 'await' }, { c: 'var', t: ' qn' }, { c: 'text', t: '.' },
    { c: 'func', t: 'authenticate' }, { c: 'text', t: '(userId);' },
  ]},
  { type: 'blank' },
  { type: 'line', parts: [{ c: 'keyword', t: 'if' }, { c: 'text', t: ' (result.' }, { c: 'var', t: 'verified' }, { c: 'text', t: ') {' }]},
  { type: 'comment', text: '  // ✓ User verified: AI + Quantum + Hardware' },
  { type: 'line', parts: [{ c: 'func', t: '  grantAccess' }, { c: 'text', t: '(result.' }, { c: 'var', t: 'sessionToken' }, { c: 'text', t: ');' }]},
  { type: 'line', parts: [{ c: 'text', t: '}' }]},
]

const colorMap = {
  comment: 'text-slate-500',
  keyword: 'text-pink-400',
  func:    'text-blue-300',
  string:  'text-emerald-400',
  var:     'text-amber-300',
  text:    'text-white/75',
}

export default function SDKSection() {
  const [leftRef, leftVis]   = useInView()
  const [rightRef, rightVis] = useInView()

  return (
    <section id="sdk" className="py-24 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-5">
            SDK
          </span>
          <h2 className="text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            Built for developers,<br /> <span className="gradient-text">trusted by security teams</span>
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed mb-7">
            A clean, consistent SDK across every platform. Quantum-safe cryptography and behavioral biometrics handled transparently — you just call{' '}
            <code className="bg-slate-100 px-2 py-0.5 rounded text-[14px] text-brand font-mono">authenticate()</code>.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {PLATFORMS.map(p => (
              <div key={p.label} className="flex items-center gap-2 px-3.5 py-2 bg-white border-[1.5px] border-slate-200 rounded-lg text-[13.5px] font-semibold text-slate-700 hover:border-brand hover:text-brand transition-colors duration-200 cursor-pointer">
                <span>{p.icon}</span> {p.label}
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 bg-grad-brand text-white font-semibold rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
            View Full Documentation →
          </a>
        </div>

        {/* Code block */}
        <div ref={rightRef} className={`transition-all duration-700 delay-150 ${rightVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#050D1E' }}>
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ background:'rgba(255,255,255,0.04)', borderColor:'rgba(255,255,255,0.07)' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[12px] font-mono" style={{ color:'rgba(255,255,255,0.35)' }}>auth.js — QuantaNex Web SDK</span>
            </div>
            {/* Code body */}
            <div className="p-6 font-mono text-[13.5px] leading-[1.85] overflow-x-auto">
              {CODE.map((line, i) => (
                <div key={i}>
                  {line.type === 'blank'   && <br />}
                  {line.type === 'comment' && <span className="text-slate-500">{line.text}</span>}
                  {line.type === 'line'    && line.parts.map((p, j) => (
                    <span key={j} className={colorMap[p.c]}>{p.t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
