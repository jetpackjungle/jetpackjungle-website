import Image from "next/image";

const brands = [
  {
    name: "Bulmers",
    logo: "/brands/bulmers.jpeg",
  },
  {
    name: "Aviva",
    logo: "/brands/aviva.webp",
  },
  {
    name: "Red Bull",
    logo: "/brands/red-bull.webp",
  },
  {
    name: "Lidl",
    logo: "/brands/lidl.jpeg",
  },
  {
    name: "Fáilte Ireland",
    logo: "/brands/failte-ireland.jpeg",
  },
  {
    name: "HelloFresh",
    logo: "/brands/hellofresh.webp",
  },
  {
    name: "West Cork Irish Whiskey",
    logo: "/brands/west-cork.webp",
  },
  {
    name: "Kellogg's",
    logo: "/brands/kelloggs.webp",
  },
  {
    name: "Zambrero",
    logo: "/brands/zambrero.webp",
  },
  {
    name: "Paramount+",
    logo: "/brands/paramount-plus.webp",
  },
  {
    name: "Candido",
    logo: "/brands/candido.png",
  },
  {
    name: "Sport Ireland",
    logo: "/brands/sport-ireland.webp",
  },
];

export function BrandWall() {
  return (
    <section className="bg-white px-4 py-16 text-neutral-950 sm:px-6 sm:py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-5xl text-center text-2xl font-medium leading-snug text-neutral-950 text-balance sm:text-3xl md:text-4xl">
          We collaborate with brands of all sizes, from small startups to global enterprises.
        </h2>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-14 md:mt-28 lg:grid-cols-6 lg:gap-x-12 lg:gap-y-20">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative mx-auto flex h-16 w-full max-w-36 items-center justify-center sm:h-24 sm:max-w-40 lg:h-28"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 30vw, 45vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
