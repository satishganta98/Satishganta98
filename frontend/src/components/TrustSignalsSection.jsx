import React from 'react';

const trustSignals = [
  {
    name: 'Accenture',
    logo: 'https://cdn.simpleicons.org/accenture/A100FF',
    fallbackLogo: 'https://cdn.simpleicons.org/accenture/6B7280',
    url: 'https://www.accenture.com',
    tint: 'from-[#A100FF]/15 to-[#7E22CE]/5',
    border: 'border-[#A100FF]/30',
  },
  {
    name: 'CIS Security',
    logo: null,
    fallbackLogo: null,
    url: 'https://www.cis-security.co.uk',
    tint: 'from-[#0EA5E9]/15 to-[#0284C7]/5',
    border: 'border-[#0EA5E9]/30',
  },
  {
    name: 'CompTIA',
    logo: 'https://cdn.simpleicons.org/comptia/D71920',
    fallbackLogo: 'https://cdn.simpleicons.org/comptia/6B7280',
    url: 'https://www.comptia.org',
    tint: 'from-[#D71920]/15 to-[#B91C1C]/5',
    border: 'border-[#D71920]/30',
  },
  {
    name: 'Splunk',
    logo: 'https://cdn.simpleicons.org/splunk/65A637',
    fallbackLogo: 'https://cdn.simpleicons.org/splunk/6B7280',
    url: 'https://www.splunk.com',
    tint: 'from-[#65A637]/20 to-[#4D7C0F]/5',
    border: 'border-[#65A637]/35',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdn.simpleicons.org/microsoft/F25022',
    fallbackLogo: 'https://cdn.simpleicons.org/microsoft/6B7280',
    url: 'https://www.microsoft.com',
    tint: 'from-[#2563EB]/15 to-[#16A34A]/5',
    border: 'border-[#2563EB]/30',
  },
];

const TrustSignalsSection = () => {
  return (
    <section id="trust-signals" className="py-20 bg-[#ffffff] border-y border-[#d1d5db]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Trust Signals</p>
          <h3 className="text-2xl md:text-3xl font-black text-[#111827] mt-3">Experience and Certification Ecosystem</h3>
          <p className="text-[#6b7280] text-sm mt-3">Recognized platforms and organizations in my cybersecurity journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustSignals.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-h-[120px] bg-gradient-to-br ${brand.tint} border ${brand.border} rounded-2xl px-4 py-4 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-0.5 transition-all`}
              aria-label={brand.name}
              title={brand.name}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-white/95 border border-white shadow-md flex items-center justify-center p-3">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-10 md:h-12 md:w-12 object-contain"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if (brand.fallbackLogo && e.currentTarget.src !== brand.fallbackLogo) {
                        e.currentTarget.src = brand.fallbackLogo;
                      }
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#0284C7]/10 border border-[#0284C7]/30 flex items-center justify-center text-[#0284C7] font-extrabold text-sm">
                    CIS
                  </div>
                )}
              </div>
              <span className="text-[#111827] text-sm font-bold text-center leading-tight">{brand.name}</span>
            </a>
          ))}
        </div>

        <p className="text-[#9ca3af] text-xs text-center mt-6">
          Brand names and marks are used for identification and reference only.
        </p>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
