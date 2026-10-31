import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Calculator as CalcIcon,
  Zap,
  BatteryCharging,
  Sun,
  Coins,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Info,
  CheckCircle2
} from 'lucide-react';

export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [priority, setPriority] = useState('balanced'); // 'essential' | 'balanced' | 'maximum'
  const [propertyType, setPropertyType] = useState('single');

  // South African Tariff & System Sizing Calculation
  const calculation = useMemo(() => {
    let inverterKw = 5;
    let batteryKwh = 5.12;
    let panelCount = 8;
    let savingsRatio = 0.78;

    if (priority === 'essential') {
      savingsRatio = 0.50;
      if (monthlyBill < 3000) {
        inverterKw = 5;
        batteryKwh = 5.12;
        panelCount = 6;
      } else if (monthlyBill < 6000) {
        inverterKw = 5;
        batteryKwh = 5.12;
        panelCount = 8;
      } else if (monthlyBill < 10000) {
        inverterKw = 8;
        batteryKwh = 10.24;
        panelCount = 12;
      } else {
        inverterKw = 12;
        batteryKwh = 15.36;
        panelCount = 16;
      }
    } else if (priority === 'balanced') {
      savingsRatio = 0.78;
      if (monthlyBill < 2500) {
        inverterKw = 5;
        batteryKwh = 5.12;
        panelCount = 8;
      } else if (monthlyBill < 5000) {
        inverterKw = 8;
        batteryKwh = 10.24;
        panelCount = 12;
      } else if (monthlyBill < 8500) {
        inverterKw = 10;
        batteryKwh = 15.36;
        panelCount = 16;
      } else if (monthlyBill < 14000) {
        inverterKw = 12;
        batteryKwh = 20.48;
        panelCount = 22;
      } else {
        inverterKw = 16;
        batteryKwh = 30.72;
        panelCount = 30;
      }
    } else {
      // Maximum autonomy
      savingsRatio = 0.92;
      if (monthlyBill < 3000) {
        inverterKw = 8;
        batteryKwh = 10.24;
        panelCount = 12;
      } else if (monthlyBill < 6000) {
        inverterKw = 10;
        batteryKwh = 15.36;
        panelCount = 16;
      } else if (monthlyBill < 10000) {
        inverterKw = 12;
        batteryKwh = 20.48;
        panelCount = 24;
      } else {
        inverterKw = 20;
        batteryKwh = 35.84;
        panelCount = 36;
      }
    }

    const panelKwPeak = ((panelCount * 550) / 1000).toFixed(1);
    const monthlySavings = Math.round(monthlyBill * savingsRatio);

    // 5-Year Cumulative Savings factoring in South African ~12.5% annual Eskom escalation
    let fiveYearTotal = 0;
    let currentAnnual = monthlySavings * 12;
    for (let yr = 0; yr < 5; yr++) {
      fiveYearTotal += currentAnnual;
      currentAnnual *= 1.125;
    }

    return {
      inverterKw,
      batteryKwh,
      panelCount,
      panelKwPeak,
      monthlySavings,
      fiveYearSavings: Math.round(fiveYearTotal)
    };
  }, [monthlyBill, priority, propertyType]);

  const handleConfettiAndWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = encodeURIComponent(
      `Hi WILLTECHNO Electrical! I used your Pretoria solar sizing calculator for my property.\n\n` +
      `• Current Monthly Bill: R ${monthlyBill.toLocaleString('en-ZA')}\n` +
      `• Priority Level: ${priority.toUpperCase()}\n` +
      `• Sized Inverter: ${calculation.inverterKw} kW Smart Hybrid\n` +
      `• Sized Battery: ${calculation.batteryKwh} kWh LiFePO4 Storage\n` +
      `• Sized Solar Array: ${calculation.panelCount}x 550W Panels (${calculation.panelKwPeak} kWp)\n` +
      `• Projected 5-Year Savings: R ${calculation.fiveYearSavings.toLocaleString('en-ZA')}\n\n` +
      `Please contact me regarding an on-site assessment at my Pretoria address!`
    );

    window.open(`https://wa.me/27785657258?text=${msg}`, '_blank');
  };

  const presets = [2500, 4500, 7500, 12000, 18000];

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-solar-radial bg-grid-blueprint border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-tech badge-tech-amber mb-3">Tshwane & Eskom Tariff Engine</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pretoria Solar Sizing & ROI Calculator
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Determine your ideal hybrid inverter capacity, LiFePO4 lithium battery storage, and 5-year savings in South African Rands (ZAR).
          </p>
        </div>
      </section>

      {/* Main Calculator Engine */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Box 1: Monthly Bill Slider */}
              <div className="glass-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Current Monthly Electricity Bill</h3>
                    <p className="text-xs text-slate-500">Based on Tshwane municipal / Eskom residential or commercial rates</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono">
                      R {monthlyBill.toLocaleString('en-ZA')}
                    </span>
                    <span className="text-xs text-slate-400 block font-medium">/ month</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="range"
                    min="1500"
                    max="25000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(parseInt(e.target.value, 10))}
                    className="slider-solar"
                  />
                  <div className="flex justify-between text-xs text-slate-400 font-semibold font-mono">
                    <span>R 1,500</span>
                    <span>R 12,000</span>
                    <span>R 25,000+</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Quick Bill Presets:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {presets.map((val) => (
                      <button
                        key={val}
                        onClick={() => setMonthlyBill(val)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                          monthlyBill === val
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        R {val.toLocaleString('en-ZA')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Box 2: System Objectives */}
              <div className="glass-card p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Choose Your Energy Objective</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  <button
                    onClick={() => setPriority('essential')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      priority === 'essential'
                        ? 'border-sky-600 bg-sky-50/50 shadow-md ring-2 ring-sky-600/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-slate-900 uppercase">Load Shedding Only</div>
                    <div className="text-xs text-slate-500 mt-1">50% Bill Offset</div>
                    <p className="text-[11px] text-slate-400 mt-2">Protects lights, WiFi, fridges & workstations.</p>
                  </button>

                  <button
                    onClick={() => setPriority('balanced')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      priority === 'balanced'
                        ? 'border-sky-600 bg-sky-50/50 shadow-md ring-2 ring-sky-600/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-900 uppercase">Balanced Solar</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">Popular</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">75–85% Bill Offset</div>
                    <p className="text-[11px] text-slate-400 mt-2">Powers high-draw appliances + load shedding defense.</p>
                  </button>

                  <button
                    onClick={() => setPriority('maximum')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      priority === 'maximum'
                        ? 'border-sky-600 bg-sky-50/50 shadow-md ring-2 ring-sky-600/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-slate-900 uppercase">Energy Autonomy</div>
                    <div className="text-xs text-slate-500 mt-1">92–98% Bill Offset</div>
                    <p className="text-[11px] text-slate-400 mt-2">Complete grid independence & maximum storage.</p>
                  </button>

                </div>
              </div>

              {/* Box 3: Property Type */}
              <div className="glass-card p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Property Architecture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'single', name: 'Single-Story Home', desc: 'Standard Pretoria roof pitch' },
                    { id: 'double', name: 'Multi-Story / Estate', desc: 'Complex roof layout' },
                    { id: 'commercial', name: 'Commercial Building', desc: 'Three-phase flat roof' },
                  ].map((prop) => (
                    <button
                      key={prop.id}
                      onClick={() => setPropertyType(prop.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        propertyType === prop.id
                          ? 'border-sky-600 bg-sky-50/50 shadow-sm font-semibold'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{prop.name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{prop.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Results Column */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              
              <div className="glass-card p-6 sm:p-8 space-y-6 border-sky-200 shadow-xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-sky-100 text-sky-700">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">Recommended System</h4>
                      <span className="text-xs text-slate-500">WILLTECHNO SANS 10142-1 Certified</span>
                    </div>
                  </div>
                  <span className="badge-tech badge-tech-emerald text-xs">Accredited</span>
                </div>

                {/* Sized Components */}
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                        <Zap className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Smart Hybrid Inverter</span>
                        <span className="text-sm font-bold text-slate-900">{calculation.inverterKw} kW Sunsynk / Deye</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-sky-600">0ms UPS</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                        <BatteryCharging className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Lithium LiFePO4 Storage</span>
                        <span className="text-sm font-bold text-slate-900">{calculation.batteryKwh} kWh Capacity</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600">6,000 Cycles</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                        <Sun className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Photovoltaic Array</span>
                        <span className="text-sm font-bold text-slate-900">{calculation.panelCount}x 550W Panels ({calculation.panelKwPeak} kWp)</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-600">Tier-1 N-Type</span>
                  </div>

                </div>

                {/* Savings Highlights */}
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-sky-50 to-amber-50 border border-sky-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Estimated Monthly Savings:</span>
                    <span className="text-lg font-extrabold text-sky-700 font-mono">
                      R {calculation.monthlySavings.toLocaleString('en-ZA')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-sky-200/50 pt-2">
                    <span className="text-xs font-bold text-slate-700">Projected 5-Year Cumulative Savings:</span>
                    <span className="text-lg font-extrabold text-emerald-700 font-mono">
                      R {calculation.fiveYearSavings.toLocaleString('en-ZA')}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    *Includes projected 12.5% annual municipal electricity tariff escalation in Pretoria.
                  </div>
                </div>

                {/* Instant WhatsApp Action Button with Confetti */}
                <button
                  onClick={handleConfettiAndWhatsApp}
                  className="btn-whatsapp w-full py-4 text-sm justify-center shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Calculation to WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Includes free on-site roof inspection in Pretoria</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
