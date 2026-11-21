// Dataset base estructurado para permitir filtrado dinámico
export const rawTitlesData = [
  { id: 1, title: "Dick Johnson Is Dead", type: "Movie", year: 2020, addedYear: 2021, country: "United States", rating: "PG-13", genre: "Documentaries" },
  { id: 2, title: "Blood & Water", type: "TV Show", year: 2021, addedYear: 2021, country: "South Africa", rating: "TV-MA", genre: "International TV Shows" },
  { id: 3, title: "Ganglands", type: "TV Show", year: 2021, addedYear: 2021, country: "France", rating: "TV-MA", genre: "Crime TV Shows" },
  { id: 4, title: "Jailbirds New Orleans", type: "TV Show", year: 2021, addedYear: 2021, country: "United States", rating: "TV-MA", genre: "Docuseries" },
  { id: 5, title: "Kota Factory", type: "TV Show", year: 2021, addedYear: 2021, country: "India", rating: "TV-MA", genre: "International TV Shows" },
  { id: 6, title: "The Starling", type: "Movie", year: 2021, addedYear: 2021, country: "United States", rating: "PG-13", genre: "Comedies" },
  { id: 7, title: "My Little Pony: A New Generation", type: "Movie", year: 2021, addedYear: 2021, country: "United States", rating: "PG", genre: "Children & Family Movies" },
  { id: 8, title: "Chicago Party Aunt", type: "TV Show", year: 2021, addedYear: 2021, country: "United States", rating: "TV-MA", genre: "Comedies" },
  { id: 9, title: "The Great British Baking Show", type: "TV Show", year: 2021, addedYear: 2021, country: "United Kingdom", rating: "TV-PG", genre: "British TV Shows" },
  { id: 10, title: "Squid Game", type: "TV Show", year: 2021, addedYear: 2021, country: "South Korea", rating: "TV-MA", genre: "International TV Shows" },
  { id: 11, title: "Midnight Mass", type: "TV Show", year: 2021, addedYear: 2021, country: "United States", rating: "TV-MA", genre: "TV Horror" },
  { id: 12, title: "Intimidacion", type: "Movie", year: 2020, addedYear: 2020, country: "United States", rating: "R", genre: "Dramas" },
  { id: 13, title: "The Crown", type: "TV Show", year: 2020, addedYear: 2020, country: "United Kingdom", rating: "TV-MA", genre: "British TV Shows" },
  { id: 14, title: "Extraction", type: "Movie", year: 2020, addedYear: 2020, country: "United States", rating: "R", genre: "Action & Adventure" },
  { id: 15, title: "Lupin", type: "TV Show", year: 2021, addedYear: 2021, country: "France", rating: "TV-14", genre: "Crime TV Shows" },
  { id: 16, title: "Bridgerton", type: "TV Show", year: 2020, addedYear: 2020, country: "United States", rating: "TV-MA", genre: "Romantic TV Shows" },
  { id: 17, title: "The Queen's Gambit", type: "TV Show", year: 2020, addedYear: 2020, country: "United States", rating: "TV-MA", genre: "Dramas" },
  { id: 18, title: "Roma", type: "Movie", year: 2018, addedYear: 2018, country: "Mexico", rating: "R", genre: "Dramas" },
  { id: 19, title: "Bird Box", type: "Movie", year: 2018, addedYear: 2018, country: "United States", rating: "R", genre: "Sci-Fi" },
  { id: 20, title: "Stranger Things", type: "TV Show", year: 2019, addedYear: 2019, country: "United States", rating: "TV-14", genre: "Sci-Fi & Fantasy" }
];

export const yearlyEvolutionData = [
  { year: 2018, added: 1649, cumulative: 3404 },
  { year: 2019, added: 2016, cumulative: 5420 },
  { year: 2020, added: 1879, cumulative: 7299 },
  { year: 2021, added: 1498, cumulative: 8797 }
];

export const topGenresData = [
  { name: 'International Movies', count: 2752, isLeader: true },
  { name: 'Dramas', count: 2427, isLeader: false },
  { name: 'Comedies', count: 1674, isLeader: false },
  { name: 'International TV Shows', count: 1351, isLeader: false },
  { name: 'Documentaries', count: 869, isLeader: false }
];

export const ratingsData = [
  { rating: 'TV-MA', count: 3207, label: 'Adultos' },
  { rating: 'TV-14', count: 2160, label: '+14 años' },
  { rating: 'TV-PG', count: 863, label: 'Familiar' },
  { rating: 'R', count: 799, label: 'Restringido' },
  { rating: 'PG-13', count: 490, label: '+13 años' }
];

export const topCountriesData = [
  { country: 'United States', code: 'US', count: 3690, pct: 41.9 },
  { country: 'India', code: 'IN', count: 1046, pct: 11.9 },
  { country: 'United Kingdom', code: 'GB', count: 806, pct: 9.2 },
  { country: 'Canada', code: 'CA', count: 445, pct: 5.1 }
];