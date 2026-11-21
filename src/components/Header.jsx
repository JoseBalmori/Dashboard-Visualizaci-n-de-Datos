import React from 'react';

export default function Header({ selectedYear, setSelectedYear, selectedType, setSelectedType, selectedCountry, setSelectedCountry }) {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 bg-[#2A2A2D] p-4 rounded-xl border border-neutral-800">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Netflix Control Panel <span className="text-[#B5191F] text-sm font-medium ml-2">2008 – 2021</span>
        </h1>
        <p className="text-xs text-[#B8B8BC] mt-1">
          Análisis estratégico de crecimiento y diversidad del catálogo global
        </p>
      </div>

      {/* Filtros interactivos según el wireframe */}
      <div className="flex flex-wrap gap-3 w-full lg:w-auto">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-[#1E1E20] text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#B5191F]"
        >
          <option value="ALL">Fecha: 2008 – 2021 (Todo)</option>
          <option value="2021">Año: 2021</option>
          <option value="2020">Año: 2020</option>
          <option value="2019">Año: 2019</option>
          <option value="2018">Año: 2018</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-[#1E1E20] text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#B5191F]"
        >
          <option value="ALL">Tipo: Todos (Películas y Series)</option>
          <option value="Movie">Solo Películas</option>
          <option value="TV Show">Solo Series de TV</option>
        </select>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="bg-[#1E1E20] text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#B5191F]"
        >
          <option value="ALL">País: Global (122 países)</option>
          <option value="United States">Estados Unidos</option>
          <option value="India">India</option>
          <option value="United Kingdom">Reino Unido</option>
          <option value="Canada">Canadá</option>
        </select>
      </div>
    </header>
  );
}
