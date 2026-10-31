import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Calculator,
  MessageCircle,
  ArrowRight,
  SunMedium,
  Building2,
  FileCheck2,
  Award,
  Cpu,
  Clock,
  Sun,
  ZapOff,
  Coins,
  ChevronRight,
  ChevronDown,
  Star,
  Sparkles,
  Phone
} from 'lucide-react';
import Solar3DCanvas from '../components/Solar3DCanvas';
import LoadSheddingSimulator from '../components/LoadSheddingSimulator';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How fast is the switchover during Pretoria load shedding?",
      a: "WILLTECHNO installs smart hybrid inverters (Sunsynk, Deye, Victron) equipped with an ultra-fast automatic transfer switch (UPS mode). The switchover occurs in under 4 to 10 milliseconds, which is virtually 0ms for appliances, computers, TVs, and WiFi routers. They will not reboot or power off."
    },
    {
      q: "Do you provide an official SANS 10142-1 Electrical CoC?",
      a: "Yes, absolutely. WILLTECHNO is a certified electrical contracting company registered with the Department of Labour. Every solar installation is inspected, tested, and issued with a legal Certificate of Compliance (CoC), ensuring full insurance protection and municipal compliance."
    },
    {
      q: "Where is your facility located and do you service all of Gauteng?",
      a: "Our operational headquarters is situated at 417 Jasmyn Ave, Pretoria, ZA. We dispatch our engineering teams daily across Pretoria, Centurion, Midrand, Johannesburg North, and neighboring Gauteng regions."
    },
    {
      q: "What warranties are provided on panels, inverters, and lithium batteries?",
      a: "We exclusively supply Tier-1 equipment: Solar panels feature a 12-year product warranty and a 25-year linear performance warranty. Hybrid inverters carry 5 to 10-year manufacturer warranties, and LiFePO4 lithium batteries include 10-year / 6,000-cycle warranties."
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Hero Section with 3D WebGL Solar Simulation */}
      <section className="relative pt-8 pb-16 lg:pb-24 overflow-hidden bg-solar-radial bg-grid-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: High-Impact Copy */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>SANS 10142-1 Certified Master Electricians &bull; Pretoria</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Power Your World Without{' '}
                <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-amber-500 bg-clip-text text-transparent">
                  Eskom Blackouts.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                <strong>WILLTECHNO ELECTRICAL PTY LTD</strong> engineers Tier-1 monocrystalline solar PV arrays, smart hybrid inverters, and high-capacity LiFePO4 batteries with seamless 0ms switchover for homes and commercial businesses across Pretoria and Gauteng.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link to="/calculator" className="btn-primary text-base py-3.5 px-6 shadow-glow-cyan">
                  <Calculator className="w-5 h-5" />
                  <span>Calculate Solar Savings (ZAR)</span>
                </Link>
                <a
                  href="https://wa.me/27785657258?text=Hi%20WILLTECHNO!%20I%20would%20like%20to%20book%20a%20solar%20site%20assessment."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-base py-3.5 px-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Hotline</span>
                </a>
              </div>

              {/* Trust & Performance Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-slate-900">0ms</div>
                  <div className="text-xs font-medium text-slate-500">UPS Switchover</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-sky-600">25-Yr</div>
                  <div className="text-xs font-medium text-slate-500">Linear Warranty</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-amber-600">100%</div>
                  <div className="text-xs font-medium text-slate-500">SANS CoC Certified</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Solar Canvas */}
            <div className="lg:col-span-6">
              <Solar3DCanvas />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Load Shedding Simulator */}
      <LoadSheddingSimulator />

      {/* Core Engineering Solutions Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="badge-tech badge-tech-cyan mb-3">Pretoria Engineering Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Certified Solar & Electrical Capabilities
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                From residential rooftop arrays to heavy commercial microgrids and legal electrical compliance, we build systems that outlast the grid.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/services" className="btn-secondary text-sm">
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <SunMedium className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Residential Solar PV Systems</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Custom-sized 5kW, 8kW, and 12kW hybrid solar systems using high-efficiency N-Type monocrystalline modules designed to eliminate 80–95% of your municipal electricity bill.
                </p>
                <ul className="text-xs font-semibold text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Sunsynk & Deye Hybrid Inverters
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Real-time WiFi smartphone monitoring
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Full SANS 10142-1 CoC included
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/services" className="text-sky-600 hover:text-sky-800 text-sm font-bold flex items-center gap-1 group">
                  <span>View Residential Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Commercial & Industrial Solar</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Three-phase commercial solar microgrids (20kW to 100kW+) engineered to eliminate expensive diesel generator fuel costs and shield corporate operations from load shedding.
                </p>
                <ul className="text-xs font-semibold text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Peak-shaving & demand charge defense
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Section 12BA SARS Tax Incentive ready
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Three-phase balanced distribution
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/services" className="text-sky-600 hover:text-sky-800 text-sm font-bold flex items-center gap-1 group">
                  <span>View Commercial Systems</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">SANS 10142-1 Electrical CoC</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Official legal Certificate of Compliance issued by registered Pretoria master electricians. Essential for solar sign-off, property transfers, and home insurance validity.
                </p>
                <ul className="text-xs font-semibold text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Earth leakage & insulation tests
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> DB board rewiring & surge protection
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Fast 24–48h inspection dispatch
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link to="/services" className="text-sky-600 hover:text-sky-800 text-sm font-bold flex items-center gap-1 group">
                  <span>Book CoC Inspection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Calculator Teaser Bar */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Tshwane & Eskom Tariff Estimator
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                How Much Can You Save Every Month in Pretoria?
              </h2>
              <p className="text-slate-300 text-base max-w-2xl">
                Use our interactive solar sizing calculator to determine the exact hybrid inverter capacity, LiFePO4 battery storage, and panel count needed for your monthly bill.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link to="/calculator" className="btn-solar py-3.5 px-6 text-center text-sm md:text-base">
                <Calculator className="w-5 h-5" />
                <span>Open Solar Calculator (ZAR)</span>
              </Link>
              <a
                href="https://wa.me/27785657258?text=Hi%20WILLTECHNO!%20I'd%20like%20a%20free%20solar%20audit."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp py-3.5 px-6 text-center text-sm md:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with an Engineer</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why WILLTECHNO ELECTRICAL PTY LTD */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-tech badge-tech-cyan">Why Choose WILLTECHNO</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineered For Reliability. Built for Pretoria's Climate.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Unlike fly-by-night solar installers, <strong>WILLTECHNO ELECTRICAL PTY LTD</strong> is an accredited electrical contracting firm based at <strong>417 Jasmyn Ave, Pretoria</strong>. We adhere strictly to SANS 10142-1 standards, ensuring your home insurance is valid and your power never goes dark.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-sky-100 text-sky-700 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Certified Master Electricians</h4>
                    <p className="text-slate-500 text-xs mt-1">Every installation is led by licensed master electricians with Department of Labour accreditation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Tier-1 Hardware Partners</h4>
                    <p className="text-slate-500 text-xs mt-1">Direct integration with Sunsynk, Deye, Victron Energy, Canadian Solar, JA Solar, and Hubble Lithium.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Fast 48h Emergency Turnaround</h4>
                    <p className="text-slate-500 text-xs mt-1">Rapid response dispatch across Pretoria, Centurion, Midrand, and greater Gauteng.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Performance Stats Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="glass-card p-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-3">
                  <Sun className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900">2,450 kWp</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Installed PV Capacity</div>
                <p className="text-[11px] text-slate-400">Powering homes & businesses in Gauteng</p>
              </div>

              <div className="glass-card p-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                  <ZapOff className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-amber-600">99.9%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Load Shedding Immunity</div>
                <p className="text-[11px] text-slate-400">Zero interrupted work days</p>
              </div>

              <div className="glass-card p-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-600">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">CoC Pass Rate</div>
                <p className="text-[11px] text-slate-400">Strict SANS 10142-1 standard</p>
              </div>

              <div className="glass-card p-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-3">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-sky-600">R 18M+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tariffs Saved</div>
                <p className="text-[11px] text-slate-400">Calculated over 5 years</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Pretoria Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="badge-tech badge-tech-amber mb-3">Pretoria Case Studies</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Recent Installations in Gauteng
              </h2>
              <p className="text-slate-600 mt-2 text-base">
                Explore our real-world solar systems installed across Waterkloof, Lynnwood, Centurion, and Montana.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/projects" className="btn-primary text-sm">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case 1 */}
            <div className="glass-card overflow-hidden flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">Waterkloof Heights</span>
                  <span className="text-xs font-mono font-bold text-slate-500">Residential</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">12kW Three-Phase Hybrid + 15kWh Hubble LiFePO4</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Complete load shedding defense powering entire 5-bedroom home including swimming pool heat pump, air conditioning, and borehole.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <div><strong>Panels:</strong> 18x 550W Canadian</div>
                  <div><strong>Savings:</strong> R4,800 / month</div>
                </div>
              </div>
              <div className="p-4 bg-slate-100/60 border-t border-slate-100 text-right">
                <Link to="/projects" className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center justify-end gap-1">
                  <span>System Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Case 2 */}
            <div className="glass-card overflow-hidden flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">Centurion Office Park</span>
                  <span className="text-xs font-mono font-bold text-slate-500">Commercial</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">50kW Commercial Solar + 60kWh Battery Bank</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Eliminated R32,000 monthly diesel generator expenditures during rolling blackouts, maintaining full office server and cooling uptime.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <div><strong>Inverters:</strong> Dual Deye 25kW</div>
                  <div><strong>Payback:</strong> 3.2 Years</div>
                </div>
              </div>
              <div className="p-4 bg-slate-100/60 border-t border-slate-100 text-right">
                <Link to="/projects" className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center justify-end gap-1">
                  <span>System Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Case 3 */}
            <div className="glass-card overflow-hidden flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">Lynnwood Glen</span>
                  <span className="text-xs font-mono font-bold text-slate-500">Residential</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">8kW Sunsynk Hybrid + 10.24kWh Lithium Storage</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Essential loads backed up with 12x 550W Tier-1 solar modules, reducing monthly municipal electricity cost by 82%.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <div><strong>Inverter:</strong> 8kW Sunsynk</div>
                  <div><strong>CoC:</strong> Issued on site</div>
                </div>
              </div>
              <div className="p-4 bg-slate-100/60 border-t border-slate-100 text-right">
                <Link to="/projects" className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center justify-end gap-1">
                  <span>System Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pretoria Client Testimonials */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-tech badge-tech-cyan mb-2">Verified Client Reviews</span>
            <h2 className="text-3xl font-extrabold text-slate-900">What Pretoria Property Owners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic">
                "WILLTECHNO installed our 8kW system in Montana. When Stage 6 hit Pretoria last week, we didn't even notice the lights flicker. Their SANS CoC was issued the very same afternoon."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Dirk Van Der Merwe</div>
                <div className="text-xs text-slate-500">Montana, Pretoria</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic">
                "Outstanding service from the team at 417 Jasmyn Ave. They rewired our DB board, installed surge protection, and set up our 12kW Deye inverter cleanly with neat trunking."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Nthabiseng Molefe</div>
                <div className="text-xs text-slate-500">Lynnwood, Pretoria</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm italic">
                "We run a medical laboratory in Centurion. Clean power is non-negotiable. WILLTECHNO delivered a commercial solar and battery backup that has kept our refrigeration running flawlessly."
              </p>
              <div className="pt-2 border-t border-slate-200/80">
                <div className="font-bold text-slate-900 text-sm">Dr. Johan Pretorius</div>
                <div className="text-xs text-slate-500">Centurion Medical Centre</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="badge-tech badge-tech-amber mb-2">Solar & Electrical Questions</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2 text-sm">Everything you need to know about solar installation in Pretoria.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="glass-card p-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Conversion CTA Banner */}
      <section className="py-16 bg-gradient-to-tr from-sky-600 to-sky-800 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Eliminate Your Pretoria Power Worries?
          </h2>
          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Speak directly with WILLTECHNO master electricians today. Get a complimentary roof assessment and customized solar proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/27785657258?text=Hi%20WILLTECHNO!%20I'd%20like%20to%20schedule%20a%20site%20visit."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-base py-3.5 px-6 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant WhatsApp (+27 78 565 7258)</span>
            </a>
            <a
              href="tel:+27785657258"
              className="btn-secondary text-base py-3.5 px-6 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-sky-600" />
              <span>Call +27 78 565 7258</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
