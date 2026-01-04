import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.privacy.title}</h1>
        <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-4">{t.privacy.lastUpdated}</p>
        
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p className="text-lg">{t.privacy.intro}</p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section1Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section1Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section2Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section2Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section3Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section3Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section4Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section4Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section5Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section5Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section6Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section6Content}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">{t.privacy.section7Title}</h2>
            <p className="whitespace-pre-line">{t.privacy.section7Content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;