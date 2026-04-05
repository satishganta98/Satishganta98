import React, { useEffect, useMemo, useState } from 'react';
import { Activity, Gauge, ShieldAlert, TimerReset } from 'lucide-react';
import { profileData } from '../data/mock';

const KPI_CONFIG = [
  {
    metricId: 'mttd-improvement',
    label: 'MTTD Improvement',
    icon: Gauge,
    format: (n) => `${Math.round(n)}%`,
  },
  {
    metricId: 'mttr-improvement',
    label: 'MTTR Improvement',
    icon: TimerReset,
    format: (n) => `${Math.round(n)}%`,
  },
  {
    metricId: 'alerts-triaged',
    label: 'Alert Volume (Weekly)',
    icon: Activity,
    format: (n) => `${Math.round(n)}+`,
  },
  {
    metricId: 'false-positive-reduction',
    label: 'False-Positive Rate Reduced',
    icon: ShieldAlert,
    format: (n) => `${Math.round(n)}%`,
  },
];

const getNumericValue = (rawValue) => {
  const parsed = parseFloat(String(rawValue).replace(/[^\d.]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};

const AnimatedNumber = ({ target, format }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <span>{format(value)}</span>;
};

const SOCDashboardSection = () => {
  const metricsById = useMemo(
    () =>
      profileData.impactMetrics.reduce((acc, metric) => {
        acc[metric.id] = metric;
        return acc;
      }, {}),
    [],
  );

  return (
    <section id="soc-dashboard" className="py-24 bg-[#171918]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Live SOC Dashboard</span>
            <span className="px-3 py-1 bg-[#d9fb06] text-[#1a1c1b] text-xs font-bold rounded-full">Real Metrics</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Operational <span className="text-[#888680]">KPI Monitor</span>
          </h2>
          <p className="text-[#888680] mt-4 max-w-3xl">
            Core SOC performance indicators powered by the same impact data used across this portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KPI_CONFIG.map((item) => {
            const metric = metricsById[item.metricId];
            if (!metric) return null;

            const Icon = item.icon;
            const target = getNumericValue(metric.value);
            const maxTrend = Math.max(...(metric.trend || [0]), 1);
            const currentTrend = metric.trend?.[metric.trend.length - 1] || 0;
            const progress = Math.max(8, Math.min(100, Math.round((currentTrend / maxTrend) * 100)));

            return (
              <article
                key={item.metricId}
                className="p-6 bg-[#302f2c] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-[#3f4816] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#d9fb06]" />
                  </div>
                  <span className="text-xs text-[#888680] uppercase tracking-wider">{metric.delta}</span>
                </div>

                <p className="text-[#888680] text-xs uppercase tracking-widest">{item.label}</p>
                <p className="text-4xl font-black text-white mt-2">
                  <AnimatedNumber target={target} format={item.format} />
                </p>

                <div className="mt-5">
                  <div className="h-2 bg-[#1a1c1b] rounded-full overflow-hidden border border-[#3f4816]/40">
                    <div
                      className="h-full bg-[#d9fb06] rounded-full transition-all duration-700"
                      style={{ width: `${progress}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SOCDashboardSection;
