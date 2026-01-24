'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 md:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary text-[#2B3D4F] p-2 rounded-lg">
            {/* <span className="material-symbols-outlined block text-white bg-[#2B3D4F] text-xl">account_balance</span> */}
            <img src="/logo.png" alt="BrigeBooksGlobal Logo" className="w-10 h-10"/>
          </div>
          <h2 className="text-xl font-extrabold text-[#2B3D4F] tracking-tight">
            BridgeBooks<span className="text-[#1ABC9C]">Global</span>
          </h2>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/">
            Home
          </Link>
          <Link className={`text-sm font-semibold transition-colors ${isActive('/services') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/services">
            Services
          </Link>
          <Link className={`text-sm font-semibold transition-colors ${isActive('/about-us') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/about-us">
            About Us
          </Link>
          <Link className={`text-sm font-semibold transition-colors ${isActive('/careers') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/careers">
            Careers
          </Link>
          <Link className={`text-sm font-semibold transition-colors ${isActive('/blog') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/blog">
            Blog
          </Link>
          <Link className={`text-sm font-semibold transition-colors ${isActive('/contact-us') ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} href="/contact-us">
            Contact Us
          </Link>
        </nav>
        <Link href="/contact-us">
        <button className="bg-[#1ABC9C] hover:bg-[#16a085] text-white px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-[#1ABC9C]/20">
          Get Free Consultation
        </button>
        </Link>
      </div>
    </header>
  );
}