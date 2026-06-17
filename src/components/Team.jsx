import { useInView } from '../hooks/useInView'

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

const MEMBERS = [
  {
    name: 'Shyam Ramachandran',
    title: 'Co-Founder | CEO',
    photo: '/team/shyam.jpg',
    initials: 'SR',
    gradient: 'from-blue-600 to-cyan-400',
    bio: 'Seasoned entrepreneur and technology leader with 20+ years of experience building and scaling businesses in fintech, AI, digital services, and telecom. He specializes in turning early-stage ideas into sustainable enterprises, driving growth through technology adoption, market insight, and disciplined leadership.',
    linkedin: 'https://www.linkedin.com/in/shyam5',
    tags: ['Fintech', 'AI Strategy', 'Entrepreneurship'],
  },
  {
    name: 'Dr. Sibi Chakkaravarthy Sethuraman',
    title: 'Co-Founder | Chief Technology Advisor',
    photo: '/team/sibi.jpg',
    initials: 'SC',
    gradient: 'from-violet-600 to-blue-500',
    bio: 'Professor at Vellore Institute of Technology – Andhra Pradesh, leading the Centre of Excellence in Artificial Intelligence and Robotics. He specializes in cybersecurity, AI-driven security systems, digital authentication, and next-generation robotics — bridging breakthrough research with real-world technology.',
    linkedin: 'https://www.linkedin.com/in/sibi-chakkaravarthy-sethuraman-7aba651a',
    tags: ['Cybersecurity', 'AI Research', 'Robotics'],
  },
  {
    name: 'Muthu Venkatesh Murugan',
    title: 'Co-Founder | CTO',
    photo: '/team/muthu.jpg',
    initials: 'MV',
    gradient: 'from-cyan-500 to-blue-600',
    bio: 'Technology professional specializing in software engineering, system integration, and DevOps-driven delivery. With hands-on experience in fintech, he has led teams building scalable platforms — with expertise in application architecture, cloud-native deployment, and DevOps automation.',
    linkedin: 'https://www.linkedin.com/in/muthu-venkatesh-murugan-0a4607197',
    tags: ['Engineering', 'DevOps', 'Cloud-Native'],
  },
  {
    name: 'Sivakanth Karunagaran',
    title: 'Co-Founder | CFO',
    photo: '/team/sivakanth.jpg',
    initials: 'SK',
    gradient: 'from-emerald-500 to-cyan-500',
    bio: 'Finance and compliance professional with 20+ years of experience in accounting, taxation, audit, and business advisory. He has guided startups, SMEs, and corporates on financial management, corporate compliance, and operational finance — helping organizations strengthen governance and navigate complex regulations.',
    linkedin: 'https://www.linkedin.com/in/sivakanth-karunagaran-a4270523',
    tags: ['Finance', 'Compliance', 'Audit'],
  },
]

function MemberCard({ member, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms' }}
    >
      {/* Card top banner */}
      <div className={`h-28 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />
        {[...Array(6)].map((_, i) => (
          <div key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 14}%` }}
          />
        ))}
      </div>

      {/* Avatar */}
      <div className="px-7 pb-7">
        <div className="relative -mt-12 mb-5">
          <div className="w-24 h-24 rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className={`w-full h-full bg-gradient-to-br ${member.gradient} items-center justify-center text-white text-2xl font-black hidden`}>
              {member.initials}
            </div>
          </div>
        </div>

        <h3 className="text-[18px] font-bold text-slate-900 dark:text-white leading-snug mb-1">{member.name}</h3>
        <p className="text-[13px] font-semibold text-brand mb-4 leading-snug">{member.title}</p>
        <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{member.bio}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {member.tags.map(t => (
            <span key={t} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[11.5px] font-semibold rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue"
          style={{ background: '#0A66C2' }}
        >
          <LinkedInIcon />
          View LinkedIn
        </a>
      </div>
    </div>
  )
}

export default function Team() {
  const [ref, visible] = useInView()

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1200px] mx-auto px-6">

        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-brand/10 text-brand text-[12.5px] font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-200 dark:border-brand/30">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-[46px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Meet The Experts Driving<br className="hidden lg:block" /> <span className="gradient-text">Our Innovation</span>
          </h2>
          <p className="text-[17.5px] text-slate-500 dark:text-slate-400 mt-4 max-w-[560px] mx-auto leading-relaxed">
            A founding team combining decades of expertise in cybersecurity research, fintech, enterprise engineering, and financial compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERS.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
