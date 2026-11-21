import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../footer/Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { BackToTop } from '../common/BackToTop';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};
