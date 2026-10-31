import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Map,
  Zap
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: 'Pretoria',
    service: 'Residential Solar PV & Hybrid Inverter',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    const fullMessage = encodeURIComponent(
      `Hi WILLTECHNO Electrical!\n\n` +
      `New Website Consultation Request:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Property Suburb: ${formData.suburb}\n` +
      `• Requested Service: ${formData.service}\n` +
      `• Project Details: ${formData.message || 'Looking for an assessment and quote'}\n\n` +
      `Please contact me regarding scheduling an on-site visit!`
    );

    setSubmitted(true);
    window.open(`https://wa.me/27785657258?text=${fullMessage}`, '_blank');
  };

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="pt-12 pb-16 bg-solar-radial bg-grid-blueprint border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="badge-tech badge-tech-cyan mb-3">Pretoria Headquarters & Dispatch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact WILLTECHNO ELECTRICAL
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Get in touch with our licensed master electricians at <strong>417 Jasmyn Ave, Pretoria</strong> for immediate solar assessments, quotes, and SANS CoC inspections.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-10 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">Request a Site Assessment & Quote</h2>
                    <p className="text-xs text-slate-500 mt-1">Our Pretoria team responds within 2 business hours</p>
                  </div>
                  <span className="badge-tech badge-tech-emerald text-xs">Fast Dispatch</span>
                </div>

                {submitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Thank you!</strong> Your consultation request has been forwarded directly to our dispatch WhatsApp hotline (+27 78 565 7258).
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johan Botha"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 078 565 7258"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Property Suburb / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lynnwood / Waterkloof / Centurion"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white"
                      >
                        <option value="Residential Solar PV & Hybrid Inverter">Residential Solar PV (5kW–12kW)</option>
                        <option value="Commercial Solar & Three-Phase Microgrid">Commercial Solar (20kW–100kW+)</option>
                        <option value="LiFePO4 Lithium Battery Backup Only">LiFePO4 Lithium Battery Upgrade</option>
                        <option value="SANS 10142-1 Electrical CoC Inspection">SANS 10142-1 Electrical CoC</option>
                        <option value="DB Board Rewiring & Surge Protection">DB Board Rewiring & Surge Protection</option>
                        <option value="Solar Thermal Health Check & Maintenance">Solar Maintenance & Health Check</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Property & System Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your property, current monthly electricity bill, or load shedding challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp w-full py-4 text-sm justify-center shadow-md shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp Channel</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your contact details are kept strictly private & confidential.</span>
                  </div>

                </form>

              </div>
            </div>

            {/* Right Column: Address, Phone, Operating Hours & Pretoria Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact Information Card */}
              <div className="glass-card p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Pretoria Facility Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Physical Headquarters</span>
                      <span className="text-slate-600">417 Jasmyn Ave, Pretoria, South Africa</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Direct Telephone Hotline</span>
                      <a href="tel:+27785657258" className="text-sky-600 hover:underline font-mono font-bold">
                        +27 78 565 7258
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">WhatsApp Emergency Dispatch</span>
                      <a
                        href="https://wa.me/27785657258"
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 hover:underline font-semibold"
                      >
                        +27 78 565 7258 (24/7 Monitored)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Operating Hours</span>
                      <span className="text-slate-600 block">Monday – Friday: 07:30 – 17:30</span>
                      <span className="text-slate-600 block">Saturday: 08:00 – 13:00</span>
                      <span className="text-amber-700 text-xs font-semibold block mt-1">
                        Emergency Load Shedding Electrical: 24/7 Available
                      </span>
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=WILLTECHNO%20ELECTRICAL%20PTY%20LTD&query_place_id=ChIJZyN2D-FflR4RDKYuXI8_hk4"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full text-xs py-2.5 justify-center"
                  >
                    <Map className="w-4 h-4 text-amber-500" />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>

              </div>

              {/* Embedded Interactive Pretoria Google Map */}
              <div className="glass-card overflow-hidden p-2">
                <iframe
                  title="WILLTECHNO ELECTRICAL PTY LTD Location"
                  src="https://maps.google.com/maps?q=417+Jasmyn+Ave,+Pretoria,+South+Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
