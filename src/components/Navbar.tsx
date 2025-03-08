import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between text-gray-950">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
