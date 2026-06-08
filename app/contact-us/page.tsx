"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactUsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Flag the contact form to open once we land on the home page, then
    // navigate to a clean "/" URL (no query params or hash) so subsequent
    // in-page nav links don't carry any stale state.
    try {
      sessionStorage.setItem("open-contact-form", "1");
    } catch {
      // Ignore storage access errors (e.g. privacy mode)
    }

    router.replace("/");
  }, [router]);

  return null;
}
