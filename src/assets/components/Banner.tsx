import { useState, useEffect } from "react";

const images = [
  "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4c3002cd03edec9/view?project=68007df0002d3c24adaa&mode=admin",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4df0015f4015efe/view?project=68007df0002d3c24adaa&mode=admin",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6801496f00331af5e85b/view?project=68007df0002d3c24adaa&mode=admin",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680149ca001b8fecc6e2/view?project=68007df0002d3c24adaa&mode=admin",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014a2e003b5beb6331/view?project=68007df0002d3c24adaa&mode=admin",
];

export const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-prose text-center text-white">
          {/* <img src="/bunny-banner-logo.png"></img> */}
          <h1 className="text-4xl font-bold sm:text-5xl">
            <strong className="text-yellow-300"> We </strong>
            are Cold Hands Collective
          </h1>

          <p className="mt-4 text-base sm:text-lg/relaxed">
            Calgary based, non-profit event and tournament hosting organization
            dedicated to building accessible community competitions.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="inline-block rounded border border-indigo-500 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block rounded border border-gray-300 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "bg-white" : "bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
