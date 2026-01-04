import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Trash2, Smartphone, Mail, AlertTriangle } from "lucide-react";

const DataDeletion: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-4">
          <Trash2 className="w-8 h-8 text-red-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.deletion.title}
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">{t.deletion.intro}</p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-4">
          {t.deletion.howToTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Method 1: App */}
          <div className="bg-slate-950/50 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <Smartphone className="w-6 h-6" />
              <h3 className="text-lg font-bold">{t.deletion.appMethodTitle}</h3>
            </div>
            <p className="text-slate-300 whitespace-pre-line leading-relaxed">
              {t.deletion.appMethodContent}
            </p>
          </div>

          {/* Method 2: Email */}
          <div className="bg-slate-900 rounded-xl p-6 border border-white/5 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-indigo-400">
              <Mail className="w-6 h-6" />
              <h3 className="text-lg font-bold">
                {t.deletion.emailMethodTitle}
              </h3>
            </div>
            <div className="text-slate-300 whitespace-pre-line leading-relaxed text-sm">
              {t.deletion.emailMethodContent}
            </div>
            <div className="mt-4 p-3 bg-slate-950 rounded border border-white/5">
              <code className="text-cyan-400 text-sm select-all">
                suporte.abrahamtechs@gmail.com
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6 flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-2">
            {t.deletion.afterTitle}
          </h3>
          <p className="text-red-200/70 text-sm leading-relaxed">
            {t.deletion.afterContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
