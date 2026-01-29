import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 px-6 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-1 mb-8">
              <div className="bg-primary text-white p-2 rounded-lg pb-2.5 ">
                <img src="/logo.png" alt="BrigeBooksGlobal Logo" className="w-10 h-8"/>
              </div>
              <h2 className="text-xl font-extrabold text-[#2B3D4F] tracking-tight">
            BridgeBooks<span className="text-[#1ABC9C]">Global</span>
          </h2>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Modern financial infrastructure for the world's most ambitious companies. Founded on transparency, built on accuracy.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/bridgebooksglobal" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:text-accent transition-colors" >
                <svg className="w-4 h-4 fill-[#2B3D4F]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
              </Link>
              <Link href="https://www.instagram.com/bridgebooksglobal" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:text-accent transition-colors" >
                <svg className="w-4 h-4 fill-[#2B3D4F]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">Services</h4>
              <ul className="space-y-4 text-[12px] text-[#2B3D4F] font-semibold">
                <li><Link className="hover:text-accent transition-colors" href="#">Tax Planning</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">Bookkeeping</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">CFO Advisory</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">Payroll</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">Company</h4>
              <ul className="space-y-4 text-[12px] text-[#2B3D4F] font-semibold">
                <li><Link className="hover:text-accent transition-colors" href="/about-us">About Us</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">Our Team</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="/careers">Careers</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="/contact-us">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400">Office</h4>
              <p className="text-[12px] text-[#2B3D4F] font-semibold leading-relaxed">
                4, Regents Court,<br/>
                 Sopwith Way, <br/>
                Kingston Upon Thames KT2 5AG
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-400">
          <p>© 2026 BrigeBooks Global PVT. LTD.</p>
          <div className="flex gap-8">
            <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link>
            <Link className="hover:text-primary transition-colors" href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}