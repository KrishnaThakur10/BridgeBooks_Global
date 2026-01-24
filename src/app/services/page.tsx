export default function Services() {
  const services = [
    {
      icon: 'account_balance_wallet',
      title: 'Outsourced Accounting',
      description: 'Complete end-to-end financial oversight. We manage your general ledger, accounts payable/receivable, and internal controls with precision.'
    },
    {
      icon: 'history_edu',
      title: 'Bookkeeping',
      description: 'Real-time transaction tracking and bank reconciliation. Ensure your records are audit-ready and accurate every single day.'
    },
    {
      icon: 'payments',
      title: 'Payroll Solutions',
      description: 'Stress-free payroll processing, tax compliance, and benefit administration. Automated systems that scale with your headcount.'
    },
    {
      icon: 'calculate',
      title: 'Tax Strategy',
      description: 'Proactive tax planning designed to maximize credits and deductions. We help you navigate complex nexus and international tax issues.'
    },
    {
      icon: 'bar_chart',
      title: 'Financial Reporting',
      description: 'Customized dashboards and insightful data visualizations. Turn raw numbers into strategic advantages for your board and team.'
    },
    {
      icon: 'psychology',
      title: 'Virtual CFO',
      description: 'High-level advisory and fractional leadership. Strategic planning, cash flow forecasting, and fundraising support for scaling firms.'
    }
  ];

  const features = [
    {
      icon: 'verified',
      title: 'CPA Certified',
      description: 'Every account is overseen by a licensed professional.'
    },
    {
      icon: 'bolt',
      title: 'Real-Time Data',
      description: 'Access your financial status 24/7 through our portal.'
    },
    {
      icon: 'lock',
      title: 'Bank-Grade Security',
      description: 'Your sensitive financial data is encrypted and protected.'
    },
    {
      icon: 'groups',
      title: 'Scale Ready',
      description: 'Our team expands as your operations grow globally.'
    }
  ];

  return (
    <main className="min-w-full bg-[#F9FAFA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 ">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[#1ABC9C] rounded-full bg-[#1ABC9C]/10 text-xs font-bold uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-sm text-[#1ABC9C]">trending_up</span>
                Strategic Growth Partners
              </div>
              <h1 className="text-[#2B3D4F] text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-[#2B3D4F] to-[#237873] bg-clip-text text-transparent" >Modern Financial</span><span className="bg-gradient-to-r from-[#247370] to-[#1BB598] bg-clip-text text-transparent"> Intelligence</span> for Scaling Teams.
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[540px]">
                We bridge the gap between traditional accounting and high-growth strategy. Optimize your operations with tech-enabled bookkeeping and Virtual CFO insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex min-w-[200px] items-center justify-center rounded-3xl h-14 px-8 bg-[#2B3D4E] text-white text-base font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Book Strategy Call
                </button>
                <button className="flex min-w-[200px] items-center justify-center rounded-3xl h-14 px-8 border-2 border-[#2B3D4E]/10 bg-white text-[#2B3D4E] text-base font-bold hover:bg-slate-50 transition-colors">
                  Explore Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 size-64 bg-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 size-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div 
                className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-3xl shadow-2xl relative z-10 overflow-hidden" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV0HfWV17g6cNbJZroHwjVZxvzCl00Pa7fDTnHq4xWzFG9k-XrkSS9sSPvlkxQJLMvpcnboXgSdHrPLuvRuI5f5v1dzC1Utmbsx-Ml9KjIF1iI9k-k8QpXj1MjQNYwUQMFSFCMF4HLuRBet_wzYUOdYeXO1XMHJvj0uHODgaMaixPORI7VFexErumb-ckARVX2uoSNa2wyAbEmcCekls7K5o41QExPqU2-7bh9yuJdORsXoLrB2O_rpepbzqed26kYcDQCOysSWNpZ')"}}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 py-12">
          <h2 className="text-[#2B3D4E] text-3xl md:text-4xl font-normal tracking-tight">Core Financial Infrastructure</h2>
          <div className="h-1.5 w-24 bg-[#10BB9D] rounded-full"></div>
          <p className="text-slate-500 max-w-xl text-base">Comprehensive outsourced solutions tailored for organic SEO growth and long-term business scalability.</p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="size-14 rounded-3xl bg-background-light flex items-center justify-center text-[#10BB9D] group-hover:bg-[#10BB9D] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-[#2B3D4E] text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <a className="flex items-center gap-2 text-[#10BB9D] font-bold text-sm hover:gap-3 transition-all" href="#">
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <section className="py-20">
          <div className="bg-[#2B3D4E] rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,0 L100,0 L100,100 Z" fill="white"></path>
              </svg>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-4xl font-normal leading-tight">Why Choose the Hub for Your Growth?</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We combine human expertise with predictive analytics. Our platform doesn't just record history; it helps you write your future.
                </p>
                <button className="bg-[#10BB9D] text-white px-8 py-4 rounded-3xl font-bold w-fit hover:bg-white hover:text-[#2B3D4E] transition-all shadow-lg shadow-[#2B3D4E]/20">
                  Partner With Us
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[#10BB9D] text-3xl mb-4 block">{feature.icon}</span>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}