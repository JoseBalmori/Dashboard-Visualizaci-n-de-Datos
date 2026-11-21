import React from 'react';
import { yearlyEvolutionData } from '../data/netflixData';

export default function KPICards({ metrics }) {
  // Mini línea SVG para el KPI principal
  const maxCum = Math.max(...yearlyEvolutionData.map(d => d.cumulative));
  const points = yearlyEvolutionData
    .map((d, i) => {
      const x = (i / (yearlyEvolutionData.length - 1)) * 120;
      const y = 40 - (d.cumulative / maxCum) * 35;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <section className="space-y-4 mb-6">
      {/* Fila 1: KPI Principal (2/3) + KPI 5 Ritmo Mensual (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* KPI Principal con fondo rojo #B5191F */}
        <div className="lg:col-span-2 bg-[#B5191F] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-lg">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-red-100 bg-black/20 px-2 py-1 rounded">
              KPI Principal · Títulos Disponibles
            </span>
            <div className="mt-3 flex items-baseline gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                {metrics.totalTitles.toLocaleString()}
              </h2>
              <span className="text-sm font-semibold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                +{metrics.growthPct}% en 2021
              </span>
            </div>
            <p className="text-sm text-red-100 mt-2">
              +{metrics.added2021.toLocaleString()} títulos netos incorporados en el último año registrado
            </p>
          </div>

          {/* Mini línea de evolución acumulada */}
          <div className="mt-4 sm:mt-0 bg-black/20 p-3 rounded-lg border border-white/10">
            <p className="text-[10px] text-red-100 mb-1 uppercase">Tendencia acumulada</p>
            <svg width="120" height="45" className="overflow-visible">
              <polyline
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                points={points}
              />
            </svg>
          </div>
        </div>

        {/* KPI 5: Ritmo Mensual */}
        <div className="bg-[#2A2A2D] rounded-xl p-6 border border-neutral-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium text-[#B8B8BC]">KPI 5 · Ritmo de incorporación</span>
            <h3 className="text-3xl font-bold text-white mt-2">
              {Math.round(metrics.monthlyAvg2021)} <span className="text-base font-normal text-[#B8B8BC]">títulos/mes</span>
            </h3>
          </div>
          <p className="text-xs text-[#2E7D7A] font-medium mt-4 bg-[#2E7D7A]/10 p-2 rounded">
            Promedio constante entre enero y septiembre de 2021 (1,498 estrenos)
          </p>
        </div>
      </div>

      {/* Fila 2: KPI 2 (Composición), KPI 3 (Alcance), KPI 4 (Audiencia) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* KPI 2: Composición con barra apilada horizontal */}
        <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
          <span className="text-xs font-medium text-[#B8B8BC]">KPI 2 · Composición del catálogo</span>
          <div className="flex justify-between items-baseline mt-2">
            <span className="text-lg font-bold text-white">{metrics.moviesPct}% Películas</span>
            <span className="text-lg font-bold text-[#2E7D7A]">{metrics.tvShowsPct}% Series</span>
          </div>
          {/* Barra apilada horizontal 100% */}
          <div className="w-full h-3 bg-[#1E1E20] rounded-full overflow-hidden flex mt-3">
            <div style={{ width: `${metrics.moviesPct}%` }} className="bg-[#B5191F] h-full" title="Películas"></div>
            <div style={{ width: `${metrics.tvShowsPct}%` }} className="bg-[#2E7D7A] h-full" title="Series"></div>
          </div>
          <p className="text-xs text-[#B8B8BC] mt-2">
            {metrics.moviesCount.toLocaleString()} películas vs. {metrics.tvShowsCount.toLocaleString()} series
          </p>
        </div>

        {/* KPI 3: Alcance internacional con barra de progreso */}
        <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
          <span className="text-xs font-medium text-[#B8B8BC]">KPI 3 · Alcance internacional</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold text-white">{metrics.uniqueCountries} países</span>
            <span className="text-xs text-[#2E7D7A] font-semibold">+{metrics.newCountries2021} vs. 2020</span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-[#B8B8BC] mb-1">
              <span>Peso líder: EE. UU.</span>
              <span>41.9%</span>
            </div>
            <div className="w-full h-2.5 bg-[#1E1E20] rounded-full overflow-hidden">
              <div className="bg-[#2E7D7A] h-full rounded-full" style={{ width: '41.9%' }}></div>
            </div>
          </div>
        </div>

        {/* KPI 4: Perfil de audiencia */}
        <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
          <span className="text-xs font-medium text-[#B8B8BC]">KPI 4 · Perfil de la audiencia</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold text-white">{metrics.leadingRating}</span>
            <span className="text-sm text-[#B8B8BC]">predominante ({metrics.leadingRatingPct}%)</span>
          </div>
          <p className="text-xs text-[#B8B8BC] mt-3">
            3,207 títulos dirigidos a público adulto, seguido de TV-14 (24.5%)
          </p>
        </div>
      </div>
    </section>
  );
}