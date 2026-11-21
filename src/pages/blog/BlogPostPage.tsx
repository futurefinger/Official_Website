import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, Tag, Share2, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEOHead } from '../../components/common/SEOHead';
import { CTASection } from '../../components/sections/CTASection';
import { blogData } from '../../data/blogData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org BlogPosting schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: '2026-11-18',
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Future Finger Technologies'
    }
  };

  return (
    <div className="py-12 bg-slate-950">
      <SEOHead
        title={`${post.title} - Engineering Insights`}
        description={post.excerpt}
        ogType="article"
        schemaData={articleSchema}
        keywords={[...post.tags, post.category, 'Future Finger Technologies']}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', path: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishDate}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">
              FF
            </div>
            <div>
              <div className="font-semibold text-white">{post.author}</div>
              <div className="text-[11px] text-slate-400">{post.authorRole}</div>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
            Executive Summary & Key Takeaways
          </span>
          <div className="space-y-2">
            {post.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-10 mt-12 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-500 mr-2" />
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>

      <div className="mt-20">
        <CTASection
          title="Looking to Implement These Security or AI Architectures?"
          subtitle="Our engineering pods design and build these exact systems for enterprise partners."
        />
      </div>
    </div>
  );
};
