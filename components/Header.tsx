'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact-us', label: 'Contact Us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <div className="bg-primary text-[#2B3D4F] p-1.5 sm:p-2 pb-2 sm:pb-2.5 rounded-lg">
            <img src="/logo.png" alt="BrigeBooksGlobal Logo" className="w-8 h-6 sm:w-10 sm:h-8"/>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#2B3D4F] tracking-tight">
            BridgeBooks<span className="text-[#1ABC9C]">Global</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              className={`text-sm font-semibold transition-colors ${isActive(link.href) ? 'text-[#1ABC9C]' : 'text-[#263748] hover:text-[#1ABC9C]'}`} 
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/contact-us" className="hidden lg:block">
          <button className="bg-[#1ABC9C] hover:bg-[#16a085] text-white px-4 xl:px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-[#1ABC9C]/20 whitespace-nowrap">
            Get Free Consultation
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2B3D4F] hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 sm:px-6 py-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 text-base font-semibold transition-colors rounded-lg ${
                  isActive(link.href) 
                    ? 'text-[#1ABC9C] bg-[#1ABC9C]/5' 
                    : 'text-[#263748] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <button className="w-full bg-[#1ABC9C] hover:bg-[#16a085] text-white px-6 py-3 rounded-2xl text-base font-bold transition-all shadow-lg shadow-[#1ABC9C]/20">
                Get Free Consultation
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}