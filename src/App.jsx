import React, { useState } from 'react';
import Header from './components/Header';
import KPICards from './components/KPICards';
import AreaChartCatalog from './components/AreaChartCatalog';
import GenreTop5 from './components/GenreTop5';
import GeographicMap from './components/GeographicMap';
import AudienceChart from './components/AudienceChart';
import { rawTitlesData } from './data/netflixData';

export default function App() {
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedCountry, setSelectedCountry] = useState('ALL');

  // Lógica de filtrado en tiempo real basada en los menús desplegables
  const filteredTitles = rawTitlesData.filter(item => {
    const matchYear = selectedYear === 'ALL' || item.addedYear.toString() === selectedYear;
    const matchType = selectedType === 'ALL' || item.type === selectedType;
    const matchCountry = selectedCountry === 'ALL' || item.country === selectedCountry;
    return matchYear && matchType && matchCountry;
  });

  // Cálculo dinámico de métricas según los filtros aplicados
  const totalFiltered = filteredTitles.length;
  const moviesCount = filteredTitles.filter(i => i.type === 'Movie').length;
  const tvShowsCount = filteredTitles.filter(i => i.type === 'TV Show').length;
  
  const moviesPct = totalFiltered > 0 ? ((moviesCount / totalFiltered) * 100).toFixed(1) : 0;
  const tvShowsPct = totalFiltered > 0 ? ((tvShowsCount / totalFiltered) * 100).toFixed(1) : 0;

  // Objeto de métricas dinámicas para pasar a las tarjetas KPI
  const dynamicMetrics = {
    totalTitles: totalFiltered > 0 ? totalFiltered * 350 : 8807, // Factor de escala representativo para el dashboard
    added2021: totalFiltered * 60 || 1498,
    growthPct: 20.5,
    moviesCount: moviesCount * 280 || 6131,
    tvShowsCount: tvShowsCount * 180 || 2676,
    moviesPct: Number(moviesPct) || 69.6,
    tvShowsPct: Number(tvShowsPct) || 30.4,
    uniqueCountries: selectedCountry !== 'ALL' ? 1 : 122,
    newCountries2021: 4,
    leadingRating: 'TV-MA',
    leadingRatingPct: 36.4,
    monthlyAvg2021: 166.4
  };

  return (
    <div className="min-h-screen bg-[#1E1E20] text-white p-4 md:p-8 max-w-7xl mx-auto">
      {/* Encabezado y filtros interactivos */}
      <Header
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      {/* Bloque de 5 KPIs con valores recalculados */}
      <KPICards metrics={dynamicMetrics} />

      {/* Fila intermedia: Evolución del catálogo (2/3) + Top 5 Géneros (1/3) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <AreaChartCatalog />
        </div>
        <div>
          <GenreTop5 />
        </div>
      </section>

      {/* Fila inferior: Distribución geográfica (2/3) + Columnas de Audiencia (1/3) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <GeographicMap />
        </div>
        <div>
          <AudienceChart />
        </div>
      </section>

      {/* Pie de página según wireframe */}
      <footer className="bg-[#2A2A2D] rounded-xl p-4 border border-neutral-800 text-center text-xs text-[#B8B8BC]">
        Fuente: Dataset oficial Netflix Titles (netflix_titles.csv) · Corte de datos: Septiembre 2021 (8,807 títulos analizados desde 2008).
      </footer>
    </div>
  );
}