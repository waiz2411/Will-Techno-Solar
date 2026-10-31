import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Sun,
  BatteryCharging,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: 'Waterkloof Heights Luxury Residence',
      location: 'Waterkloof, Pretoria',
      inverter: '12kW Deye Three-Phase Hybrid',
      battery: '15kWh Hubble LiFePO4 Bank',
      panels: '18x 550W Canadian Solar (9.9 kWp)',
      dailyYield: '48 – 55 kWh / day',
      savings: 'R 4,800 / month',
      description: 'Engineered for complete whole-home load shedding defense, running ducted inverter air conditioning, pool heating, borehole pumps, and security perimeter.',
      tags: ['Three-Phase', 'Hubble Lithium', 'SANS CoC Validated']
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Centurion Corporate Logistics Park',
      location: 'Centurion, Gauteng',
      inverter: 'Dual 25kW Deye (50kW Total)',
      battery: '60kWh Commercial Lithium Rack',
      panels: '90x 550W JA Solar (49.5 kWp)',
      dailyYield: '240 – 275 kWh / day',
      savings: 'R 32,500 / month',
      description: 'Replaced high diesel generator fuel consumption during daytime load shedding. Full Section 12BA SARS accelerated depreciation incentive applied.',
      tags: ['Commercial', 'Diesel Displacement', 'SARS Section 12BA']
    },
    {
      id: 3,
      category: 'residential',
      title: 'Lynnwood Glen Family Estate',
      location: 'Lynnwood, Pretoria',
      inverter: '8kW Sunsynk Smart Hybrid',
      battery: '10.24kWh Dyness LiFePO4',
      panels: '14x 550W Monocrystalline (7.7 kWp)',
      dailyYield: '36 – 42 kWh / day',
      savings: 'R 3,600 / month',
      description: 'Zero-flicker UPS switchover for home offices and entertainment systems. Clean DB board reorganization with split essential backup circuits.',
      tags: ['Sunsynk 8kW', 'Zero Downtime', 'Sub-DB Rewiring']
    },
    {
      id: 4,
      category: 'estate',
      title: 'Silver Lakes Golf Estate Off-Grid Villa',
      location: 'Silver Lakes, Pretoria East',
      inverter: '16kW Dual Paralleled Sunsynk',
      battery: '30kWh Freedom Won LiTE Home',
      panels: '28x 550W Tier-1 Panels (15.4 kWp)',
      dailyYield: '75 – 88 kWh / day',
      savings: 'R 7,200 / month',
      description: '98% energy autonomy estate system. Powers entire property independently from municipal instability, featuring automated generator backup integration.',
      tags: ['Freedom Won', 'Off-Grid Ready', 'Smart Paralleling']
    },
    {
      id: 5,
      category: 'residential',
      title: 'Montana Residential Backup',
      location: 'Montana, Pretoria North',
      inverter: '5kW Sunsynk Hybrid',
      battery: '5.12kWh Dyness Lithium',
      panels: '8x 550W Tier-1 Panels (4.4 kWp)',
      dailyYield: '20 – 24 kWh / day',
      savings: 'R 2,100 / month',
      description: 'Entry-level load shedding defense ensuring refrigerators, WiFi routers, lighting circuits, and security systems remain 100% operational.',
      tags: ['Cost-Effective', 'Rapid 48h Install', 'SANS CoC']
    },
    {
      id: 6,
      category: 'commercial',
      title: 'Pretoria Diagnostic Medical Suites',
      location: 'Pretoria Central',
      inverter: '30kW Sunsynk Three-Phase',
      battery: '40kWh High-Voltage Lithium',
      panels: '54x 550W N-Type Panels (29.7 kWp)',
      dailyYield: '145 – 165 kWh / day',
      savings: 'R 19,400 / month',
      description: 'Medical-grade clean sine-wave electricity protecting sensitive ultrasound scanners, surgical lighting, and temperature-controlled medical vaccines.',
      tags: ['Medical Grade', 'Uninterruptible', 'Zero Harmonic Distortion']
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-solar-radial bg-grid-blueprint border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-tech badge-tech-cyan mb-3">Pretoria Installation Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verified Pretoria Solar Projects
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Real solar engineering case studies installed across Waterkloof, Lynnwood, Centurion, Silver Lakes, and Montana by <strong>WILLTECHNO ELECTRICAL PTY LTD</strong>.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'residential', label: 'Residential Systems' },
            { id: 'commercial', label: 'Commercial Solar' },
            { id: 'estate', label: 'Off-Grid Estates' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                filter === item.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="glass-card overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  
                  {/* Top Meta */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{p.location}</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tech Specs Table */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Inverter:</span>
                      <span className="font-bold text-slate-900">{p.inverter}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Battery:</span>
                      <span className="font-bold text-sky-700">{p.battery}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">PV Array:</span>
                      <span className="font-bold text-amber-700">{p.panels}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-500 font-semibold">Monthly Savings:</span>
                      <span className="font-extrabold text-emerald-600 font-mono">{p.savings}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom WhatsApp Inquiry */}
                <div className="p-4 bg-slate-100/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>SANS CoC Issued</span>
                  </span>
                  <a
                    href={`https://wa.me/27785657258?text=${encodeURIComponent(`Hi WILLTECHNO! I saw your ${p.title} project in ${p.location}. I'd like a similar system quoted for my property.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                  >
                    <span>Quote Similar System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to Add Your Property to Our Pretoria Showcase?</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Book a complimentary roof and DB board assessment from our licensed master electricians at 417 Jasmyn Ave, Pretoria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link to="/calculator" className="btn-primary text-sm py-3 px-6">
              <span>Calculate System Size</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/27785657258?text=Hi%20WILLTECHNO!%20I'd%20like%20to%20book%20a%20site%20assessment."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-sm py-3 px-6"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Hotline (+27 78 565 7258)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
