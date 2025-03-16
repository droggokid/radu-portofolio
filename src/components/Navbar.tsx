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
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row">
        {/* Top row: Logo and language button (mobile) */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-xl md:text-2xl text-white tracking-wide font-book-antiqua whitespace-nowrap overflow-hidden truncate max-w-[200px]"
          >
            Radu-Florin{" "}
            <HiMiniCodeBracketSquare className="inline-block ml-1" />
          </Link>
          <button className="md:hidden border border-white px-4 py-2 rounded uppercase text-white hover:bg-white hover:text-black transition-colors duration-200">
            Dansk
          </button>
        </div>

        {/* Second row on mobile; single row on desktop */}
        <ul className="flex justify-center space-x-8 text-xl mt-2 w-full">
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

        {/* Language button for desktop */}
        <div className="hidden md:flex justify-end w-full">
          <button className="border border-white px-4 py-2 rounded uppercase text-white hover:bg-white hover:text-black transition-colors duration-200">
            Dansk
          </button>
        </div>
      </div>
    </nav>
  );
}
