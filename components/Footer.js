import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact" className="ml-4">
              <a>Contact</a>
            </Link>
            <Link href="/terms" className="ml-4">
              <a>Terms of Service</a>
            </Link>
          </div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ml-4">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-4">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-4">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Shoe Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
