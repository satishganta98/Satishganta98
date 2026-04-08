import React, { useRef, useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { Globe2, AlertTriangle, Shield, Activity, Zap, Radio } from 'lucide-react';

const GlobeGL = lazy(() => import('react-globe.gl'));

// ─── Threat arc data ────────────────────────────────────────────────────────
const THREAT_ARCS = [
  { fromLat: 39.03, fromLng: 125.75, toLat: 38.89, toLng: -77.03,  actor: 'APT38 / Lazarus',   type: 'Financial Crime',  severity: 'critical' },
  { fromLat: 55.75, fromLng: 37.61,  toLat: 51.50, toLng: -0.12,   actor: 'APT29 / Cozy Bear', type: 'Espionage',        severity: 'critical' },
  { fromLat: 39.90, fromLng: 116.40, toLat: -33.86,toLng: 151.20,  actor: 'APT41',              type: 'IP Theft',         severity: 'high'     },
  { fromLat: 35.68, fromLng: 51.38,  toLat: 31.76, toLng: 35.21,   actor: 'APT33 / Elfin',     type: 'Destructive',      severity: 'critical' },
  { fromLat: 55.75, fromLng: 37.61,  toLat: 53.33, toLng: -6.24,   actor: 'APT28 / Fancy Bear',type: 'Espionage',        severity: 'high'     },
  { fromLat: 39.90, fromLng: 116.40, toLat: 40.71, toLng: -74.00,  actor: 'APT10',              type: 'IP Theft',         severity: 'high'     },
  { fromLat: 39.03, fromLng: 125.75, toLat: 37.56, toLng: 126.97,  actor: 'Lazarus Group',      type: 'Ransomware',       severity: 'medium'   },
  { fromLat: 35.68, fromLng: 51.38,  toLat: 25.20, toLng: 55.27,   actor: 'APT34 / OilRig',    type: 'Phishing',         severity: 'medium'   },
  { fromLat: 55.75, fromLng: 37.61,  toLat: 52.52, toLng: 13.40,   actor: 'Sandworm',           type: 'ICS Attack',       severity: 'critical' },
  { fromLat: 39.90, fromLng: 116.40, toLat: 35.68, toLng: 139.69,  actor: 'APT15',              type: 'Espionage',        severity: 'high'     },
  { fromLat: 39.03, fromLng: 125.75, toLat: 1.35,  toLng: 103.82,  actor: 'APT38',              type: 'Financial Crime',  severity: 'high'     },
  { fromLat: 35.68, fromLng: 51.38,  toLat: 48.85, toLng: 2.35,    actor: 'APT33',              type: 'Espionage',        severity: 'medium'   },
  { fromLat: 55.75, fromLng: 37.61,  toLat: -33.86,toLng: 18.42,   actor: 'APT29',              type: 'Ransomware',       severity: 'high'     },
  { fromLat: 39.90, fromLng: 116.40, toLat: 28.61, toLng: 77.20,   actor: 'APT41',              type: 'Espionage',        severity: 'medium'   },
];

// ─── City points ────────────────────────────────────────────────────────────
const CITY_POINTS = [
  { lat: 38.89, lng: -77.03,  name: 'Washington DC', type: 'target' },
  { lat: 51.50, lng: -0.12,   name: 'London',         type: 'target' },
  { lat: -33.86,lng: 151.20,  name: 'Sydney',          type: 'target' },
  { lat: 53.33, lng: -6.24,   name: 'Dublin 🏠',      type: 'home'   },
  { lat: 31.76, lng: 35.21,   name: 'Tel Aviv',        type: 'target' },
  { lat: 40.71, lng: -74.00,  name: 'New York',        type: 'target' },
  { lat: 37.56, lng: 126.97,  name: 'Seoul',           type: 'target' },
  { lat: 25.20, lng: 55.27,   name: 'Dubai',           type: 'target' },
  { lat: 52.52, lng: 13.40,   name: 'Berlin',          type: 'target' },
  { lat: 35.68, lng: 139.69,  name: 'Tokyo',           type: 'target' },
  { lat: 1.35,  lng: 103.82,  name: 'Singapore',       type: 'target' },
  { lat: 48.85, lng: 2.35,    name: 'Paris',           type: 'target' },
  { lat: -33.86,lng: 18.42,   name: 'Cape Town',       type: 'target' },
  { lat: 28.61, lng: 77.20,   name: 'New Delhi',       type: 'target' },
  // Threat origins
  { lat: 39.03, lng: 125.75,  name: 'Pyongyang',       type: 'source' },
  { lat: 55.75, lng: 37.61,   name: 'Moscow',           type: 'source' },
  { lat: 39.90, lng: 116.40,  name: 'Beijing',          type: 'source' },
  { lat: 35.68, lng: 51.38,   name: 'Tehran',           type: 'source' },
];

// Rings pulse on high-value targets
const RINGS_DATA = [
  { lat: 38.89, lng: -77.03 },
  { lat: 53.33, lng: -6.24  },
  { lat: 52.52, lng: 13.40  },
  { lat: 31.76, lng: 35.21  },
];

const SEV_COLOR = { critical: '#ef4444', high: '#f97316', medium: '#eab308' };

// ─── Scrolling threat feed ───────────────────────────────────────────────────
const THREAT_FEED = [
  { time: '00:01', actor: 'APT29',    action: 'Spear-phishing campaign detected targeting EU financial institutions', sev: 'critical' },
  { time: '00:03', actor: 'APT38',    action: 'SWIFT malware variant identified — 3 banks in APAC region affected',  sev: 'critical' },
  { time: '00:07', actor: 'Sandworm', action: 'ICS/SCADA recon packets from 185.220.x.x (RU) — critical infra alert', sev: 'critical' },
  { time: '00:12', actor: 'APT41',    action: 'Zero-day CVE-2025-3971 actively exploited against tech sector',        sev: 'high'     },
  { time: '00:18', actor: 'APT33',    action: 'New Shamoon variant targeting energy sector in Middle East',            sev: 'high'     },
  { time: '00:24', actor: 'APT28',    action: 'Credential-stuffing attack against government VPN endpoints',           sev: 'high'     },
  { time: '00:31', actor: 'Lazarus',  action: 'Crypto exchange targeted — $2.1M moved to mixers via Tornado Cash',    sev: 'medium'   },
  { time: '00:39', actor: 'APT34',    action: 'DNS-tunneling C2 channel established from Tehran infrastructure',       sev: 'medium'   },
  { time: '00:47', actor: 'APT15',    action: 'Watering-hole attack on defence contractors — Japan/South Korea',       sev: 'medium'   },
  { time: '00:55', actor: 'APT10',    action: 'Cloud misconfiguration exploited — 400K records exfiltrated',           sev: 'high'     },
];

const SEV_BADGE = {
  critical: { bg: '#ef444422', border: '#ef444455', text: '#ef4444' },
  high:     { bg: '#f9731622', border: '#f9731655', text: '#f97316' },
  medium:   { bg: '#eab30822', border: '#eab30855', text: '#eab308' },
};

// ─── Component ───────────────────────────────────────────────────────────────
const ThreatMapSection = () => {
  const globeRef    = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 560 });
  const [feedIdx, setFeedIdx]       = useState(0);

  // Responsive globe sizing
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ width: w, height: Math.min(Math.round(w * 0.62), 640) });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Cycle threat feed every 3s
  useEffect(() => {
    const id = setInterval(() => setFeedIdx(i => (i + 1) % THREAT_FEED.length), 3000);
    return () => clearInterval(id);
  }, []);

  const onGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate      = true;
    controls.autoRotateSpeed = 0.45;
    controls.enableZoom      = false;
    controls.enablePan       = false;
    globeRef.current.pointOfView({ lat: 20, lng: 10, altitude: 2.3 }, 0);
  }, []);

  const visibleFeed = [0, 1, 2].map(offset => THREAT_FEED[(feedIdx + offset) % THREAT_FEED.length]);

  return (
    <section id="threat-map" className="py-24" style={{ background: '#060d16' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">
            Live Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Global <span className="text-[#3b82f6]">Threat Map</span>
          </h2>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Real-time visualization of active APT campaigns and nation-state cyber threats
            targeting critical infrastructure worldwide.
          </p>
        </div>

        {/* ── Globe + Feed panel ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Globe */}
          <div
            ref={containerRef}
            className="flex-1 relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(30,58,95,0.6)',
              background: 'radial-gradient(ellipse at 50% 40%, #0d1b2a 0%, #060d16 100%)',
              minHeight: 380,
            }}
          >
            {/* LIVE badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', border: '1px solid rgba(34,197,94,0.3)' }}>
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[#22c55e] text-xs font-mono font-bold tracking-widest">LIVE</span>
            </div>

            <Suspense fallback={
              <div className="flex flex-col items-center justify-center gap-4"
                style={{ height: dimensions.height || 500 }}>
                <div className="w-12 h-12 border-2 border-[#3b82f6] border-t-transparent rounded-full animate-spin" />
                <p className="text-[#94a3b8] text-sm font-mono animate-pulse">
                  Initialising threat intelligence…
                </p>
              </div>
            }>
              <GlobeGL
                ref={globeRef}
                width={dimensions.width}
                height={dimensions.height}
                onGlobeReady={onGlobeReady}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl={null}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere={true}
                atmosphereColor="#1e40af"
                atmosphereAltitude={0.14}

                /* Arcs */
                arcsData={THREAT_ARCS}
                arcColor={d => [SEV_COLOR[d.severity], '#60a5fa']}
                arcDashLength={0.42}
                arcDashGap={0.15}
                arcDashAnimateTime={d =>
                  d.severity === 'critical' ? 1100 :
                  d.severity === 'high'     ? 1900 : 3000}
                arcStroke={d => d.severity === 'critical' ? 0.6 : 0.38}
                arcAltitude={0.32}
                arcLabel={d =>
                  `<div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:8px 12px;color:#e2e8f0;font-size:11px;font-family:monospace;line-height:1.5">
                    <b style="color:${SEV_COLOR[d.severity]}">${d.actor}</b><br/>
                    ${d.type}
                  </div>`}

                /* Points */
                pointsData={CITY_POINTS}
                pointColor={d =>
                  d.type === 'source' ? '#ef4444' :
                  d.type === 'home'   ? '#22c55e' : '#3b82f6'}
                pointAltitude={0.015}
                pointRadius={d => d.type === 'home' ? 0.56 : 0.38}
                pointLabel={d =>
                  `<div style="background:#0f172a;border:1px solid #334155;border-radius:6px;padding:6px 10px;color:#f1f5f9;font-size:11px;font-family:monospace">
                    ${d.name}
                  </div>`}

                /* Rings */
                ringsData={RINGS_DATA}
                ringColor={() => t => `rgba(239,68,68,${(1 - t) * 0.8})`}
                ringMaxRadius={3.5}
                ringPropagationSpeed={2.2}
                ringRepeatPeriod={850}
              />
            </Suspense>

            {/* Severity legend – bottom-left */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1.5">
              {[['critical','#ef4444','Critical'],['high','#f97316','High'],['medium','#eab308','Medium']].map(
                ([, color, label]) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-7 h-0.5 rounded-full"
                      style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                    <span className="text-[11px] text-[#94a3b8] font-mono">{label}</span>
                  </div>
                )
              )}
            </div>

            {/* Point legend – bottom-right */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1.5">
              {[['#ef4444','Threat Origin'],['#3b82f6','Target'],['#22c55e','Dublin (Home)']].map(
                ([color, label]) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full"
                      style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                    <span className="text-[11px] text-[#94a3b8] font-mono">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── Right panel: live feed + stats ── */}
          <div className="lg:w-80 flex flex-col gap-4 flex-shrink-0">

            {/* Feed title */}
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#f97316] animate-pulse" />
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">
                Intel Feed
              </h3>
            </div>

            {/* Feed cards */}
            <div className="flex flex-col gap-3">
              {visibleFeed.map((item, i) => {
                const badge = SEV_BADGE[item.sev];
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl transition-all duration-500 font-mono"
                    style={{
                      border: '1px solid rgba(30,58,95,0.6)',
                      background: i === 0
                        ? 'rgba(30,58,95,0.45)'
                        : `rgba(13,27,42,${0.7 - i * 0.2})`,
                      opacity: i === 0 ? 1 : 0.65 - i * 0.1,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-[#475569]">{item.time} UTC</span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          color: badge.text,
                          background: badge.bg,
                          border: `1px solid ${badge.border}`,
                        }}
                      >
                        {item.sev.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-[#3b82f6] text-xs font-bold mb-1">{item.actor}</div>
                    <div className="text-[#94a3b8] text-[11px] leading-relaxed">{item.action}</div>
                  </div>
                );
              })}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: AlertTriangle, label: 'Active Threats', value: '14',  color: '#ef4444' },
                { icon: Globe2,        label: 'Countries',       value: '40+', color: '#3b82f6' },
                { icon: Shield,        label: 'APT Groups',      value: '8',   color: '#8b5cf6' },
                { icon: Activity,      label: '24h Alerts',      value: '247', color: '#22c55e' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: '#0d1b2a',
                    border: '1px solid rgba(30,58,95,0.5)',
                  }}
                >
                  <Icon className="w-5 h-5 mx-auto mb-1.5" style={{ color }} />
                  <div className="text-2xl font-black text-white mb-0.5">{value}</div>
                  <div className="text-[#475569] text-[10px] font-mono">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-[#1e3a5f] text-[10px] font-mono text-center">
              ⚠ Demo visualization — portfolio purposes only
            </p>
          </div>
        </div>

        {/* ── APT group quick-ref bar ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { actor: 'APT29 / Cozy Bear',  origin: 'Russia',       tactic: 'Supply Chain',   color: '#ef4444' },
            { actor: 'APT38 / Lazarus',     origin: 'N. Korea',     tactic: 'Financial',      color: '#f97316' },
            { actor: 'APT41',               origin: 'China',        tactic: 'Dual-Use Ops',   color: '#eab308' },
            { actor: 'APT33 / Elfin',       origin: 'Iran',         tactic: 'Destructive',    color: '#8b5cf6' },
          ].map(({ actor, origin, tactic, color }) => (
            <div
              key={actor}
              className="p-4 rounded-xl font-mono"
              style={{
                background: '#0d1b2a',
                border: `1px solid ${color}33`,
                borderLeft: `3px solid ${color}`,
              }}
            >
              <div className="text-white text-xs font-bold mb-1">{actor}</div>
              <div className="text-[#64748b] text-[10px]">{origin} · {tactic}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThreatMapSection;
