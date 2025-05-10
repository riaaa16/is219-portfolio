import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 text-sm text-gray-500 text-center mt-auto">
      <div>
        Viktoria Gaiser © {new Date().getFullYear()}
      </div>
      <div className="flex justify-center gap-6 mt-4">
        {/* GitHub */}
        <a
          href="https://github.com/riaaa16"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="card-title-blue-hover transition-colors"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/viktoria-gaiser/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="card-title-yellow-hover transition-colors"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.965 0 1.75.79 1.75 1.76s-.785 1.76-1.75 1.76zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
          </svg>
        </a>
        {/* Gmail */}
        <a
          href="mailto:vg435@njit.edu"
          aria-label="Gmail"
          className="card-title-pink-hover transition-colors"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4v-9.99l8 6.99 8-6.99V18z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}