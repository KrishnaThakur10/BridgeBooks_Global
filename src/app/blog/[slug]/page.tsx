import Link from 'next/link';

interface BlogPostData {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

// Sample blog post data - In production, fetch from database
const blogPostsData: { [key: string]: BlogPostData } = {
  'navigating-tax-season-2026': {
    title: 'Navigating Tax Season 2026: Essential Strategies for Small Businesses',
    excerpt: 'Discover the latest tax changes and proven strategies to maximize deductions and minimize stress during tax season.',
    category: 'Tax Strategy',
    author: 'David Chen, CPA',
    authorBio: 'David is a Managing Partner with over 15 years of experience in corporate tax strategy. Former Deloitte specialist focused on tech firms.',
    date: '2026-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    tags: ['Tax Planning', 'Small Business', 'Compliance', 'IRS'],
    content: `
Tax season 2026 brings significant changes that every small business owner needs to understand. With new regulations and updated deduction limits, staying informed is more critical than ever.

## Key Changes for 2026

The IRS has introduced several important updates this year that directly impact small businesses:

### 1. Increased Standard Deduction Limits

The standard deduction has increased to $15,000 for single filers and $30,000 for married couples filing jointly. This represents a 5.4% increase from 2025, adjusting for inflation.

### 2. Section 179 Deduction Updates

Small businesses can now deduct up to $1.22 million in qualifying equipment and property purchases, up from $1.16 million in 2025. This is an excellent opportunity to invest in business growth while reducing taxable income.

### 3. New Digital Asset Reporting Requirements

If your business deals with cryptocurrency or other digital assets, new reporting requirements now mandate detailed transaction records. Failure to comply can result in penalties ranging from $250 to $25,000.

## Strategic Tax Planning Tips

### Start Early with Quarterly Estimates

Don't wait until April to think about taxes. Accurate quarterly estimates can help you avoid underpayment penalties and manage cash flow more effectively.

**Pro Tip:** Use the IRS's new online estimation tool to calculate your quarterly payments based on real-time business performance.

### Maximize Retirement Contributions

Contributing to SEP-IRAs or Solo 401(k)s remains one of the most effective tax reduction strategies. For 2026, you can contribute up to $69,000 (or $76,500 if you're 50 or older).

### Document Everything

The IRS is increasing audit rates for businesses reporting over $400,000 in gross receipts. Maintain meticulous records of:

- All business expenses with receipts
- Mileage logs for business travel
- Home office usage (if claiming the deduction)
- Equipment purchases and depreciation schedules

## Common Deductions Small Businesses Miss

Many small business owners leave money on the table by overlooking these deductions:

1. **Professional Development:** Courses, certifications, and industry conferences are fully deductible.

2. **Health Insurance Premiums:** Self-employed individuals can deduct 100% of health insurance premiums.

3. **Startup Costs:** You can deduct up to $5,000 in startup costs in your first year, with remaining costs amortized over 15 years.

4. **Bad Debts:** If clients haven't paid invoices, you may be able to write off these as bad debts.

5. **Bank Fees:** All business banking fees, credit card processing fees, and merchant service charges are deductible.

## Red Flags That Trigger Audits

While audits are sometimes random, certain activities increase your risk:

- **Disproportionate Deductions:** If your deductions seem unusually high compared to your income.
- **Cash-Heavy Business:** Businesses dealing primarily in cash face more scrutiny.
- **Round Numbers:** Always use exact figures rather than rounding to the nearest hundred or thousand.
- **Home Office Deduction:** While legitimate, this remains a common audit trigger. Ensure your home office is used exclusively for business.

## Working with a Professional

The tax code grows more complex each year. Consider these scenarios where professional help is essential:

- Your business grosses over $100,000 annually
- You're planning major equipment purchases
- You're considering entity structure changes (LLC to S-Corp, etc.)
- You have employees or contractors
- You operate in multiple states

## Timeline for Tax Season 2026

Mark these critical dates on your calendar:

- **January 31:** Deadline for W-2 and 1099 forms
- **March 15:** S-Corp and Partnership return deadline
- **April 15:** Individual and C-Corp return deadline
- **Quarterly:** Estimated tax payment deadlines (April 15, June 15, September 15, January 15)

## Conclusion

Tax season doesn't have to be stressful. By staying informed about regulatory changes, maintaining organized records, and planning strategically throughout the year, you can minimize your tax burden while ensuring full compliance.

Remember: The best tax strategy is one that's implemented consistently, not scrambled together at the last minute. Start planning now for a smoother, more profitable tax season.

---

**Need help with your tax strategy?** Our team of certified CPAs specializes in small business tax planning and compliance. [Schedule a free consultation](/contact-us) to discuss your specific situation.
    `
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      slug: 'understanding-financial-statements',
      title: 'Understanding Financial Statements: A Beginner\'s Guide',
      category: 'Education'
    },
    {
      slug: 'cash-flow-management-guide',
      title: 'Cash Flow Management: The Lifeline of Your Business',
      category: 'Financial Planning'
    },
    {
      slug: 'preparing-for-year-end-audit',
      title: 'Preparing for Your Year-End Audit: A Complete Checklist',
      category: 'Compliance'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-bold mb-6 sm:mb-8 hover:gap-3 transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
            <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-bold">{post.category}</span>
            <span className="text-gray-500 text-xs sm:text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-5 sm:mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <p className="font-bold text-primary">{post.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 -mt-6 sm:-mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center" style={{backgroundImage: `url(${post.image})`}}></div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:text-primary prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary prose-strong:font-bold
              prose-ul:my-6 prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/<br\/><br\/>/g, '</h2>').replace(/### /g, '<h3>') }}
          />
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-gray-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">person</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">About {post.author}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{post.authorBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 border-y border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-bold text-lg">Share this article</h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">link</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition-all flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-all flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map(relatedPost => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 inline-block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm mt-4">
                    Read Article
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Need Expert Financial Guidance?</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Our team of certified CPAs is ready to help you navigate complex financial challenges.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}