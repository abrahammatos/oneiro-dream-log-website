import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "@/assets/logo.png";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-white/10 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-400 sm:mb-0">
            <li>
              <Link
                to="/privacy"
                className="hover:text-cyan-400 me-4 md:me-6 transition-colors"
              >
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-cyan-400 me-4 md:me-6 transition-colors"
              >
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link
                to="/data-deletion"
                className="hover:text-cyan-400 me-4 md:me-6 transition-colors"
              >
                {t.footer.deleteData}
              </Link>
            </li>
            <li>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">
                {t.footer.contact}
              </span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-slate-800 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-slate-500 sm:text-center">
          {t.footer.rights}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
