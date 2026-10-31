import React from 'react';
import { Link } from 'react-router-dom';
import {
  SunMedium,
  Building2,
  BatteryCharging,
  FileCheck2,
  Cpu,
  Activity,
  CheckCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "residential",
      icon: SunMedium,
      badge: "Residential PV",
      color: "amber",
      title: "Residential Solar PV & Hybrid Inverters",
      tagline: "Cut up to 95% off your Tshwane municipal electricity bill with reliable load shedding immunity.",
      description: "We engineer and install premium residential solar solutions customized for Pretoria homes. Every package features Tier-1 monocrystalline panels, high-efficiency hybrid inverters, and modular LiFePO4 batteries.",
      specs: [
        "Sunsynk, Deye, and Victron Energy hybrid inverters (5kW, 8kW, 12kW, 16kW)",
        "Tier-1 N-Type Monocrystalline panels (JA Solar, Canadian Solar 550W+)",
        "0-millisecond UPS automatic switchover (no computer or TV reboots)",
        "Real-time mobile app tracking for daily production and battery status",
        "Includes full SANS 10142-1 Certificate of Compliance (CoC)"
      ],
      pricing: "From R79,000 fully installed & certified"
    },
    {
      id: "commercial",
      icon: Building2,
      badge: "Commercial Microgrid",
      color: "sky",
      title: "Commercial & Industrial Microgrids",
      tagline: "Shield your business operations, server rooms, and retail stores from crippling load shedding.",
      description: "High-capacity three-phase commercial solar systems designed to eliminate high peak-demand electricity tariffs and diesel generator fuel burn for offices, warehouses, and medical facilities across Gauteng.",
      specs: [
        "Three-phase balanced power distribution (20kW to 100kW+)",
        "Peak-shaving algorithms to suppress high municipal demand penalties",
        "Section 12BA SARS Tax Incentive eligible (125% upfront tax deduction)",
        "Heavy-duty LiFePO4 commercial battery racks (30kWh to 200kWh+)",
        "Remote fleet telemetry and 24/7 proactive fault monitoring"
      ],
      pricing: "Custom engineered based on load profile analysis"
    },
    {
      id: "batteries",
      icon: BatteryCharging,
      badge: "Energy Storage",
      color: "sky",
      title: "LiFePO4 Lithium Battery Storage Banks",
      tagline: "Safe, non-combustible lithium iron phosphate storage with 6,000+ cycle life.",
      description: "Whether you need to upgrade an existing solar inverter or install an emergency backup battery for load shedding, we supply and commission Pretoria's leading lithium storage brands.",
      specs: [
        "High-cycle LiFePO4 chemistry (over 15 years daily operational lifespan)",
        "Partners with Hubble Lithium, Dyness, Freedom Won, and Pylontech",
        "95%+ Depth of Discharge (DoD) without cell degradation",
        "Smart Battery Management System (BMS) with CAN-bus inverter integration",
        "10-Year manufacturer warranties included"
      ],
      pricing: "5.12kWh modules from R23,500"
    },
    {
      id: "coc",
      icon: FileCheck2,
      badge: "Legal Compliance",
      color: "emerald",
      title: "SANS 10142-1 Electrical CoC Inspections",
      tagline: "Official Certificate of Compliance required for insurance validity and solar sign-off.",
      description: "WILLTECHNO is a certified electrical contractor registered with the Department of Labour. Our licensed master electricians conduct rigorous testing and issue legally certified Certificates of Compliance.",
      specs: [
        "Earth loop impedance and insulation resistance testing",
        "Verification of main switch, earth leakage, and surge protection ratings",
        "Pretoria property sale transfer CoC inspections",
        "Solar PV installation sign-off and municipal registration filing",
        "Rapid 24–48 hour dispatch across Pretoria and Centurion"
      ],
      pricing: "Residential CoC inspections from R1,850"
    },
    {
      id: "db-boards",
      icon: Cpu,
      badge: "Electrical Engineering",
      color: "sky",
      title: "DB Board Upgrades & Essential Circuit Rewiring",
      tagline: "Neat, safe, and code-compliant electrical distribution for solar integration.",
      description: "A successful solar system requires clean distribution. We reorganize your main distribution board (DB) into essential backup circuits (lights, WiFi, plugs, fridges) and non-essential circuits (heavy geysers, ovens).",
      specs: [
        "Type 1 & Type 2 AC and DC surge arrestor installation",
        "Automatic Transfer Switches (ATS) for solar and generator changeover",
        "Neat industrial trunking and labeled circuit segregation",
        "Heavy-duty earth spike installations and earthing bonding",
        "Master electrician oversight on all panel modifications"
      ],
      pricing: "Evaluated during complimentary site assessment"
    },
    {
      id: "maintenance",
      icon: Activity,
      badge: "Preventative Care",
      color: "amber",
      title: "Infrared Thermal Health Audits & Maintenance",
      tagline: "Ensure maximum photovoltaic yield and prevent dangerous hot-spot electrical failures.",
      description: "Photovoltaic panels and inverter combiners degrade if loose connections or micro-cracks go undetected. Our thermal scanning identifies anomalies before they cause downtime or fire hazards.",
      specs: [
        "FLIR infrared thermal imaging of all solar panels and DC combiner boxes",
        "Torque testing on all electrical terminations and terminal lugs",
        "Inverter firmware updates and MPPT efficiency tuning",
        "Panel cleaning and de-ionized water washing service",
        "Comprehensive health audit report with performance grading"
      ],
      pricing: "Annual maintenance plans from R2,200"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-solar-radial bg-grid-blueprint border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-tech badge-tech-cyan mb-3">Pretoria Engineering Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certified Solar & Electrical Services
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            From residential solar backup and commercial microgrids to legal SANS 10142-1 CoC inspections, <strong>WILLTECHNO ELECTRICAL PTY LTD</strong> delivers uncompromising engineering across Pretoria and Gauteng.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-card p-6 sm:p-10 scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  
                  {/* Left Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 font-mono">
                          {service.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Key Engineering Specifications:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {service.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
                      <div className="text-xs">
                        <span className="text-slate-400 block font-medium">Estimated Investment:</span>
                        <span className="text-sm font-extrabold text-slate-900">{service.pricing}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={`https://wa.me/27785657258?text=${encodeURIComponent(`Hi WILLTECHNO! I'd like more details and a quote on your ${service.title} for my Pretoria property.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-whatsapp text-xs py-2.5 px-4"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Request WhatsApp Quote</span>
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Right Column / Visual Feature Box */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-700">Compliance & Warranty</span>
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      </div>

                      <div className="space-y-3 text-xs text-slate-600">
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                          <span className="font-bold text-slate-900 block mb-0.5">SANS 10142-1 Certified</span>
                          Full legal electrical certificate issued upon installation by registered master electricians.
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                          <span className="font-bold text-slate-900 block mb-0.5">Insurance Validated</span>
                          Accepted by all major South African insurers (Santam, Discovery, Hollard, Outsurance).
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                          <span className="font-bold text-slate-900 block mb-0.5">417 Jasmyn Ave Base</span>
                          Fast Gauteng emergency dispatch fleet with spare components in stock.
                        </div>
                      </div>

                      <Link
                        to="/calculator"
                        className="btn-primary w-full text-xs py-3 justify-center"
                      >
                        <Zap className="w-4 h-4" />
                        <span>Size This System in ZAR</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Need Custom Electrical Engineering in Pretoria?</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact our engineering team directly at <strong>+27 78 565 7258</strong> or visit our facility at <strong>417 Jasmyn Ave, Pretoria</strong> for technical advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-primary text-sm py-3 px-6">
              <span>Book Site Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+27785657258" className="btn-secondary text-sm py-3 px-6">
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call +27 78 565 7258</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
