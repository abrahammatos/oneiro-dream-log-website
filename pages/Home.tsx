import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Shield,
  Brain,
  Cloud,
  Smartphone,
  Search,
  PenTool,
  BarChart3,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import home from "@/assets/images/home.jpg";
import exploreDream from "@/assets/images/exploredream.jpg";
import analysis from "@/assets/images/analysis.jpg";
import record from "@/assets/images/recordDream.jpg";

// Reusable Phone Mockup Component
const PhoneMockup = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div
    className={`relative mx-auto border-slate-800 bg-slate-950 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]  shadow-2xl shadow-purple-500/20 ${className}`}
  >
    {/* Buttons */}
    <div className="h-[32px] w-[3px] bg-slate-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-slate-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-slate-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-slate-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    {/* Screen */}
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900 relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
        loading="lazy"
      />
      {/* Reflection/Glare overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden bg-slate-950 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-white/5">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-xl mx-auto lg:mx-0">
                  <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
                  v2.0 Now Available
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {t.hero.title} <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <p className="max-w-[600px] text-slate-400 md:text-xl leading-relaxed mx-auto lg:mx-0">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-slate-950 px-8 text-sm font-bold shadow-lg shadow-purple-500/20 transition-all hover:bg-slate-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  {t.hero.cta}
                </a>
              </div>
            </div>

            {/* Hero Phone */}
            <div className="flex items-center justify-center lg:justify-end perspective-1000">
              <div className="transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">
                <PhoneMockup src={home} alt="Oneiro App Home Screen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Strips (Zig-Zag Layout) */}
      <section id="features" className="w-full bg-slate-950 relative ">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>

        <div className="container px-4 md:px-6 mx-auto py-24 space-y-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">
              {t.showcase.title}
            </h2>
            <p className="text-slate-400 text-lg">
              Every pixel designed to enhance your journey into the
              subconscious.
            </p>
          </div>

          {/* 1. Feed & Search */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-2xl rounded-full"></div>
                <PhoneMockup src={exploreDream} alt="Dream Feed Screen" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <BarChart3 className="w-6 h-6 text-purple-400 rotate-90" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.showcase.feedTitle}
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.showcase.feedDesc}
              </p>

              <div className="pt-8 flex items-center gap-3">
                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <Search className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.showcase.searchTitle}
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.showcase.searchDesc}
              </p>
            </div>
          </div>

          {/* 2. Create Entry */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <PenTool className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.showcase.createTitle}
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.showcase.createDesc}
              </p>
              <ul className="space-y-3 text-slate-300 mt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Lucidity Check & Tags
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Mood Sliders
                </li>
              </ul>
            </div>
            <div className="order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl rounded-full"></div>
                <PhoneMockup src={record} alt="Create Entry Screen" />
              </div>
            </div>
          </div>

          {/* 3. Analysis & Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-2xl rounded-full"></div>
                <PhoneMockup src={analysis} alt="Analysis Screen" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.showcase.analysisTitle}
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.showcase.analysisDesc}
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6"></div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <User className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t.showcase.profileTitle}
                </h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.showcase.profileDesc}
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 px-2 py-1 rounded">
                  Streak Tracking
                </span>
                <span className="text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 px-2 py-1 rounded">
                  Cloud Sync
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Features Summary */}
      <section className="w-full py-20 bg-slate-900/30 border-t border-white/5 backdrop-blur-sm">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/10 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Shield className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {t.features.card1Title}
              </h3>
              <p className="text-slate-400 text-sm">{t.features.card1Desc}</p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-slate-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Brain className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {t.features.card2Title}
              </h3>
              <p className="text-slate-400 text-sm">{t.features.card2Desc}</p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-slate-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <Cloud className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {t.features.card3Title}
              </h3>
              <p className="text-slate-400 text-sm">{t.features.card3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-indigo-950/20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start your journey tonight
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of dreamers who are unlocking their subconscious
            potential with Oneiro.
          </p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Smartphone className="w-5 h-5" />
            Download Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
