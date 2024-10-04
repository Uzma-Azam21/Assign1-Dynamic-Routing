import { notFound } from 'next/navigation';

const countries = {
  pakistan: {
    name: 'Pakistan',
    population: '251,269,164',
    capital: 'Islamabad',
  },
  turkey: {
    name: 'Turkey',
    population: '87,473,805',
    capital: 'Ankara',
  },
  switzerland: {
    name: 'Switzerland',
    population: '8,921,981',
    capital: 'Bern',
  },
  italy: {
    name: 'Italy',
    population: '59,342,867',
    capital: 'Rome',
  },
  netherlands: {
    name: 'Netherlands',
    population: '18,228,742',
    capital: 'Amsterdam',
  },
};

export default function CountryPage({ params }: { params: { country_name: string } }) {
  // Convert the country_name parameter to lowercase for matching
  const countryKey = params.country_name.toLowerCase();
  const country = countries[countryKey];

  if (!country) {
    return notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">{country.name}</h1>
      <p className="text-lg mt-4">
        <span className="text-red-700 font-semibold">Population:</span> {country.population}
      </p>
      <p className="text-lg mt-2">
        <span className="text-red-700 font-semibold">Capital:</span> {country.capital}
      </p>
    </div>
  );
}
