export const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
            <img
              src="https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095c21001977dae23e/view?project=68007df0002d3c24adaa&mode=admin"
              alt="Cold Hands Collective logo"
              className="h-20 w-auto"
            />
            <p className="text-white font-semibold tracking-wide text-center md:text-left">
              Cold Hands Collective
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/yycoldhands/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
            <a
              href="https://x.com/yycoldhands"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.9 2H22l-7.7 8.8L22.8 22h-6.2l-4.9-6.2L6 22H2l8.2-9.4L1.5 2h6.3l4.4 5.6L18.9 2z" />
              </svg>
            </a>
            <a
              href="https://www.twitch.tv/coldhandscollective"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Twitch</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 2L3 6v16h5v2h3l2-2h5l4-4V2H4zm15 12l-2 2h-6l-2 2v-2H6V4h13v10zm-8-7h-2v5h2V7zm5 0h-2v5h2V7z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@yycoldhands"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <span className="sr-only">Youtube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15V9l5.2 3L10 15zm12-3c0-2.2-.2-4.4-.2-4.4s-.2-1.8-.9-2.6a2.9 2.9 0 0 0-2.1-.9C15.7 4.9 12 4.9 12 4.9h0s-3.7 0-6.8.2c-.8 0-1.6.3-2.1.9-.7.8-.9 2.6-.9 2.6S2 9.8 2 12s.2 4.4.2 4.4.2 1.8.9 2.6c.5.6 1.3.9 2.1.9 3.1.2 6.8.2 6.8.2s3.7 0 6.8-.2c.8 0 1.6-.3 2.1-.9.7-.8.9-2.6.9-2.6S22 14.2 22 12z" />
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
