import React, { useState } from 'react';
import { Trophy, TrendingUp, ShieldCheck, Gauge } from 'lucide-react';
import { profileData } from '../data/mock';

const ICONS = [TrendingUp, ShieldCheck, Gauge, Trophy];

const AchievementsSection = () => {
  const [imageLoadError, setImageLoadError] = useState({});

  return (
    <section id="achievements" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest">Achievements</span>
            <span className="px-3 py-1 bg-[#3b82f6] text-white text-xs font-bold rounded-full">Top Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mt-4">
            Career <span className="text-[#4b5563]">Highlights</span>
          </h2>
          <p className="text-[#4b5563] mt-4 max-w-2xl">
            Quantifiable outcomes delivered through SOC execution, incident response discipline, and continuous security improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profileData.achievements.map((achievement, index) => {
            const Icon = ICONS[index % ICONS.length];

            return (
              <article
                key={achievement.title}
                className="p-6 bg-[#f3f4f6] rounded-xl border border-[#d1d5db]/50 hover:border-[#3b82f6] transition-all duration-300 hover:-translate-y-1"
              >
                {achievement.image && !imageLoadError[achievement.title] && (
                  <img
                    src={achievement.image}
                    alt={achievement.imageAlt || achievement.title}
                    className="w-full h-48 object-cover rounded-lg border border-[#d1d5db]/60 mb-5"
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setImageLoadError((prev) => ({
                        ...prev,
                        [achievement.title]: true,
                      }))
                    }
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d1d5db] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111827]">{achievement.title}</h3>
                    <p className="text-[#4b5563] mt-2 leading-relaxed">{achievement.description}</p>
                    {achievement.linkUrl && (
                      <a
                        href={achievement.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-sm font-semibold text-[#3b82f6] hover:opacity-80 transition-opacity"
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
