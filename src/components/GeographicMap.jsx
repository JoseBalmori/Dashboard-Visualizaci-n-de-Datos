import React from 'react';
import { topCountriesData } from '../data/netflixData';

export default function GeographicMap() {
  return (
    <div className="bg-[#2A2A2D] rounded-xl p-5 border border-neutral-800">
      <div className="mb-4">
        <h3 className="text-base font-bold text-white">Distribución geográfica de producción</h3>
        <p className="text-xs text-[#B8B8BC]">Concentración por país y Top 4 productores globales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Representación visual esquemática de rangos por región */}
        <div className="bg-[#1E1E20] p-4 rounded-lg border border-neutral-800 flex flex-col justify-between h-full">
          <div className="text-center py-6">
            <span className="text-xs uppercase tracking-widest text-[#2E7D7A] font-semibold">
              Cobertura Global: 122 Países
            </span>
            <p className="text-xs text-[#B8B8BC] mt-2">
              Norteamérica y Asia lideran el 68.1% de la producción acumulada en el catálogo.
            </p>
          </div>
          {/* Leyenda de rangos según wireframe */}
          <div className="flex items-center justify-between text-[10px] text-[#B8B8BC] pt-3 border-t border-neutral-800">
            <span>Rangos:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#2E7D7A]/20 inline-block"></span> &lt;100
              <span className="w-3 h-3 rounded-sm bg-[#2E7D7A]/50 inline-block"></span> 100-500
              <span className="w-3 h-3 rounded-sm bg-[#2E7D7A]/80 inline-block"></span> 500-1k
              <span className="w-3 h-3 rounded-sm bg-[#B5191F] inline-block"></span> &gt;1k
            </div>
          </div>
        </div>

        {/* Lista de los 4 países principales */}
        <div className="space-y-3">
          {topCountriesData.map((item, idx) => (
            <div key={item.code} className="bg-[#1E1E20] p-3 rounded-lg flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold w-5 h-5 rounded-full bg-[#2A2A2D] text-white flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.country}</p>
                  <p className="text-[11px] text-[#B8B8BC]">{item.pct}% del catálogo</p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#2E7D7A]">{item.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}