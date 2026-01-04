import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.terms.title}</h1>
        <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-4">{t.terms.lastUpdated}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p className="text-lg">{t.terms.intro}</p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section1Title}</h2>
            <p>{t.terms.section1Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section2Title}</h2>
            <p>{t.terms.section2Content}</p>
          </div>
          
           <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section3Title}</h2>
            <p>{t.terms.section3Content}</p>
          </div>

           <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section4Title}</h2>
            <p>{t.terms.section4Content}</p>
          </div>

           <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section5Title}</h2>
            <p>{t.terms.section5Content}</p>
          </div>

           <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.terms.section6Title}</h2>
            <p>{t.terms.section6Content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;