"use client"

import Image from "next/image"

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
    image: "/team/larissa.jpg",
  },
  {
    name: "Luke",
    role: "Director + D.O.P",
    image: "/team/luke.jpg",
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
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-16">
          The Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
