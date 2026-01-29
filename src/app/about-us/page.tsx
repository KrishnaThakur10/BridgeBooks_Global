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
    <main className="bg-white">
      {/* Editorial Hero Section */}
      <section className="relative pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-[#F9FAFA] px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ABC9C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1ABC9C]"></span>
              </span>
              Est. 2012
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#2B3D4E] font-extrabold leading-[1.1] tracking-tight">
              Precision in Practice, <span className="text-[#1ABC9C] italic">Excellence</span> in Growth.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#2B3D4E]/70 leading-relaxed max-w-2xl">
              We don't just balance books; we architect financial futures. Our outsourced accounting model is designed to fuel organic scaling through strategic foresight and rigorous compliance.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link href='/contact-us'>
              <button className="bg-[#1ABC9C] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl font-extrabold text-base sm:text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Partner with Experts
              </button>
              </Link>
              <Link href="/blog">
              <button className="border-2 border-[#2B3D4E]/10 text-[#2B3D4E] px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl font-extrabold text-base sm:text-lg hover:bg-[#2B3D4E]/5 transition-all">
                View Case Studies
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative w-full max-w-xl lg:max-w-none mx-auto">
            <div 
              className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl grayscale hover:grayscale-0 transition-all duration-700" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhRr1sVMm11dyerFgltWjWJoZnGE-YQGDbZbxjaOuRCytp9MG8X6vaaelt8tyu_Z87DlLu_DHe7OFaRfzzkcvmCEsq2irg71znFVyGfOXyLqhfGCL9KvpPt5jJIku5c3I6RPOpnYYfr5ZVDb-vUsiRkCPSvQ6HZO9uGm9n4MXeWFkOaHXpCqVc86sP5l-41UiGfWk3CyOZYxdcT6ZBkBpJQbipTabepp3yXjvfwCt66A-jB3OrWmPmQ3gaSmXaI7kCfcjmg9UplEOb')"}}
            >
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-gray-100 max-w-[220px] sm:max-w-[240px]">
              <p className="text-2xl sm:text-3xl font-black text-[#1ABC9C]">$2.4B+</p>
              <p className="text-xs sm:text-sm font-bold text-[#2B3D4E]/60">Managed Assets Under Advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-[#2B3D4E]">Our Core Values</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-[#1ABC9C] rounded-full"></div>
            <p className="mt-6 sm:mt-8 text-[#2B3D4E]/60 max-w-xl text-base sm:text-lg">
              Building a foundation of trust through unwavering principles that define every transaction and report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: 'visibility', title: 'Transparency', desc: 'Clear, real-time reporting that keeps you in absolute control of your financial narrative. No hidden fees, no opaque processes.' },
              { icon: 'verified_user', title: 'Security', desc: 'Military-grade encryption and strict SOC2 compliance to protect your sensitive data from any modern threat.' },
              { icon: 'trending_up', title: 'Scalability', desc: 'Financial systems designed to grow seamlessly with your business ambitions, adapting to complexity as you expand.' }
            ].map((value, i) => (
              <div key={i} className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-100 hover:border-[#1ABC9C]/30 hover:bg-background-light transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-3xl bg-[#2B3D4E] text-white flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-[#2B3D4E] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-[#2B3D4E]/70 leading-relaxed text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Data Security Bar */}
      <section className="bg-[#2B3D4E] text-white py-14 sm:py-16 lg:py-18 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-[#1ABC9C]">security</span>
              Compliance &amp; Data Security
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl">
              We adhere to the highest global standards for data integrity and privacy, ensuring your financial records are safe and audit-ready.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-5 items-center justify-center">
            {[
              { label: 'Encryption', value: '256-bit', subtext: 'AES Standard' },
              { label: 'Audits', value: 'SOC2', subtext: 'Certified' },
              { label: 'Uptime', value: '99.9%', subtext: 'Guaranteed' },
              { label: 'Support', value: '24/7', subtext: 'Expert Team' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center bg-white/5 backdrop-blur px-6 sm:px-8 py-5 sm:py-6 rounded-3xl border border-white/10 min-w-[140px] sm:min-w-[160px]">
                <span className="text-xs sm:text-sm font-bold text-white/50 mb-1 uppercase tracking-tight">{stat.label}</span>
                <span className="text-xl sm:text-2xl font-black">{stat.value}</span>
                <span className="text-xs text-[#1ABC9C] font-bold mt-2">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Lead Gen Footer Section */}
      <section className="bg-[#1ABC9C] py-16 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tight">
            Ready to scale with precision?
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed">
            Join 500+ firms that trust our financial foresight to drive their organic growth. No obligation, just a conversation about your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact-us">
            <button className="bg-[#2B3D4E] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:scale-105 transition-all shadow-xl">
              Start Your Growth Plan
            </button>
            </Link>
            <Link href="/contact-us">
            <button className="bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-white/20 transition-all">
              Schedule a Call
            </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}