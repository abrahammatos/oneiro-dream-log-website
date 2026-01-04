import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const isActive = (path: string) => location.pathname === path;

  const linkClasses = (path: string) =>
    `text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
      isActive(path) ? "text-cyan-400" : "text-slate-300"
    }`;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse group"
        >
          <div>
            <img
              src={logo}
              alt="Oneiro Logo"
              width={32}
              height={32}
              className="w-20 h-20"
            />
          </div>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md border border-white/10 hover:border-white/30 text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >
            {t.nav.download}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg bg-slate-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/"
                className={linkClasses("/")}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className={linkClasses("/privacy")}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.privacy}
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className={linkClasses("/terms")}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.terms}
              </Link>
            </li>
            <li>
              <Link
                to="/data-deletion"
                className={linkClasses("/data-deletion")}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.dataDeletion}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
