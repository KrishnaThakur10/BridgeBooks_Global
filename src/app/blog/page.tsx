'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog posts - In production, fetch from database
  const blogPosts: BlogPost[] = [
    {
      slug: 'navigating-tax-season-2026',
      title: 'Navigating Tax Season 2026: Essential Strategies for Small Businesses',
      excerpt: 'Discover the latest tax changes and proven strategies to maximize deductions and minimize stress during tax season.',
      category: 'Tax Strategy',
      author: 'David Chen, CPA',
      date: '2026-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      featured: true,
      tags: ['Tax Planning', 'Small Business', 'Compliance']
    },
    {
      slug: 'choosing-right-accounting-software',
      title: 'Choosing the Right Accounting Software for Your Growing Business',
      excerpt: 'A comprehensive comparison of QuickBooks, Xero, and FreshBooks to help you make an informed decision for your business needs.',
      category: 'Technology',
      author: 'Sarah Williams, CMA',
      date: '2026-01-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      featured: true,
      tags: ['Software', 'Bookkeeping', 'Digital Transformation']
    },
    {
      slug: 'cash-flow-management-guide',
      title: 'Cash Flow Management: The Lifeline of Your Business',
      excerpt: 'Learn how to predict, monitor, and optimize your cash flow to ensure your business stays financially healthy.',
      category: 'Financial Planning',
      author: 'Marcus Thorne',
      date: '2026-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop',
      featured: false,
      tags: ['Cash Flow', 'Financial Planning', 'Business Growth']
    },
    {
      slug: 'outsourced-vs-inhouse-accounting',
      title: 'Outsourced vs In-House Accounting: What\'s Right for Your Business?',
      excerpt: 'Explore the pros and cons of outsourcing your accounting functions versus building an in-house team.',
      category: 'Business Strategy',
      author: 'Elena Rodriguez',
      date: '2025-12-28',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      featured: false,
      tags: ['Outsourcing', 'Cost Optimization', 'Strategy']
    },
    {
      slug: 'understanding-financial-statements',
      title: 'Understanding Financial Statements: A Beginner\'s Guide',
      excerpt: 'Demystify balance sheets, income statements, and cash flow statements with this comprehensive guide.',
      category: 'Education',
      author: 'David Chen, CPA',
      date: '2025-12-20',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop',
      featured: false,
      tags: ['Financial Literacy', 'Accounting Basics', 'Education']
    },
    {
      slug: 'preparing-for-year-end-audit',
      title: 'Preparing for Your Year-End Audit: A Complete Checklist',
      excerpt: 'Make your year-end audit smooth and stress-free with our comprehensive preparation checklist and expert tips.',
      category: 'Compliance',
      author: 'Sarah Williams, CMA',
      date: '2025-12-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
      featured: false,
      tags: ['Audit', 'Compliance', 'Year-End']
    }
  ];

  const categories = ['all', 'Tax Strategy', 'Technology', 'Financial Planning', 'Business Strategy', 'Education', 'Compliance'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ABC9C]/20 text-[#1ABC9C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-4">
              <span className="material-symbols-outlined text-sm">article</span>
              Insights & Resources
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
              Financial Insights for <span className="text-[#1ABC9C] italic">Modern Businesses</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
              Expert advice, industry trends, and actionable strategies to help you make smarter financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-between">
            <div className="flex-1 w-full md:max-w-md">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-[#1ABC9C] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="material-symbols-outlined text-[#1ABC9C] text-2xl sm:text-3xl">star</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url(${post.image})`}}></div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-[11px] sm:text-xs font-bold">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-3 group-hover:text-[#1ABC9C] transition-colors leading-snug">{post.title}</h3>
                    <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">person</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm">{post.author}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#1ABC9C] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {searchTerm ? 'Search Results' : selectedCategory === 'all' ? 'Latest Articles' : selectedCategory}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">{filteredPosts.length} articles</p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-background-light rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: `url(${post.image})`}}></div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="px-2 py-1 rounded-full bg-[#1ABC9C]/10 text-[#1ABC9C] text-[10px] font-bold uppercase">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-[#1ABC9C] transition-colors line-clamp-2 leading-snug">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 pt-4 border-t border-gray-200">
                      <span className="material-symbols-outlined text-sm">person</span>
                      <span className="font-semibold">{post.author.split(',')[0]}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-[#F9FAFA]">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#2B3D4E] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center">
          <div className='w-10 h-10 mb-3 mx-auto text-center rounded-full bg-[#1ABC9C]/20 flex items-center justify-center flex-shrink-0'>
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-[#1ABC9C]  block">mail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 sm:mb-4">Stay Updated</h2>
          <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8">Get the latest financial insights delivered to your inbox weekly</p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full bg-white text-[#2B3D4E] placeholder:text-gray-500 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] shadow-sm text-sm sm:text-base"
            />
            <button className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#1ABC9C] text-white font-bold rounded-xl hover:bg-[#17a08a] transition-all shadow-lg">
              Subscribe
            </button>
          </form>
          <p className="text-white/50 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}