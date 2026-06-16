import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'

const FACTORS = [
  { icon: '🧠', label: 'Behavioral Biometrics' },
  { icon: '⚛️', label: 'Quantum Key Exchange' },
  { icon: '🔩', label: 'Hardware Root of Trust' },
]

function AuthCard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % (FACTORS.length + 1)), 1800)
    return () => clearInterval(id)
  }, [])

  const statusFor = i => {
    if (i < step) return 'done'
    if (i === step) return 'active'
    return 'pending'
  }

  return (
    <div className="relative">
      {/* Floating badges */}
      <div className="absolute -top-5 -right-4 bg-white rounded-xl px-3.5 py-2.5 shadow-xl flex items-center gap-2 text-[12.5px] font-semibold text-slate-700 animate-float z-10 whitespace-nowrap">
        <span className="text-emerald-500 text-base">✓</span> Quantum Secured
      </div>
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-3.5 py-2.5 shadow-xl flex items-center gap-2 text-[12.5px] font-semibold text-slate-700 animate-float-d z-10 whitespace-nowrap">
        <span className="text-base">🔐</span> FIDO2 Certified
      </div>

      {/* Main card */}
      <div
        className="relative rounded-2xl p-8 w-full max-w-[380px] shadow-card"
        style={{
          background: 'rgba(15,30,60,0.72)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-10 rounded-xl bg-grad-brand flex items-center justify-center text-white font-extrabold text-[15px]">
            QN
          </div>
          <div>
            <div className="text-white text-[14.5px] font-bold">QuantaNex Authenticator</div>
            <div className="text-white/40 text-[11.5px] mt-0.5">Enterprise Identity Platform</div>
          </div>
        </div>

        {/* Biometric ring */}
        <div className="text-center py-5">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="50" r="45" stroke="rgba(29,110,227,0.2)" strokeWidth="2"/>
              <circle cx="50" cy="50" r="38" stroke="rgba(6,214,245,0.3)" strokeWidth="1.5" strokeDasharray="6 3"/>
              <circle cx="50" cy="50" r="30" stroke="rgba(29,110,227,0.4)" strokeWidth="1.5"/>
              <path d="M50 28 Q50 34 44 40 Q38 46 38 54 Q38 62 44 66 Q50 70 56 66 Q62 62 62 54"
                stroke="rgba(6,214,245,0.75)" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M42 30 Q42 38 36 44 Q30 50 30 58 Q30 66 36 70 Q42 74 50 74 Q58 74 64 70 Q70 66 70 58 Q70 50 64 44 Q58 38 58 30"
                stroke="rgba(29,110,227,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M50 38 Q50 42 46 46 Q42 50 42 56 Q42 62 46 65 Q50 68 54 65 Q58 62 58 56 Q58 50 54 46 Q50 42 50 38"
                stroke="rgba(6,214,245,0.6)" strokeWidth="1.5" fill="none"/>
              <circle cx="50" cy="50" r="5" fill="rgba(6,214,245,0.6)"/>
              <circle cx="50" cy="50" r="2" fill="#06D6F5"/>
            </svg>
            <div
              className="absolute left-1 right-1 h-[3px] rounded-full animate-scan"
              style={{ background: 'linear-gradient(90deg, transparent, #06D6F5, transparent)', boxShadow: '0 0 10px #06D6F5' }}
            />
          </div>
          <p className="text-white/55 text-[13px] font-medium">
            Scanning — <span className="text-[#06D6F5] font-semibold">Behavioral AI active</span>
          </p>
        </div>

        {/* Factor rows */}
        <div className="flex flex-col gap-2.5 mt-5">
          {FACTORS.map((f, i) => {
            const s = statusFor(i)
            return (
              <div
                key={f.label}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all duration-500 ${
                  s === 'done'   ? 'bg-emerald-500/8 border-emerald-500/30' :
                  s === 'active' ? 'bg-cyan-500/8 border-cyan-400/40 animate-factor' :
                                   'bg-white/5 border-white/8'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-[16px] flex-shrink-0">
                  {f.icon}
                </div>
                <span className="flex-1 text-white/80 text-[13px] font-medium">{f.label}</span>
                <span className={`text-[11.5px] font-bold px-2.5 py-1 rounded-full ${
                  s === 'done'   ? 'text-emerald-400 bg-emerald-400/15' :
                  s === 'active' ? 'text-cyan-300 bg-cyan-400/15' :
                                   'text-white/30 bg-white/6'
                }`}>
                  {s === 'done' ? 'Verified' : s === 'active' ? 'Verifying' : 'Pending'}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let W, H
    let particles = []

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const mk = () => ({ x: Math.random()*W, y: Math.random()*H, vx:(Math.random()-.5)*.45, vy:(Math.random()-.5)*.45, r:Math.random()*1.5+.8, a:Math.random()*.45+.2 })

    const draw = () => {
      ctx.clearRect(0,0,W,H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if(p.x<0) p.x=W; if(p.x>W) p.x=0
        if(p.y<0) p.y=H; if(p.y>H) p.y=0
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(6,214,245,${p.a})`; ctx.fill()
      })
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y
          const d=Math.sqrt(dx*dx+dy*dy)
          if(d<140){
            ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y)
            ctx.strokeStyle=`rgba(29,110,227,${(1-d/140)*0.18})`; ctx.lineWidth=1; ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    particles = Array.from({length:75}, mk)
    draw()
    window.addEventListener('resize', resize, {passive:true})
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

const STATS = [
  { num: '99.9%', lbl: 'Auth Accuracy' },
  { num: '0',     lbl: 'Passwords Needed' },
  { num: 'NIST',  lbl: 'PQC Compliant' },
  { num: '3+',    lbl: 'Patents Pending' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grad-hero overflow-hidden">
      <ParticleCanvas />

      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(29,110,227,0.13) 0%, rgba(6,214,245,0.06) 40%, transparent 70%)'}} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 pb-20 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-7 text-[13px] font-semibold tracking-wide"
            style={{ background:'rgba(6,214,245,0.1)', borderColor:'rgba(6,214,245,0.3)', color:'#06D6F5' }}>
            <span className="w-2 h-2 rounded-full bg-[#06D6F5] animate-pulse-dot" style={{boxShadow:'0 0 8px #06D6F5'}} />
            Post-Quantum Ready Authentication
          </div>

          <h1 className="text-5xl lg:text-[64px] font-black text-white leading-[1.07] tracking-tight mb-5">
            Secure Access<br />
            <span className="gradient-text">Without Passwords</span>
          </h1>

          <p className="text-[17.5px] text-white/65 leading-relaxed mb-5 max-w-[500px]">
            Built to be post-quantum, enterprise-ready, and sovereign.
          </p>
          <p className="text-[15.5px] text-white/50 leading-relaxed mb-9 max-w-[500px]">
            A unified framework combining AI-driven biometrics, hardware authentication, and quantum-resistant encryption — protecting your identity today and tomorrow.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-14">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-grad-brand text-white font-semibold text-[15.5px] rounded-xl shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200">
              Talk to a QuantaNex Expert
            </a>
            <a href="#product"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-white font-semibold text-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:'rgba(255,255,255,0.08)', border:'2px solid rgba(255,255,255,0.22)', backdropFilter:'blur(8px)' }}>
              <span className="w-7 h-7 rounded-full bg-white/18 flex items-center justify-center">
                <Play size={10} fill="white" className="ml-0.5" />
              </span>
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex border-t pt-8" style={{ borderColor:'rgba(255,255,255,0.1)' }}>
            {STATS.map((s, i) => (
              <div key={s.lbl} className={`flex-1 text-center ${i>0 ? 'border-l' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="text-[28px] font-black text-white leading-none">{s.num}</div>
                <div className="text-[11.5px] text-white/45 mt-1.5 font-medium tracking-wide">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <AuthCard />
        </div>
      </div>
    </section>
  )
}
