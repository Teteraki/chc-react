export const Sponsors = () => {
  const sponsors = [
    {
      name: "Bow Valley College",
      logo: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/689cc405000a320c5c07/view?project=68007df0002d3c24adaa&mode=admin",
      url: "https://den.bowvalleycollege.ca/",
    },
    {
      name: "Little Rock Printing",
      logo: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/689c051e0017a4e38d2e/view?project=68007df0002d3c24adaa&mode=admin",
      url: "https://littlerockprinting.com/",
    },

    {
      name: "Annex Sodas",
      logo: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/689cc0ea00323e9d1c02/view?project=68007df0002d3c24adaa&mode=admin",
      url: "https://annexsodas.com/",
    },
  ];

  return (
    <section className="w-full py-10 shadow-inner">
      <div className="mx-auto max-w-prose text-center text-white pb-6">
        <h2 className="text-3xl font-bold">Community Supporters</h2>
        <p className="text-gray-400">Be sure to check them out below!</p>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-4">
        {sponsors.map((sponsor, i) => (
          <a
            key={i}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${sponsor.name}`}
            className="group flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white/20"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-14 w-auto opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
