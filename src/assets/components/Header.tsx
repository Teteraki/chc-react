export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 dark:text-teal-300" href="#">
          <img
            src="https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680958d80017cee7ca28/view?project=68007df0002d3c24adaa&mode=admin"
            className="h-8"
          ></img>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className=" text-white transition hover:text-gray-500/75"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className=" text-white transition hover:text-gray-500/75"
                  href="#"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  className=" text-white transition hover:text-gray-500/75"
                  href="#"
                >
                  History
                </a>
              </li>

              <li>
                <a
                  className=" text-white transition hover:text-gray-500/75"
                  href="#"
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
