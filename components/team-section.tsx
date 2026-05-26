"use client";

import Image from "next/image";

const team = [
  {
    name: "Jite",
    role: "Director + Producer",
    image: "/team/jite.jpg",
  },
  {
    name: "Joe",
    role: "Head of Post-Production",
    image: "/team/joe.jpg",
  },
  {
    name: "Larissa",
    role: "Director",
    image: "/work/portra-400.jpg",
  },
  {
    name: "Camila",
    role: "D.O.P",
    image: "/team/camila.jpg",
  },
  {
    name: "Aenea",
    role: "Production Assistant",
    image: "/team/aenea.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-card px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 text-3xl font-medium text-white sm:mb-14 md:mb-16 md:text-4xl">
          The Team
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 md:grid-cols-3 md:gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-base font-medium text-foreground sm:text-lg">{member.name}</h3>
              <p className="text-sm leading-snug text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
