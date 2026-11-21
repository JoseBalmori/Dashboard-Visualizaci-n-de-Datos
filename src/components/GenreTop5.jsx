import React from 'react';
import { topGenresData } from '../data/netflixData';

export default function GenreTop5() {
  const maxCount = Math.max(...topGenresData.map(g => g.count));

  return (
    <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
      <div className="mb-4">
        <h3 className="text-base font-bold text-white">Top 5 géneros predominantes</h3>
        <p className="text-xs text-[#B8B8BC]">Orden descendente por volumen de títulos (líder resaltado)</p>
      </div>

      <div className="space-y-3">
        {topGenresData.map((genre) => {
          const widthPct = (genre.count / maxCount) * 100;
          return (
            <div key={genre.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className={genre.isLeader ? 'font-bold text-white' : 'text-[#B8B8BC]'}>
                  {genre.name}
                </span>
                <span className="font-semibold text-white">{genre.count.toLocaleString()}</span>
              </div>
              <div className="w-full h-3 bg-[#1E1E20] rounded-full overflow-hidden">
                <div
                  style={{ width: `${widthPct}%` }}
                  className={`h-full rounded-full ${genre.isLeader ? 'bg-[#B5191F]' : 'bg-[#2E7D7A]'}`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}