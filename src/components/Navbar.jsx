import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Zap, Sun, Phone, MapPin, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions & Services', path: '/services' },
    { name: 'Solar Sizing', path: '/calculator', badge: 'ZAR' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Emergency Load Shedding Notification Bar */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-slate-900 text-white text-xs md:text-sm font-medium py-2 px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>
              <strong>Pretoria Load Shedding Defense:</strong> Fast 48h hybrid inverter & lithium battery installation across Gauteng.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a
              href="tel:+27785657258"
              className="hover:underline flex items-center gap-1 font-semibold text-sky-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> +27 78 565 7258
            </a>
            <span className="opacity-50">|</span>
            <span className="flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> 417 Jasmyn Ave, Pretoria
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav scrolled' : 'glass-nav'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-current text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-heading block leading-tight">
                WILLTECHNO
              </span>
              <span className="text-[10px] font-bold tracking-widest text-sky-700 uppercase">
                ELECTRICAL &bull; SOLAR &bull; PRETORIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    isActive ? 'text-sky-600' : 'text-slate-600 hover:text-sky-600'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] bg-amber-100 text-amber-800 font-bold rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/27785657258?text=Hi%20WILLTECHNO%20ELECTRICAL!%20I'd%20like%20a%20solar%20quote%20for%20my%20property%20in%20Pretoria."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-xs md:text-sm py-2.5 px-4"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link to="/calculator" className="btn-primary text-xs md:text-sm py-2.5 px-5">
              <span>Calculate Savings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-bold text-slate-900">WILLTECHNO Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-500 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-1.5 transition-colors ${
                      isActive ? 'text-sky-600' : 'text-slate-700 hover:text-sky-600'
                    }`
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] bg-amber-100 text-amber-800 font-bold rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://wa.me/27785657258"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp justify-center text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+27 78 565 7258)</span>
              </a>
              <a
                href="tel:+27785657258"
                className="btn-secondary justify-center text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +27 78 565 7258</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
