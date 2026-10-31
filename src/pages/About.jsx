import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Zap,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  Cpu,
  Clock
} from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-solar-radial bg-grid-blueprint border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-tech badge-tech-cyan mb-3">Pretoria Engineering Heritage</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About WILLTECHNO ELECTRICAL PTY LTD
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Registered electrical contractors and clean-tech solar engineers based at <strong>417 Jasmyn Ave, Pretoria</strong>, delivering resilient backup energy across Gauteng.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-tech badge-tech-amber">Our Mission & Standards</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Where Certified Electrical Engineering Meets Modern Solar Power.
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                South Africa's energy landscape demands uncompromising reliability. While many solar sales operations popped up overnight, <strong>WILLTECHNO ELECTRICAL PTY LTD</strong> was founded on master electrical craftsmanship, legal electrical safety standards, and strict adherence to the <strong>SANS 10142-1 Code of Practice</strong>.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Operating out of our central facility at <strong>417 Jasmyn Ave, Pretoria</strong>, our registered wiremen and master electricians design, install, and certify complete photovoltaic systems, three-phase commercial microgrids, and lithium energy storage banks that safeguard residential homes and commercial operations against Eskom disruptions.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-6 h-6 text-sky-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">Department of Labour</h4>
                  <p className="text-xs text-slate-500 mt-1">Official electrical contracting license with certified test report authority.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm">SANS 10142-1 CoC</h4>
                  <p className="text-xs text-slate-500 mt-1">Every installation is issued with an authentic, insurance-approved CoC.</p>
                </div>
              </div>

            </div>

            {/* Right: Operational Facility Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-card p-6 sm:p-8 space-y-6 border-sky-100">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Pretoria Headquarters</h3>
                    <p className="text-xs text-slate-500">417 Jasmyn Ave, Pretoria, South Africa</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Centralized Gauteng dispatch for rapid emergency troubleshooting and same-week installation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>In-house testing bench for hybrid inverter diagnostics and firmware calibration.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Direct stock holding of Tier-1 solar panels, Hubble & Dyness lithium batteries, and DC switchgear.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Direct Emergency Dispatch Contact:</span>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <a href="tel:+27785657258" className="text-sm font-extrabold text-sky-700 font-mono hover:underline">
                      +27 78 565 7258
                    </a>
                    <a
                      href="https://wa.me/27785657258"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp text-xs py-2 px-3"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Support</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Verified Equipment Partners */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-tech badge-tech-cyan mb-2">Hardware & Component Reliability</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Tier-1 Engineering Brands We Trust</h2>
            <p className="text-slate-600 mt-2 text-sm">
              We do not compromise on uncertified generic hardware. We install global industry leaders with South African service centers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Sunsynk', type: 'Hybrid Inverters' },
              { name: 'Deye Energy', type: 'Three-Phase Inverters' },
              { name: 'Victron Energy', type: 'Off-Grid Blue Power' },
              { name: 'Hubble Lithium', type: 'LiFePO4 Storage' },
              { name: 'Canadian Solar', type: 'Tier-1 Mono Panels' },
              { name: 'Freedom Won', type: 'High-Voltage Batteries' },
            ].map((brand, bIdx) => (
              <div key={bIdx} className="glass-card p-4 text-center space-y-1">
                <span className="font-extrabold text-slate-900 text-sm block">{brand.name}</span>
                <span className="text-[11px] text-slate-500 block">{brand.type}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-tr from-sky-700 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold">Consult with a Registered Pretoria Master Electrician</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book an on-site consultation to inspect your DB board, evaluate your roof orientation, and size your solar system accurately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/calculator" className="btn-secondary text-sm py-3 px-6">
              <span>Calculate Savings (ZAR)</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
