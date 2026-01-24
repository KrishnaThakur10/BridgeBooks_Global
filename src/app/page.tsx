'use client';

import Image from 'next/image';
import {sendInfo} from '@/lib/emailSender.tool';
import React from 'react'

const testimonials = [
  {
    name: 'Sarah Miller',
    title: 'CEO, Velocity Growth',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVk14Knk7v5EtXE1HUJJn86xX5cjfFRgWIJSqB4NulvK0iVJia4grCx5sOrFqjgJIQq8xzMBhJlqGONSP1uFOPoT0U7JaiFgYKEwYaOlIjxQSEVKH9F6O_qUgzizhFdzan3LAgNOTC-de44P_XGNB6iUU8_wBAqVxQ_AnFDKdqeavdnmW7lLDF9lcN3lGGUasigcDX6KkuAVwAy2FI9IoKF1cO1o1-FdQ5uZdPh3OC08ZqIX3FSsd9sqc0FkOr1JGE83tY2vSllCEl',
    quote: '"Partnering with BrigeBooks Global was the best decision we made in 2023. They didn\'t just clean up our books—they gave us the financial clarity to secure funding 3 months ahead of schedule."',
  },
  {
    name: 'Michael Chen',
    title: 'Founder, TechScale Solutions',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKYeSj7fnctVIHopXcW0g8B1JucaWyXXR6afRtn1ED_yH-zRK5wcjfytpJsHNPREhmlx7V2Yc9zGW1vBvrXPsOxwYBRHaRlnZMs7iWu0RoGSUJUE7HyfBQEUNOwzm8vc7kE7wrfX5b3JZoXD2NLCX_aR2Jy1kaKGR9q6XnoOIVmHLU7bCCr9TiuH2TL15hPgN2YvUko7iQe7R_3D4HRO95-0hmUZoy537RMop8_DgP2hgly_wqxcYknl0ELFJgt6762Fi71RdnLLIk',
    quote: '"Their team transformed our financial chaos into a well-organized system. We\'ve saved over $200K in unnecessary spending and redirected it to growth initiatives."',
  },
  {
    name: 'Jessica Rodriguez',
    title: 'CFO, Global Retail Corp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-bhrheRDlOoppCjq3-hMWmQLdlgcdRRUiPNQmfVdhqQ72EBKZunxxiNE3UeFEHRedmR4QvZpUbdrce29JQZh2W2ofESUL75DlR1muqIjvjgPcCxEXCFxL7IA-pdGxb5sn-6UCgH2L-nF2xFqL8aBU20w1_FxVPvzLHsEbk9Ommo_kyg66aJsJGnu7wdddzTYGIfGq2vi0I657Xet4Y_1veBIuzbO9uMHO6GI2LUDMmWri44NBqGBznMm0q3Nwuw-Vc-d-3oKQNEhY',
    quote: '"The proactive quarterly reviews mean we never miss tax optimization opportunities. Their insights have directly contributed to improving our bottom line by 18% year-over-year."',
  },
];

export default function Home() {
  
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Full-Cycle Accounting',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.phone.trim()) {
      alert('Please enter your email and phone.');
      return;
    }

    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
      }),
    });
  alert('Thank you! We will contact you soon.');
    // sendInfo({
    //   fullName: formData.fullName,
    //   email: formData.email,
    //   phone: formData.phone,
    //   service: formData.service,
    // });
  };
  

  // Testimonial handling
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-6 md:px-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg fill="none" height="600" viewBox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="200" r="300" stroke="white" strokeWidth="2"></circle>
            <circle cx="400" cy="200" r="200" stroke="white" strokeWidth="2"></circle>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.0] tracking-tighter">
              Outsourced Accounting <span className="text-[#1ABC9C]">Expertise</span> for Growth.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl font-medium leading-[1.4]">
              Scalable financial management to fuel your company's expansion without the executive overhead. We handle the books, you handle the vision.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-2 border-[#27394B] object-cover" alt="Professional accountant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-bhrheRDlOoppCjq3-hMWmQLdlgcdRRUiPNQmfVdhqQ72EBKZunxxiNE3UeFEHRedmR4QvZpUbdrce29JQZh2W2ofESUL75DlR1muqIjvjgPcCxEXCFxL7IA-pdGxb5sn-6UCgH2L-nF2xFqL8aBU20w1_FxVPvzLHsEbk9Ommo_kyg66aJsJGnu7wdddzTYGIfGq2vi0I657Xet4Y_1veBIuzbO9uMHO6GI2LUDMmWri44NBqGBznMm0q3Nwuw-Vc-d-3oKQNEhY"/>
                <img className="w-12 h-12 rounded-full border-2 border-[#27394B] object-cover" alt="Financial advisor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-BW_MagYpwIlA-o4VuqKav4s1ktCSHiMJsmKkjiefjia9O5Y_7zkOOgfuZ68zWuu0ghdbcNjgT9eART8FupFr-0z5IactcPCeHQWTlxSvsERaMdwKTMYB8Gs6klwp245qgX26Du_90A7iZzOPyNcIr7anLPVpnBQWfLWmiaRcR_8Z2D5pe9somhtKkcvltIWIVexiYDuWhjYfA-sMnbdqYnCYQrf_h4F59soPx4GeXiNKE9JSUFejKcvQyWUM5aj1G0pi3TkPlAlu"/>
                <img className="w-12 h-12 rounded-full border-2 border-[#27394B] object-cover" alt="Professional auditor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKYeSj7fnctVIHopXcW0g8B1JucaWyXXR6afRtn1ED_yH-zRK5wcjfytpJsHNPREhmlx7V2Yc9zGW1vBvrXPsOxwYBRHaRlnZMs7iWu0RoGSUJUE7HyfBQEUNOwzm8vc7kE7wrfX5b3JZoXD2NLCX_aR2Jy1kaKGR9q6XnoOIVmHLU7bCCr9TiuH2TL15hPgN2YvUko7iQe7R_3D4HRO95-0hmUZoy537RMop8_DgP2hgly_wqxcYknl0ELFJgt6762Fi71RdnLLIk"/>
              </div>
              <p className="text-sm font-semibold"><span className="text-[#1ABC9C]">500+</span> Businesses Trust Us</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-[#2B3D4F] relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-[#2B3D4F]">Request Your Strategy Call</h3>
            <p className="text-gray-500 text-sm mb-6">Get a personalized growth roadmap in 24 hours.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <input name="fullName" onChange={handleChange} value={formData.fullName} className="w-full rounded-3xl p-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] text-gray-400  text-sm transition-all" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone Number*</label>
                    <input 
                      name="phone" 
                      onChange={handleChange}
                      value={formData.phone} 
                      required
                      className="w-full rounded-3xl p-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 text-gray-400  text-sm transition-all" 
                      placeholder="+1 (555) 000-0000" 
                      type="tel"
                    />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Work Email*</label>
                <input name="email" required onChange={handleChange} value={formData.email} className="w-full rounded-3xl p-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] text-gray-400  text-sm transition-all" placeholder="john@acme.com" type="email"/>
              </div>
              <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Service Interest</label>
                    <select 
                      name="service" 
                      className="w-full rounded-3xl p-3 border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] text-gray-400  text-sm transition-all appearance-none"
                      onChange={handleChange} 
                      value={formData.service}
                    >
                      <option>Full-Cycle Accounting</option>
                      <option>Fractional CFO</option>
                      <option>Payroll Management</option>
                      <option>Tax Strategy &amp; Prep</option>
                      <option>Audit Support</option>
                      <option>Other</option>
                  </select>
                  </div>
              <button type="submit" className="w-full bg-[#1ABC9C] hover:bg-[#16a085] text-white font-bold py-4 rounded-3xl transition-all shadow-lg shadow-[#1ABC9C]/20 mt-2">
                Get Free Consultation
              </button>
              <p className="text-center text-[11px] text-gray-400">No commitment required. 100% confidential financial review.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-20 bg-[#F9FAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h4 className="text-[#1ABC9C] font-bold uppercase tracking-widest text-sm mb-3">Expertise</h4>
              <h2 className="text-[#2B3D4F] text-4xl md:text-5xl font-extrabold tracking-tight leading-14">Comprehensive Financial Architecture.</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">From daily bookkeeping to high-level strategic planning, we cover every aspect of your fiscal health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'calculate', title: 'Tax Planning', desc: 'Strategic optimization to minimize liability and maximize retained earnings for year-end growth.' },
              { icon: 'query_stats', title: 'Real-time Bookkeeping', desc: 'Always-on tracking with automated data sync, ensuring your dashboard is never out of date.' },
              { icon: 'person_celebrate', title: 'Fractional CFO', desc: 'Executive-level advisory and financial modeling to navigate complex funding or M&A cycles.' },
              { icon: 'payments', title: 'Payroll Management', desc: 'Fully compliant, automated payroll processing for domestic and international teams.' },
              { icon: 'article', title: 'Financial Reporting', desc: 'Deep-dive monthly insights that translate rows of data into actionable business intelligence.' },
              { icon: 'verified_user', title: 'Audit Support', desc: 'End-to-end preparation and liaison for internal and external regulatory audits.' },
            ].map((service, i) => (
              <div key={i} className="group bg-white p-10 rounded-2xl border border-gray-100 hover:border-[#1ABC9C]/30 hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-50 group-hover:bg-[#1ABC9C]/10 text-[#2B3D4F]  w-12 h-12 rounded-full flex items-center justify-center mb-8 transition-colors">
                  <span className="material-symbols-outlined text-2xl group-hover:text-[#1ABC9C]  text-[#2B3D4F]">{service.icon}</span>
                </div>
                <h3 className="text-[#2B3D4F] text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">{service.desc}</p>
                <a className="text-[#1ABC9C] text-xs font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkJurSiR7M4pmdrKMEra2O4liZ5lehK7tOqZv0fwQXF7NZlr-nrFmdHpGkOV9PhO6dhB_GyWL35OXPuOciOqbPN7lj68m3UDDvXVVVx5vyBcSQTM4emwkQjeUGFF1S1upKWe4dju5GQ_ZAf0HTNQXBF4i_SjrJnB0_WhprWB6VWZneg10crAqQQebXQ6s0ZWhKr_P9DFz9YzOsEoBG6wkLh5pp4uwICl00l0NycTHTtXu1ckC0O8OlYFb5PUivEhOaYqthVO3gy0gi')"}}></div>
            <div className="absolute -bottom-8 -right-8 bg-[#2B3D4F] text-[white] bg-[#2A3B4D] p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-2">99.8%</p>
              <p className="text-[10px] font-medium text-white/70 uppercase tracking-widest">Accuracy Rating across all audited accounts</p>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1ABC9C]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div>
              <h4 className="text-[#1ABC9C] font-bold uppercase tracking-widest text-[10px] mb-3">The Advantage</h4>
              <h2 className="text-[#2B3D4F] text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-14">Why Modern Firms Partner with Us.</h2>
              <p className="text-gray-500 text-base leading-relaxed">Generic accounting firms are reactive. We are proactive. We don't just record the past; we architect your future financial success.</p>
            </div>

            <ul className="space-y-6">
              {[
                { title: 'Technology-Driven Accuracy', desc: 'We utilize AI-powered reconciliation tools to eliminate human error and reduce turnaround by 40%.' },
                { title: 'Dedicated Account Managers', desc: 'No ticket systems. You get a direct line to a senior CPA who understands your industry inside out.' },
                { title: 'Proactive Tax Strategy', desc: "We don't wait for April. Quarterly reviews ensure you're always optimized for tax season." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-[#1ABC9C]/10 text-[#1ABC9C] p-1.5 rounded-full mt-1">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="text-[#2B3D4F] font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="bg-[#2B3D4F] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center gap-3 text-sm">
              Meet The Team <span className="material-symbols-outlined text-lg">group</span>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-20 bg-[#F9FAFA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl text-[#2B3D4F] font-extrabold tracking-tight mb-4">A Seamless Onboarding Journey</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Get fully integrated with our premium accounting stack in less than 7 days.</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { num: '01', title: 'Discovery Call', desc: 'A 30-minute deep dive into your current challenges and future goals.' },
              { num: '02', title: 'Systems Audit', desc: 'We review your existing tech stack and clean up historical discrepancies.', accent: true },
              { num: '03', title: 'Full Integration', desc: 'Connection of banking, payroll, and merchant accounts to our secure hub.' },
              { num: '04', title: 'Live Insights', desc: 'Receive your first monthly financial insight packet and strategic forecast.', icon: true },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`${step.icon ? 'bg-[#1ABC9C] text-white ' : 'bg-white border-4 border-[#F9FAFA] border-background-light'} shadow-xl ${step.accent ? 'text-[#1ABC9C]' : 'text-[#2B3D4F]'}  w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-20`}>
                  {step.icon ? (
                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                  ) : (
                    <span className="text-lg font-black ">{step.num}</span>
                  )}
                </div>
                <h4 className=" text-[#2B3D4F] font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-500 text-[11px] text-center px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2B3D4F] rounded-[2rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1ABC9C]/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="size-20 rounded-2xl overflow-hidden mb-8 border-4 border-white/10 mx-auto lg:mx-0">
                  <img className="w-full h-full object-cover" alt={testimonials[currentTestimonial].name} src={testimonials[currentTestimonial].image}/>
                </div>
                <div className="flex gap-1 mb-4 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[#1ABC9C] fill-1 text-sm">star</span>
                  ))}
                </div>
                <p className="text-xl font-bold">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{testimonials[currentTestimonial].title}</p>
              </div>

              <div className="lg:w-2/3">
                <span className="material-symbols-outlined text-5xl text-[#1ABC9C]/30 mb-6">format_quote</span>
                <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-10 min-h-[160px] flex items-center">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                <div className="flex gap-4">
                  <button onClick={handlePrevTestimonial} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2B3D4F] transition-all">
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button onClick={handleNextTestimonial} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2B3D4F] transition-all">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}