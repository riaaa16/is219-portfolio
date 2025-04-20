"use client"

import Link from "next/link"
import { useState } from "react";

export function MainNav() {
  const routes = [
    { href: "/", label: "about" },
    { href: "/projects", label: "projects" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-8">
      <div className="flex items-center gap-3">
        <img
          src="/peta/animated logo.png"
          alt="Animated logo"
          width={32}
          height={32}
          className="w-8 h-8"
          style={{ display: 'block' }}
        />
        <Link href="/" className="font-pixel text-2xl">
          Viktoria Gaiser
        </Link>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-lg transition-opacity hover:opacity-70"
          >
            {route.label}
          </Link>
        ))}
      </div>
      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open menu"
          className="p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <div
          className={`absolute top-20 right-4 bg-white rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 z-50 border transition-all duration-300 transform
            ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}