import { notFound } from 'next/navigation';

const countries: { [key: string]: { name: string; population: string; capital: string } } = {
  pakistan: { name: 'Pakistan', population: '251,269,164', capital: 'Islamabad' },
  turkey: { name: 'Turkey', population: '85,341,241', capital: 'Ankara' },
  switzerland: { name: 'Switzerland', population: '8,698,851', capital: 'Bern' },
  italy: { name: 'Italy', population: '59,037,474', capital: 'Rome' },
  netherlands: { name: 'Netherlands', population: '17,733,300', capital: 'Amsterdam' }
};

export default function CountryPage({ params }: { params: { country_name: string } }) {
  // Convert the country_name parameter to lowercase for matching
  const countryKey = params.country_name.toLowerCase();

  // Access the country from the countries object
  const country = countries[countryKey];

  // If the country does not exist, return a 404 not found page
  if (!country) {
    return notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{country.name}</h1>
      <p className="text-lg mt-2">
        <span className="text-red-700 font-semibold">Population: </span>{country.population}
      </p>
      <p className="text-lg mt-2">
        <span className="text-red-700 font-semibold">Capital: </span>{country.capital}
      </p>
    </div>
  );
}
