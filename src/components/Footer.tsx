import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 text-sm text-gray-500 text-center mt-auto">
      Viktoria Gaiser © {new Date().getFullYear()} &middot;{' '}
      <a href="mailto:vg435@njit.edu" className="underline hover:text-primary">vg435@njit.edu</a>
    </footer>
  );
}