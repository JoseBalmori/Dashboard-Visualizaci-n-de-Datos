import React from 'react';
import { ratingsData } from '../data/netflixData';

export default function AudienceChart() {
  const maxCount = Math.max(...ratingsData.map(r => r.count));

  return (
    <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800 flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-white">Clasificación por audiencia</h3>
        <p className="text-xs text-[#B8B8BC]">Distribución por rating de edad</p>
      </div>

      <div className="flex items-end justify-between gap-2 h-40 mt-6 pt-4 border-b border-neutral-700">
        {ratingsData.map((item, idx) => {
          const heightPct = (item.count / maxCount) * 100;
          return (
            <div key={item.rating} className="flex flex-col items-center flex-1 h-full justify-end">
              <span className="text-[10px] text-white font-semibold mb-1">
                {item.count.toLocaleString()}
              </span>
              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full max-w-[36px] rounded-t-md transition-all ${
                  idx === 0 ? 'bg-[#B5191F]' : 'bg-[#2E7D7A]'
                }`}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-2 mt-2">
        {ratingsData.map((item) => (
          <div key={item.rating} className="flex-1 text-center">
            <p className="text-xs font-bold text-white">{item.rating}</p>
            <p className="text-[10px] text-[#B8B8BC]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}