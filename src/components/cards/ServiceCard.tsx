import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Layout, 
  Smartphone, 
  Code, 
  CloudLightning, 
  Cpu, 
  Bot, 
  Users, 
  Layers, 
  ShoppingBag, 
  Network, 
  Palette, 
  Search, 
  Server, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Smartphone,
  Code,
  CloudLightning,
  Cpu,
  Bot,
  Users,
  Layers,
  ShoppingBag,
  Network,
  Palette,
  Search,
  Server,
  Wrench,
  ShieldCheck,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Code;

  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-400 transition-colors">
            0{service.id.length % 9 + 1}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-400 border border-slate-800 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all pt-3 border-t border-slate-800/60"
      >
        <span>Explore Architecture & Scope</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
