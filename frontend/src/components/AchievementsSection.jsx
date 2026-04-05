import React from 'react';
import { Trophy, TrendingUp, ShieldCheck, Gauge } from 'lucide-react';
import { profileData } from '../data/mock';

const ICONS = [TrendingUp, ShieldCheck, Gauge, Trophy];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-[#1a1c1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Achievements</span>
            <span className="px-3 py-1 bg-[#d9fb06] text-[#1a1c1b] text-xs font-bold rounded-full">Top Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4">
            Career <span className="text-[#888680]">Highlights</span>
          </h2>
          <p className="text-[#888680] mt-4 max-w-2xl">
            Quantifiable outcomes delivered through SOC execution, incident response discipline, and continuous security improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profileData.achievements.map((achievement, index) => {
            const Icon = ICONS[index % ICONS.length];

            return (
              <article
                key={achievement.title}
                className="p-6 bg-[#302f2c] rounded-xl border border-[#3f4816]/50 hover:border-[#d9fb06] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3f4816] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <p className="text-[#888680] mt-2 leading-relaxed">{achievement.description}</p>
                    {achievement.linkUrl && (
                      <a
                        href={achievement.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-sm font-semibold text-[#d9fb06] hover:opacity-80 transition-opacity"
                      >
                        {achievement.linkLabel || 'View details'}
                      </a>
                    )}
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

export default AchievementsSection;
