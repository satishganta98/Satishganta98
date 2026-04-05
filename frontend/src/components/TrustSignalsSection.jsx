import React from 'react';

const trustSignals = [
  {
    name: 'Accenture',
    logo: 'https://cdn.simpleicons.org/accenture/3b82f6',
    url: 'https://www.accenture.com',
  },
  {
    name: 'CIS Security',
    logo: null,
    url: 'https://www.cis-security.co.uk',
  },
  {
    name: 'CompTIA',
    logo: 'https://cdn.simpleicons.org/comptia/3b82f6',
    url: 'https://www.comptia.org',
  },
  {
    name: 'Splunk',
    logo: 'https://cdn.simpleicons.org/splunk/3b82f6',
    url: 'https://www.splunk.com',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdn.simpleicons.org/microsoft/3b82f6',
    url: 'https://www.microsoft.com',
  },
];

const TrustSignalsSection = () => {
  return (
    <section id="trust-signals" className="py-16 bg-[#ffffff] border-y border-[#d1d5db]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Trust Signals</p>
          <h3 className="text-2xl md:text-3xl font-black text-[#111827] mt-3">Experience and Certification Ecosystem</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustSignals.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[92px] bg-[#f3f4f6] border border-[#d1d5db]/50 rounded-xl px-4 py-3 flex items-center justify-center gap-3 hover:border-[#3b82f6] hover:shadow-md transition-all"
              aria-label={brand.name}
              title={brand.name}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="h-8 min-w-8 px-2 rounded-md border border-[#3b82f6]/50 text-[#3b82f6] font-bold text-xs flex items-center justify-center">
                  CIS
                </div>
              )}
              <span className="text-[#4b5563] text-sm font-semibold">{brand.name}</span>
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
