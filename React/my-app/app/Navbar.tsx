import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}