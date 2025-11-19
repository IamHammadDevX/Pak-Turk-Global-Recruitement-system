import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false, className = '' }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 relative inline-block ${
        className.includes('text-white') ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
        <span className="absolute bottom-1 left-0 w-full h-2 bg-pakGreen/20 -z-10 rounded-full"></span>
      </h2>
      {subtitle && <p className={`text-lg max-w-2xl mx-auto ${
        className.includes('text-white') ? 'text-slate-300' : 'text-slate-600'
      }`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;