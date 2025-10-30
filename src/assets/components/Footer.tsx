export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img
              src="https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680958d80017cee7ca28/view?project=68007df0002d3c24adaa&mode=admin"
              alt="Cold Hands Collective logo"
              className="h-8"
            />
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="transition hover:text-gray-400">
              Events
            </a>
            <a href="#" className="transition hover:text-gray-400">
              About
            </a>
            <a href="#" className="transition hover:text-gray-400">
              Partners
            </a>
            <a href="#" className="transition hover:text-gray-400">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.22 4.22 0 0 0 1.84-2.34 8.27 8.27 0 0 1-2.65 1.03A4.13 4.13 0 0 0 16 4a4.15 4.15 0 0 0-4.15 4.15c0 .33.04.66.1.97A11.77 11.77 0 0 1 3.15 5.1a4.15 4.15 0 0 0 1.29 5.54 4.03 4.03 0 0 1-1.88-.52v.05a4.15 4.15 0 0 0 3.33 4.07 4.2 4.2 0 0 1-1.87.07 4.15 4.15 0 0 0 3.87 2.87A8.32 8.32 0 0 1 2 19.54a11.73 11.73 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cold Hands Collective. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
