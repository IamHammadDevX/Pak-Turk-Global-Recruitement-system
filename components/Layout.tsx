import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Layout;