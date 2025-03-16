"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

export default function Navbar() {
  const currentRoute = usePathname();

  const linkStyle = "text-white/80 hover:text-white transition-colors";
  const activeStyle =
    "relative text-white font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="text-xl text-white tracking-wide font-book-antiqua"
        >
          Radu-Florin
          <HiMiniCodeBracketSquare className="inline-block" />
        </Link>
        <ul className="flex space-x-8 text-xl">
          <li>
            <Link href="/">
              <span className={currentRoute === "/" ? activeStyle : linkStyle}>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span
                className={
                  currentRoute === "/projects" ? activeStyle : linkStyle
                }
              >
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className={currentRoute === "/about" ? activeStyle : linkStyle}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className={
                  currentRoute === "/contact" ? activeStyle : linkStyle
                }
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <button className="border border-white px-4 py-2 rounded uppercase text-white hover:bg-white hover:text-black transition-colors duration-200">
          Dansk
        </button>
      </div>
    </nav>
  );
}
