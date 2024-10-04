import Link from 'next/link';

const countries: { [key: string]: { name: string; population: string; capital: string } } = {
  pakistan: { name: 'Pakistan', population: '251,269,164', capital: 'Islamabad' },
  turkey: { name: 'Turkey', population: '85,341,241', capital: 'Ankara' },
  switzerland: { name: 'Switzerland', population: '8,698,851', capital: 'Bern' },
  italy: { name: 'Italy', population: '59,037,474', capital: 'Rome' },
  netherlands: { name: 'Netherlands', population: '17,733,300', capital: 'Amsterdam' }
};

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl mb-6"><strong>Country List</strong></h1>
      <ul className="space-y-4">
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link href={`/country/${countryKey}`} className="text-blue-500 hover:underline text-2xl">
              {countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
