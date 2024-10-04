import Link from 'next/link';

export default function HomePage() {
  const countries = [
    { name: 'Pakistan', path: '/country/Pakistan' },
    { name: 'Turkey', path: '/country/Turkey' },
    { name: 'Switzerland', path: '/country/Switzerland' },
    { name: 'Italy', path: '/country/Italy' },
    { name: 'Netherlands', path: '/country/Netherlands' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-6"><strong>Country List</strong></h1>
      <ul className="space-y-4">
        {countries.map((country) => (
          <li key={country.name}>
            <Link href={country.path} className="text-blue-500 hover:underline text-2xl">
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



