import React from 'react';

const trustSignals = [
  {
    name: 'Accenture',
    logo: 'https://cdn.simpleicons.org/accenture/d9fb06',
    url: 'https://www.accenture.com',
  },
  {
    name: 'CIS Security',
    logo: null,
    url: 'https://www.cis-security.co.uk',
  },
  {
    name: 'CompTIA',
    logo: 'https://cdn.simpleicons.org/comptia/d9fb06',
    url: 'https://www.comptia.org',
  },
  {
    name: 'Splunk',
    logo: 'https://cdn.simpleicons.org/splunk/d9fb06',
    url: 'https://www.splunk.com',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdn.simpleicons.org/microsoft/d9fb06',
    url: 'https://www.microsoft.com',
  },
];

const TrustSignalsSection = () => {
  return (
    <section id="trust-signals" className="py-16 bg-[#1a1c1b] border-y border-[#3f4816]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Trust Signals</p>
          <h3 className="text-2xl md:text-3xl font-black text-white mt-3">Experience and Certification Ecosystem</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustSignals.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[92px] bg-[#302f2c] border border-[#3f4816]/50 rounded-xl px-4 py-3 flex items-center justify-center gap-3 hover:border-[#d9fb06] transition-colors"
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
                <div className="h-8 min-w-8 px-2 rounded-md border border-[#d9fb06]/50 text-[#d9fb06] font-bold text-xs flex items-center justify-center">
                  CIS
                </div>
              )}
              <span className="text-[#c8c6c1] text-sm font-semibold">{brand.name}</span>
            </a>
          ))}
        </div>

        <p className="text-[#6f6d68] text-xs text-center mt-6">
          Brand names and marks are used for identification and reference only.
        </p>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
