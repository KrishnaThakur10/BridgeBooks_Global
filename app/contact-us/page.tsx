'use client';

import { useState, FormEvent } from 'react';
import { COUNTRIES } from '@/lib/countries';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      country: formData.get('country'),
      service: formData.get('service'),
      challenges: formData.get('challenges'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Thank you! We will contact you within 4 business hours.');
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 pb-28 bg-[#F9FAFA]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Trust & Info */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-xs font-bold uppercase tracking-wider">Growth Ready</span>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#2B3D4E]">
                Expert Accounting, <br/>
                <span className="text-[#1ABC9C]">Engineered</span> for Growth.
              </h1>
              <p className="text-lg text-[#2B3D4E]/70 leading-relaxed max-w-xl">
                Stop drowning in spreadsheets. Speak with a senior partner today and discover how our outsourced solutions streamline your global operations.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-[#2B3D4E]/5 flex items-center justify-center text-[#2B3D4E]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#2B3D4E]">Global Headquarters</h4>
                  <p className="text-[#2B3D4E]/60">1200 Financial District, Suite 400<br/>San Francisco, CA 94104</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-[#2B3D4E]/5 flex items-center justify-center text-[#2B3D4E]">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#2B3D4E]">Direct Line</h4>
                  <p className="text-[#2B3D4E]/60">+1 (800) 555-FINANCE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-[#2B3D4E]/5 flex items-center justify-center text-[#2B3D4E]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#2B3D4E]">Partner Support</h4>
                  <p className="text-[#2B3D4E]/60">growth@finscale-accounting.com</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2B3D4E]">
                <span className="material-symbols-outlined text-[#2B3D4E]">verified</span> ISO 27001
              </div>
              <div className="flex items-center gap-2 font-bold text-sm text-[#2B3D4E]">
                <span className="material-symbols-outlined text-[#2B3D4E]">stars</span> TOP RATED
              </div>
              <div className="flex items-center gap-2 font-bold text-sm text-[#2B3D4E]">
                <span className="material-symbols-outlined text-[#2B3D4E]">security</span> AICPA SECURE
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1ABC9C]/5 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold mb-2 text-[#2B3D4E]">Schedule Free Consultation</h3>
                <p className="text-[#2B3D4E]/60">Fill out the form below and our strategy team will reach out within 4 business hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Full Name</label>
                    <input 
                      name="fullName" 
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 transition-all" 
                      placeholder="Jane Cooper" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Work Email</label>
                    <input 
                      name="email" 
                      required
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 transition-all" 
                      placeholder="jane@company.com" 
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Phone Number</label>
                    <input 
                      name="phone" 
                      required
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 transition-all" 
                      placeholder="+1 (555) 000-0000" 
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Company Name</label>
                    <input 
                      name="company" 
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 transition-all" 
                      placeholder="Acme Logistics" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Country</label>
                    <select 
                      name="country" 
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] text-gray-400 transition-all appearance-none"
                    >
                      <option value="">Select a country</option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2B3D4E] px-1">Service Interest</label>
                    <select 
                      name="service" 
                      className="w-full h-14 px-5 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] text-gray-400 transition-all appearance-none"
                    >
                      <option>Full-Cycle Accounting</option>
                      <option>Fractional CFO</option>
                      <option>Payroll Management</option>
                      <option>Tax Strategy &amp; Prep</option>
                      <option>Audit Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#2B3D4E] px-1">Tell us about your challenges</label>
                  <textarea 
                    name="challenges" 
                    className="w-full px-5 py-4 rounded-3xl border border-gray-200 bg-[#F9FAFA] focus:ring-1 focus:ring-[#2596be]/20 focus:outline-[#2596be] placeholder-gray-400 transition-all resize-none" 
                    placeholder="How can we help you scale today?" 
                    rows={4}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    className="w-full h-16 bg-[#1ABC9C] hover:bg-[#16a085] text-white font-extrabold text-lg rounded-3xl shadow-lg shadow-[#1ABC9C]/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#2B3D4E]/50 font-medium">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    No spam. Your data is encrypted and secure.
                  </div>
                  {message && (
                    <div className={`mt-4 p-4 rounded-xl text-center text-sm font-medium ${message.includes('Thank you') ? 'bg-[#1ABC9C]/10 text-[#1ABC9C]' : 'bg-red-50 text-red-600'}`}>
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className=" w-full h-[400px] relative bg-[#F9FAFA] overflow-hidden border-t border-gray-200">
        <div 
          className="absolute inset-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-700" 
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLU_FvK2PzEmTrXs2e7tTKrp9Zy7NzIoB5B5Hx0UY6Acacy7TfbQJrPYUWiQ7uZivWxxfGj2zwTHHNa9YhLtum5AdnumHZ9SOqT0kEWPd7vExNdXETiY_Mub9AuPKdJ0JpsV17ePiVQEypV1BozCfVoRPNQZshGpUxg1RGQZUNAiK-ainTIcVQaLtrjJA5qFXMUNSj16wf_ri6AOIPfxBMOiDJ0TBX0dpXL37NlMcUhXgMYLAmYcGmgjCF1-K4GDq4ZMtUu8NwzGbA')", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFA] to-transparent h-20"></div>
        <div className="absolute bottom-8 left-8 lg:left-24 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-sm">
          <h5 className="text-[#2B3D4E] font-bold text-sm mb-1 uppercase tracking-widest">Office Location</h5>
          <p className="text-[#2B3D4E] text-sm font-medium">1200 Financial District, San Francisco, CA</p>
          <a className="text-[#1ABC9C] text-xs font-bold mt-3 inline-flex items-center gap-1 hover:underline" href="#">
            Open in Google Maps <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </section>
    </>
  );
}