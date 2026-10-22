import type { Metadata } from "next";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: "Commercial Work | Jetpack Jungle",
  description: "Commercial films by Jetpack Jungle, a Dublin-based video production agency",
};

export default function CommercialPage() {
  return <Home />;
}
