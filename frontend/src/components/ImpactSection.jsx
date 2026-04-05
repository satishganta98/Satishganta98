import React from 'react';
import { BarChart3, TrendingDown, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/mock';

const SparklineBars = ({ points }) => {
  const max = Math.max(...points, 1);

  return (
    <div className="flex items-end gap-1 h-14">
      {points.map((point, index) => (
        <div
          key={index}
          className="w-2.5 rounded-sm bg-[#d9fb06]/90"
          style={{ height: `${Math.max(14, (point / max) * 56)}px` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-[#ffffff] border-y border-[#d1d5db]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Proof of Impact</span>
            <span className="px-3 py-1 bg-[#3b82f6] text-white text-xs font-bold rounded-full">SOC Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Measurable <span className="text-[#4b5563]">Security Outcomes</span>
          </h2>
          <p className="text-[#4b5563] mt-4 max-w-3xl">
            Real operational improvements delivered through threat detection, triage efficiency, and incident response optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.impactMetrics.map((metric) => (
            <article
              key={metric.id}
              className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-[#3b82f6]/15 hover:border-[#3b82f6]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 bg-[#d1d5db] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3b82f6] bg-[#ffffff] px-2.5 py-1 rounded-full">
                  <TrendingDown className="w-3.5 h-3.5" />
                  {metric.delta}
                </span>
              </div>

              <p className="text-[#4b5563] text-xs uppercase tracking-widest">{metric.label}</p>
              <p className="text-4xl font-black text-[#111827] mt-2">{metric.value}</p>
              <p className="text-[#4b5563] text-sm mt-1">{metric.description}</p>

              <div className="mt-5 p-3 bg-[#ffffff] rounded-lg border border-[#d1d5db]/40">
                <SparklineBars points={metric.trend} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#d1d5db] to-[#f3f4f6] rounded-2xl border border-[#d1d5db]">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#3b82f6] flex-shrink-0 mt-0.5" />
            <p className="text-[#111827]/90 leading-relaxed">
              These outcomes reflect consistent execution of SOC workflows, automation playbooks, and data-driven threat prioritization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
