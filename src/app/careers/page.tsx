import {JobApplicationForm} from './JobApplicationForm';
export default function Careers() {
  const jobs = [
    {
      department: 'Tax Department',
      type: 'Full-Time',
      title: 'Senior Tax Associate',
      location: 'Remote (USA)',
      salary: '$95k - $120k'
    },
    {
      department: 'Audit & Assurance',
      type: 'Full-Time',
      title: 'Audit Manager',
      location: 'Hybrid (Austin, TX)',
      salary: '$110k - $140k'
    },
    {
      department: 'Client Services',
      type: 'Full-Time',
      title: 'Client Success Coordinator',
      location: 'Remote (Global)',
      salary: '$65k - $85k'
    },
    {
      department: 'Advisory',
      type: 'Contract',
      title: 'Outsourced CFO',
      location: 'Remote',
      salary: 'Competitive Hourly'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#F9FAFA] px-6 lg:px-20 pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-xs font-bold uppercase tracking-widest w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ABC9C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1ABC9C]"></span>
              </span>
              We're Hiring
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.04em] text-[#2B3D4E]">
              Shape the Future <br/>of <span className="text-[#1ABC9C] italic">Finance.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#2B3D4E]/70 max-w-xl leading-relaxed">
              Join an elite accounting firm where technology meets tradition. We value innovation, integrity, and your professional evolution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="px-8 py-4 bg-[#2B3D4E] text-white font-bold rounded-3xl shadow-xl shadow-[#2B3D4E]/20 hover:-translate-y-1 transition-all" href="#open-roles">View Open Roles</a>
              <a className="px-8 py-4 bg-white border border-gray-200 text-[#2B3D4E] font-bold rounded-3xl hover:bg-gray-50 transition-all" href="#values">Our Culture</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div 
              className="w-full aspect-[4/5] bg-center bg-cover rounded-3xl shadow-2xl relative z-10" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIt-oIDRadF4JAxLWMNhQINxrdaoRBMnwAv7YKRcMh-Nzh2h9BO8w7TwXjqA-2s0-IwzM0xFBdSuXJzE-Z_AA9cw8FdIqFXYbZ1IYTjxfDmfCzbpyTOxs6HHme_C379gT5V6_1xkjANvMxHqE2GYPobPKhDCNEaKyFiDDHK3C5Xj4dr0o81WNN7g8gayCm5v9pgo8icjveNCqJdVL6yIrwgyqbILDr1xQQvihGO5J9BUGiZQKlI7aYWrfUC9nT0tKZcZIrIQwHwkmL")'}}
            >
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#1ABC9C]/10 rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white px-6 lg:px-20" id="values">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[#1ABC9C] font-bold uppercase tracking-widest text-sm mb-4">Core Values</h2>
              <h3 className="text-4xl font-extrabold tracking-tight text-[#2B3D4E]">The Principles that Drive Us</h3>
            </div>
            <p className="text-[#2B3D4E]/70 max-w-sm">We blend corporate reliability with a tech-forward mindset to empower every team member.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'lightbulb', title: 'Innovation', desc: 'Leveraging the latest fintech to automate the mundane and focus on strategic high-level advisory.' },
              { icon: 'balance', title: 'Balance', desc: 'A remote-first culture that genuinely respects your boundaries. We measure impact, not hours at a desk.' },
              { icon: 'trending_up', title: 'Growth', desc: 'Clear, documented paths to leadership. We invest in your certifications, courses, and long-term career.' }
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-[#F9FAFA] hover:border-[#1ABC9C]/30 hover:shadow-xl hover:shadow-[#1ABC9C]/5 transition-all">
                <div className="w-12 h-12 rounded-3xl bg-[#2B3D4E] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-[#2C2C2C]">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Job Application Form */}
      <section className="py-24 px-6 lg:px-20 bg-white" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Join Our Team</h2>
            <p className="text-gray-600 text-lg">Apply now and we'll get back to you within 48 hours.</p>
          </div>

          <JobApplicationForm />
        </div>
      </section>
      {/* Benefits Section */}
      {/* <section className="py-24 bg-[#2B3D4E] text-white px-6 lg:px-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuON6z6ekh0TZFGlc3ygmUkOtn5uRISW2dH96OoC5veSb1k5ihRzI8pmjGKczVFi9BSST9TzzuSDvTCmaGm_LL0rv94GptPipaWz5OqL5wThVXkWad8YIT1OcCiiwWFm0prebvn2VKWj9LpNuyJTluDFjwCjBoC19-LvU3aDiM68nEBdVXTlm2nLRy5gkae5ETZLFCGp91QXan-p01CkF85PfzvM3ALXfC3CsZw-1_MH-7uCX_q3Gs99yrgrkTzftwxLojXAy_zpHz')"}}></div>
                </div>
                <div className="bg-[#25565D] aspect-[3/4] rounded-2xl p-6 flex flex-col justify-end">
                  <h5 className="text-2xl font-bold">100%</h5>
                  <p className="text-white/70 text-sm">Remote Flexibility</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-white/10 rounded-2xl p-6">
                  <span className="material-symbols-outlined text-4xl text-[#1ABC9C] mb-4 block">clinical_notes</span>
                  <h5 className="text-lg font-bold">Full Coverage</h5>
                  <p className="text-white/70 text-sm">Health, Dental, Vision</p>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-rSH_vMZU22q_Al6I0_QhMae9q9_68sflvEXi4G_kSfa8LsMPorntrMRFUQTS9b-wpDJnBPAfJRIzYtwaR3kDDSkVFRHOTKDbJ1TMSeTMlr8CGJ-vQDz0QOVwaSrlDDK8N5jzyKh0yajThsrSAxQ_NMSnsar0svHPAZ_ng8J0nn9ksY1ng6FWArYijb8Bijhl1ZhvXJvctxKlfInWZ9cukOdha4timQL7adyVWEfVjI5ACkgl9MFtyAQkPhHtETlsamhKVEc17twk')"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl font-extrabold tracking-tight leading-tight">Beyond the Paycheck: Why Join Us</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              We believe that happy, supported employees provide the best service to our clients. Our benefits package is designed to support your life, both at and away from your laptop.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Generous 401(k) Matching', desc: 'We match up to 5% of your salary to help you plan for a secure future.' },
                { title: 'Annual Learning Stipend', desc: '$2,500 annual budget for any courses, books, or certifications of your choice.' },
                { title: 'Unlimited PTO', desc: 'We trust you to manage your work and take the time you need to recharge.' }
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#1ABC9C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#1ABC9C] text-sm">check</span>
                  </div>
                  <div>
                    <h6 className="font-bold">{benefit.title}</h6>
                    <p className="text-sm text-white/60">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* Job Listings */}
      {/* <section className="py-24 bg-[#F9FAFA] px-6 lg:px-20" id="open-roles">
        <div className="max-w-5xl mx-auto ">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold tracking-tight mb-4 text-[#2B3D4E]">Open Opportunities</h3>
            <p className="text-gray-600">Join our growing team of financial innovators.</p>
          </div>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#10CAD6]">{job.department}</span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 uppercase">{job.type}</span>
                  </div>
                  <h4 className="text-xl font-extrabold group-hover:text-[#10CAD6] transition-colors text-[#25565D]">{job.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      {job.salary}
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-[#10CAD6] text-white font-bold rounded-xl hover:bg-[#10CAD6]/90 hover:scale-[1.02] active:scale-95 transition-all">Apply Now</button>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-white border border-dashed border-gray-300 rounded-3xl text-center">
            <h5 className="font-bold mb-2 text-[#25565D]">Don't see a perfect fit?</h5>
            <p className="text-gray-500 text-sm mb-6">We're always looking for exceptional talent to join our network.</p>
            <button className="text-[#25565D] font-bold hover:text-[#0ea9b1] underline underline-offset-4">Join our Talent Pool</button>
          </div>
        </div>
      </section> */}

      {/* CTA / Footer Lead Gen */}
      <section className="py-20 px-6 lg:px-20 bg-[#F9FAFA]" >
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#2B3D4E] p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Ready to Elevate Your Career?</h2>
            <p className="text-white/70 text-lg">Subscribe to our careers newsletter to get notified of new openings and firm insights.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input className="flex-1 w-full bg-white text-[#2B3D4E] placeholder:text-gray-500 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] shadow-sm" placeholder="Enter your email" type="email"/>
              <button className="px-8 py-4 bg-[#1ABC9C] text-white font-bold rounded-3xl hover:bg-[#1ABC9C]/90 shadow-xl shadow-[#1ABC9C]/20 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}