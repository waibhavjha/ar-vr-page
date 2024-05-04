'use client'
import { useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // List of search options
  const searchOptions = [
    'Resorts', 
    'Banquet Hall', 
    'Co-working', 
    'Co-Living', 
    'Real-Estate', 
    'Gym', 
    'Restaurants', 
    'Clinics', 
    'Pre-school', 
    'College', 
    'School', 
    'Hotel rooms'
  ];

  // Function to handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const results = searchOptions.filter(option => option.toLowerCase().includes(term));
    setSearchResults(results);
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          {/* Search bar */}
          <div className="flex justify-center mb-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          {/* Search results */}
          <div className="flex flex-wrap justify-center space-x-2">
            {searchResults.map((result, index) => (
              <div key={index}>
                <Link href={`/${result.toLowerCase().replace(/\s/g, '-')}`}>
                  {/* Use a div or any other valid element here instead of <a> */}
                  <div className="text-blue-500">{result}</div>
                </Link>
              </div>
            ))}
          </div>
          {/* Title and description */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                India&apos;s ameliorated #SuperApp
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Explore & Experience in 360°.
                Explore world at the comfort of your fingertips whenever, wherever you are. Visualize & Experience the real-world virtually enhanced like never before the world&apos;s powerful & leading advanced-tech, now in India.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="https://youtu.be/bTevj3PY6gM"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Get Tour
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
