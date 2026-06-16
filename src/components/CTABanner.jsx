import { useInView } from '../hooks/useInView'

export default function CTABanner() {
  const [ref, visible] = useInView()

  return (
    <section className="py-24 bg-grad-brand relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-[680px] mx-auto px-6 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-4xl lg:text-[46px] font-black text-white leading-tight tracking-tight mb-4">
          Security Technology Is Only Part of the Solution. The Right Partner Makes the Difference.
        </h2>
        <p className="text-[18px] text-white/72 leading-relaxed mb-10">
          Work with QuantaNex to maximize the value of your identity security investment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="px-8 py-4 bg-white text-brand font-bold text-[16px] rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200">
            Talk to a QuantaNex Expert
          </a>
          <a href="#"
            className="px-8 py-4 text-white font-bold text-[16px] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ background:'rgba(255,255,255,0.12)', border:'2px solid rgba(255,255,255,0.3)' }}>
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
