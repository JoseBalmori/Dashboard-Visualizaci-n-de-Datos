import React from 'react';
import { yearlyEvolutionData } from '../data/netflixData';

export default function AreaChartCatalog() {
  const maxVal = Math.max(...yearlyEvolutionData.map(d => d.cumulative));
  const width = 500;
  const height = 180;

  const points = yearlyEvolutionData.map((d, i) => {
    const x = (i / (yearlyEvolutionData.length - 1)) * width;
    const y = height - (d.cumulative / maxVal) * (height - 20);
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
      <div className="mb-4">
        <h3 className="text-base font-bold text-white">Evolución acumulada del catálogo (2008 – 2021)</h3>
        <p className="text-xs text-[#B8B8BC]">Crecimiento neto de títulos disponibles al cierre de cada año</p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height + 25}`} className="w-full h-52">
          <defs>
            <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E7D7A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2E7D7A" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <polygon fill="url(#tealGradient)" points={areaPoints} />
          <polyline fill="none" stroke="#2E7D7A" strokeWidth="3" points={points} />

          {yearlyEvolutionData.map((d, i) => {
            const x = (i / (yearlyEvolutionData.length - 1)) * width;
            const y = height - (d.cumulative / maxVal) * (height - 20);
            return (
              <g key={d.year}>
                <circle cx={x} cy={y} r="3.5" fill="#FFFFFF" stroke="#2E7D7A" strokeWidth="2" />
                {i % 2 === 0 || d.year === 2021 ? (
                  <text x={x} y={height + 18} textAnchor="middle" fill="#B8B8BC" fontSize="10">
                    {d.year}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}