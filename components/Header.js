import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>Shoe Store</a>
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </nav>
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for shoes..."
            className="border rounded-l px-4 py-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
