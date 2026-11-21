import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BlogPostItem } from '../../types';

interface BlogCardProps {
  post: BlogPostItem;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-xl transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{post.publishDate}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
        >
          <span>Read Analysis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
