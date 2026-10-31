import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, MessageCircle, Map, ShieldCheck, Sun, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white font-heading block">WILLTECHNO</span>
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">ELECTRICAL PTY LTD</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certified electrical contracting firm & clean-tech solar engineering in Pretoria, South Africa. SANS 10142-1 CoC compliance, 0ms load shedding defense, and commercial microgrids.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Department of Labour Registered</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="text-xs space-y-2.5">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solutions & Services</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors">Solar Sizing Calculator (ZAR)</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Pretoria Projects Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About WILLTECHNO</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Quote Request</Link></li>
            </ul>
          </div>

          {/* Column 3: Engineering Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="text-xs space-y-2.5">
              <li><Link to="/services" className="hover:text-white transition-colors">Residential Solar PV Arrays</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Commercial Microgrids & Peak Shaving</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">LiFePO4 Lithium Storage Banks</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">SANS 10142-1 Electrical CoC</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">DB Board Rewiring & Surge Protection</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Infrared Thermal Health Audits</Link></li>
            </ul>
          </div>

          {/* Column 4: Pretoria Contact Hub */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Pretoria Headquarters</h4>
            <div className="text-xs space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>417 Jasmyn Ave, Pretoria, South Africa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+27785657258" className="hover:text-white transition-colors font-mono font-semibold">+27 78 565 7258</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/27785657258" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Direct WhatsApp Hotline
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Map className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=WILLTECHNO%20ELECTRICAL%20PTY%20LTD&query_place_id=ChIJZyN2D-FflR4RDKYuXI8_hk4"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 WILLTECHNO ELECTRICAL PTY LTD. All Rights Reserved. SANS 10142-1 Certified.
          </div>
          <div className="flex items-center gap-4">
            <span>Pretoria, Gauteng</span>
            <span>&bull;</span>
            <span>Reg: PTY LTD</span>
            <span>&bull;</span>
            <span>Master Electrician Licensed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
