import type { Metadata } from "next";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: "Corporate Work | Jetpack Jungle",
  description: "Corporate films by Jetpack Jungle, a Dublin-based video production agency",
};

export default function CorporatePage() {
  return <Home />;
}
