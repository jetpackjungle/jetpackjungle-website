import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Team | Jetpack Jungle",
  description: "Meet the team behind Jetpack Jungle — Dublin-based filmmakers, storytellers, and visual artists.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
