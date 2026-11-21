import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { BlogCard } from '../../components/cards/BlogCard';
import { CTASection } from '../../components/sections/CTASection';
import { blogData } from '../../data/blogData';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'AI & Automation', 'Enterprise Tech', 'Cloud & Architecture'];

  const filteredPosts = selectedCategory === 'All'
    ? blogData
    : blogData.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title="Engineering Insights & Technical Blog - Future Finger Technologies"
        description="Deep-dive technical articles on kernel-level cybersecurity, deterministic AI agent orchestration, and modern cloud architecture."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog / Insights' }]} />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs text-cyan-300 font-mono mb-4">
            ENGINEERING DISPATCHES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Insights & Systems Research
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-5 leading-relaxed">
            Written directly by our software architects, systems programmers, and cyber defense researchers. No generic content—only practical production insights.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  );
};
