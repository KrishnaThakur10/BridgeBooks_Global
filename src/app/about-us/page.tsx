import Link from 'next/link';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'David Chen, CPA',
      role: 'Managing Partner',
      description: 'Ex-Deloitte specialist with 15+ years in corporate tax strategy and organic scaling for tech firms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCIKrYNRQgwVydMYLfsg5b--HFyOg02Nd2v9edOIhFVvsdfajn5bqv4sdFmQM8PewUEsFGkQ1AfTl_LXp2RV6SMjiOG1_ZGGxLR6nuvDbZn-Z2yfFSjZNnnRpJ99gCTJ14JjrVsMyS6INAIHySVxT05wD9HoNI3cmLcFSB17kfU2KUmWJnsAoSu3iUipmP_p1mNjy5i3hKVN1daO5RFVzydnE3rFeJ5JvEVeJMjs_a3NcJ4Tyq_imymrQM2YnTAjbwvO0BBd8oeJ1k'
    },
    {
      name: 'Sarah Williams, CMA',
      role: 'Head of Compliance',
      description: 'Leading our regulatory compliance team with a focus on SaaS accounting and global tax laws.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSNtghXo2vji_XzLtR0eNwVXl-is_hfArsB4q2N86YUawO4LFZK_59DzULskz9IVz8M1IA3eQtFqF3E71BBJshE4n6rooWRuvne5BVLzQE4-MHpp65QKJJS-VO-uD0xsUr7PsEdWx4cG4iRsLfQZmb4eWFEddIMnRRKR_OmwoNSQJ7a-NJNOm9ej-rEzzEq6beLOpKs-rhZKakoYkdNhokIYAww0s0TaEKzFanWuiBvSv_6leuKfdHcXrjKgHglXgjX9uOQfqlpW-5'
    },
    {
      name: 'Marcus Thorne',
      role: 'Senior Strategist',
      description: 'Specializing in financial forecasting and lead generation metrics for growth-stage startups.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhEm2OcqwuQKZCMYrRSubntW5137V9-mIckyYT8tiNLwEcWMyWiv20kcIgPPUd8_C8ZSJqpgztea1FVJfJiWX0QmaiWZ-OD0Yvgjks5OYRgzEuWEagZrfZR5aIzIp2XAenBDWgA1GdvgDAqHr1Zg6Afuxgd5QRhv-acW3ntHZTGUZAn_XfFx5QUwexxKmxRFjA-_1XQBqrXyCyGK_JUv_y0pJl2afm1Qk38SKpLmpusK48iUKmmixu05ciPUBPUBgQCeC_lPnWQgqV'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Operations Director',
      description: 'Expert in optimizing accounting workflows to ensure seamless scalability for our clients.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_c1Z0Hcco8lJhem-cm1oOYsho-tg2BVd4yOgG2SFv722r1Enq4cDhGzeqe9FiBPItegLE5YiGHALRhGk0NKzDapt9kW3WCE_yx-a-w9rMD6lzqSx145ncrpCWhOfW4Ph6TW43RCns5UFJgAOL_xp5s7JEbE9Ipvdm-q4s5KRAiANzu2sfaeLkD0RIovrkPMnN41ciG8FfaT1wThraW4bzUSFw7hJSbay1b4ilIIVUfgOoNbgcF6tXqfBnfTpG_S1ygHsNGTKLkmk9'
    }
  ];

  return (
    <main>
      {/* Editorial Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F9FAFA] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-xs font-bold uppercase tracking-widest w-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ABC9C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1ABC9C]"></span>
              </span>
              Est. 2012
            </div>
            <h1 className="text-5xl text-[#2B3D4E] lg:text-7xl font-extrabold leading-[1.1] tracking-tighter">
              Precision in Practice, <span className="text-[#1ABC9C] italic">Excellence</span> in Growth.
            </h1>
            <p className="text-lg lg:text-xl text-[#2B3D4E]/70 leading-relaxed max-w-2xl">
              We don't just balance books; we architect financial futures. Our outsourced accounting model is designed to fuel organic scaling through strategic foresight and rigorous compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1ABC9C] text-white px-8 py-4 rounded-3xl font-extrabold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Partner with Experts
              </button>
              <Link href="/blog">
              <button className="border-2 border-[#2B3D4E]/10 text-[#2B3D4E] px-8 py-4 rounded-3xl font-extrabold text-lg hover:bg-[#2B3D4E]/5 transition-all">
                View Case Studies
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div 
              className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl grayscale hover:grayscale-0 transition-all duration-700" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhRr1sVMm11dyerFgltWjWJoZnGE-YQGDbZbxjaOuRCytp9MG8X6vaaelt8tyu_Z87DlLu_DHe7OFaRfzzkcvmCEsq2irg71znFVyGfOXyLqhfGCL9KvpPt5jJIku5c3I6RPOpnYYfr5ZVDb-vUsiRkCPSvQ6HZO9uGm9n4MXeWFkOaHXpCqVc86sP5l-41UiGfWk3CyOZYxdcT6ZBkBpJQbipTabepp3yXjvfwCt66A-jB3OrWmPmQ3gaSmXaI7kCfcjmg9UplEOb')"}}
            >
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[240px]">
              <p className="text-3xl font-black text-[#1ABC9C]">$2.4B+</p>
              <p className="text-sm font-bold text-[#2B3D4E]/60">Managed Assets Under Advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 text-[#2B3D4E]">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-[#1ABC9C] rounded-full"></div>
            <p className="mt-8 text-[#2B3D4E]/60 max-w-xl text-lg">
              Building a foundation of trust through unwavering principles that define every transaction and report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'visibility', title: 'Transparency', desc: 'Clear, real-time reporting that keeps you in absolute control of your financial narrative. No hidden fees, no opaque processes.' },
              { icon: 'verified_user', title: 'Security', desc: 'Military-grade encryption and strict SOC2 compliance to protect your sensitive data from any modern threat.' },
              { icon: 'trending_up', title: 'Scalability', desc: 'Financial systems designed to grow seamlessly with your business ambitions, adapting to complexity as you expand.' }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-2xl border border-gray-100 hover:border-[#1ABC9C]/30 hover:bg-background-light transition-all group">
                <div className="size-14 rounded-3xl bg-[#2B3D4E] text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-[#2B3D4E] text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-[#2B3D4E]/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Data Security Bar */}
      <section className="bg-[#2B3D4E] text-white py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#1ABC9C]">security</span>
              Compliance &amp; Data Security
            </h2>
            <p className="text-white/60 text-lg max-w-lg">
              We adhere to the highest global standards for data integrity and privacy, ensuring your financial records are safe and audit-ready.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {[
              { label: 'Encryption', value: '256-bit', subtext: 'AES Standard' },
              { label: 'Audits', value: 'SOC2', subtext: 'Certified' },
              { label: 'Uptime', value: '99.9%', subtext: 'Guaranteed' },
              { label: 'Support', value: '24/7', subtext: 'Expert Team' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center bg-white/5 backdrop-blur px-8 py-6 rounded-3xl border border-white/10 min-w-[160px]">
                <span className="text-sm font-bold text-white/50 mb-1 uppercase tracking-tighter">{stat.label}</span>
                <span className="text-2xl font-black">{stat.value}</span>
                <span className="text-xs text-[#1ABC9C] font-bold mt-2">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-24 px-6 bg-[#F9FAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-[#2B3D4E]">Leadership &amp; Expertise</h2>
            <p className="text-[#2B3D4E]/60 text-lg">Decades of combined Big 4 experience, focused on your growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div 
                  className="h-80 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
                  style={{backgroundImage: `url('${member.image}')`}}
                >
                </div>
                <div className="p-6">
                  <h4 className="text-xl text-[#2B3D4E] font-bold">{member.name}</h4>
                  <p className="text-sm text-[#1ABC9C] font-bold mb-3">{member.role}</p>
                  <p className="text-sm text-[#2B3D4E]/60 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Lead Gen Footer Section */}
      <section className="bg-[#1ABC9C] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to scale with precision?
          </h2>
          <p className="text-white/80 text-xl mb-12 leading-relaxed">
            Join 500+ firms that trust our financial foresight to drive their organic growth. No obligation, just a conversation about your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2B3D4E] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl">
              Start Your Growth Plan
            </button>
            <button className="bg-white/10 backdrop-blur text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}