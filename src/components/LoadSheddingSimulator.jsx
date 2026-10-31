import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, UtilityPole, Sun, BatteryCharging, Home, Zap, ShieldCheck } from 'lucide-react';

export default function LoadSheddingSimulator() {
  const [isShedding, setIsShedding] = useState(false);

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-tech badge-tech-amber mb-3">South African Load Shedding Simulator</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience Zero-Downtime Backup Power
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Test WILLTECHNO's intelligent power routing. Toggle between standard Eskom supply and a Stage 6 blackout to see how our hybrid inverters seamlessly protect your Pretoria facility.
          </p>
        </div>

        {/* Interactive Mode Toggle Buttons */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <button
            onClick={() => setIsShedding(false)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
              !isShedding
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Normal Eskom Grid</span>
          </button>
          <button
            onClick={() => setIsShedding(true)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
              isShedding
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Simulate Stage 6 Blackout</span>
          </button>
        </div>

        {/* Switchover Alert Dynamic Box */}
        {isShedding && (
          <div className="max-w-3xl mx-auto mb-8 animate-in fade-in duration-300">
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-900 text-xs md:text-sm shadow-sm">
              <span className="p-2 bg-amber-500 text-white rounded-xl flex-shrink-0">
                <Zap className="w-4 h-4 fill-current" />
              </span>
              <span>
                <strong>0ms Switchover Engaged:</strong> WILLTECHNO smart hybrid inverter switched seamlessly. Pretoria home & business circuits experience ZERO downtime.
              </span>
            </div>
          </div>
        )}

        {/* Power Flow Architecture Diagram */}
        <div className="glass-card-static p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Grid State</span>
              <div className="mt-1">
                {isShedding ? (
                  <span className="badge-tech bg-red-100 text-red-700 border border-red-200 text-xs">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> Eskom Grid: OFFLINE (Stage 6 Blackout)
                  </span>
                ) : (
                  <span className="badge-tech badge-tech-emerald text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Eskom Grid: Active (230V 50Hz)
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Transfer Time</span>
              <div className="text-sm font-extrabold text-sky-600 font-mono mt-1">&lt; 0 milliseconds</div>
            </div>
          </div>

          {/* 4 Energy Nodes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            {/* Node 1: Grid */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isShedding
                ? 'bg-slate-50 border-slate-200 opacity-60'
                : 'bg-sky-50/50 border-sky-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                isShedding ? 'bg-slate-200 text-slate-500' : 'bg-sky-100 text-sky-700'
              }`}>
                <UtilityPole className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-slate-900 uppercase">Eskom Grid</div>
              <div className="text-sm font-extrabold text-slate-700 font-mono">
                {isShedding ? '0 kW (0V)' : '0.6 kW'}
              </div>
              <div className="text-[11px] text-slate-400">City of Tshwane</div>
            </div>

            {/* Node 2: Solar Panels */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <Sun className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-amber-900 uppercase">Solar Array</div>
              <div className="text-sm font-extrabold text-amber-600 font-mono">
                {isShedding ? '6.8 kW (Active)' : '7.2 kW (Peak)'}
              </div>
              <div className="text-[11px] text-amber-700">Tier-1 Mono PV</div>
            </div>

            {/* Node 3: Lithium Battery */}
            <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-2">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-sky-900 uppercase">LiFePO4 Storage</div>
              <div className="text-sm font-extrabold text-sky-600 font-mono">
                {isShedding ? 'Discharging (-2.4 kW)' : 'Charging (+2.8 kW)'}
              </div>
              <div className="text-[11px] text-sky-700">10.24 kWh Bank</div>
            </div>

            {/* Node 4: Home & Office Circuits */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <Home className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-emerald-900 uppercase">Critical Loads</div>
              <div className="text-sm font-extrabold text-emerald-600 font-mono">4.4 kW (Powered)</div>
              <div className="text-[11px] text-emerald-700">100% Zero-Downtime</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
