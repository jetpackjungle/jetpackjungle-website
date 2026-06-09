"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowUpRight, CircleAlert, CircleCheck, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackGoogleAnalyticsEvent } from "@/components/google-analytics";

type ContactFormModalProps = {
  children?: ReactNode;
  open?: boolean;
  triggerClassName?: string;
  onOpenChange?: (open: boolean) => void;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactFormModal({
  children,
  open: controlledOpen,
  triggerClassName,
  onOpenChange,
}: ContactFormModalProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const open = controlledOpen ?? uncontrolledOpen;
  const isSubmitting = formStatus === "submitting";

  const handleOpenChange = (nextOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = [
      String(formData.get("firstName") ?? ""),
    ].filter(Boolean).join(" ");

    const payload = {
      access_key: "8d6e7c3a-3e0f-4de9-90a9-d7bcd3a7a94c",
      name,
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      website: String(formData.get("website") ?? ""),
      message: String(formData.get("message") ?? ""),
      // Honeypot field — Web3Forms ignores submissions where this is filled
      botcheck: "",
    };

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      form.reset();
      setFormStatus("success");
      trackGoogleAnalyticsEvent("generate_lead", { method: "contact_form" });
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children ? (
        <DialogTrigger asChild>
          <button type="button" className={triggerClassName}>
            {children}
          </button>
        </DialogTrigger>
      ) : null}
      <DialogContent className="h-dvh max-h-dvh w-screen max-w-none translate-y-[-50%] gap-0 overflow-y-auto rounded-none border-0 bg-black p-0 text-foreground shadow-none duration-300 ease-out data-[state=closed]:duration-200 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 sm:max-w-none lg:overflow-hidden">
        <div className="flex min-h-full flex-col lg:grid lg:h-full lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:grid-rows-1">
          <section className="flex bg-black px-4 py-10 pr-12 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:min-h-0 lg:px-14 xl:px-16">
            <div className="mx-auto flex w-full max-w-2xl flex-col justify-between gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-6">
                <DialogTitle className="font-serif text-4xl font-medium leading-none md:text-6xl xl:text-7xl">
                  Contact us
                </DialogTitle>
                <DialogDescription className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  Tell us what you are working on and we will get back to you.
                </DialogDescription>
              </div>

              <div className="grid gap-6 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground md:gap-8 md:pt-8 md:text-xl">
                <div className="grid gap-3">
                  <a
                    href="mailto:questions@jetpackjungle.com"
                    className="group inline-flex w-fit min-w-0 items-center gap-2 break-all text-foreground transition-colors hover:text-accent"
                  >
                    questions@jetpackjungle.com
                    <ArrowUpRight className="size-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <a
                    href="tel:+353832067752"
                    className="w-fit text-foreground transition-colors hover:text-accent"
                  >
                    +353832067752
                  </a>
                </div>

                <address className="not-italic">
                  77 Camden Street Lower,
                  <br />
                  Dublin, D02 XE80
                  <br />
                  Ireland
                </address>

                <p className="max-w-xl">
                  <a
                    href="https://forms.gle/4x8gAsxkAZeoyAsJA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    Freelance form here
                  </a>
                </p>
              </div>
            </div>
          </section>

          <form
            className="border-t border-border bg-background px-4 py-8 sm:px-6 md:px-10 md:py-12 lg:min-h-0 lg:overflow-y-auto lg:border-l lg:border-t-0 lg:px-14 lg:py-16 xl:px-16"
            onSubmit={handleSubmit}
          >
            <div className="mx-auto grid max-w-3xl gap-6 md:gap-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-3">
                  <Label htmlFor="contact-first-name">First name</Label>
                  <Input
                    id="contact-first-name"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    disabled={isSubmitting}
                    className="h-12 rounded-none border-border bg-black/20 text-base"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="contact-company">Company</Label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    disabled={isSubmitting}
                    className="h-12 rounded-none border-border bg-black/20 text-base"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="grid gap-3">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    className="h-12 rounded-none border-border bg-black/20 text-base"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    disabled={isSubmitting}
                    className="h-12 rounded-none border-border bg-black/20 text-base"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="contact-message">How can we help?</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  minLength={10}
                  required
                  disabled={isSubmitting}
                  className="min-h-40 resize-y rounded-none border-border bg-black/20 text-base md:min-h-56"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="contact-website">Website</Label>
                <Input
                  id="contact-website"
                  name="website"
                  type="text"
                  inputMode="url"
                  placeholder="example.com"
                  disabled={isSubmitting}
                  className="h-12 rounded-none border-border bg-black/20 text-base"
                />
              </div>

              {formStatus === "success" ? (
                <Alert className="border-accent text-foreground">
                  <CircleCheck className="size-4 text-accent" strokeWidth={1.5} />
                  <AlertTitle>Message sent</AlertTitle>
                  <AlertDescription>
                    Thanks, we&apos;ll be in touch soon.
                  </AlertDescription>
                </Alert>
              ) : null}

              {formStatus === "error" && errorMessage ? (
                <Alert id="contact-form-error" variant="destructive">
                  <CircleAlert className="size-4" strokeWidth={1.5} />
                  <AlertTitle>Message not sent</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              ) : null}

              <Button
                type="submit"
                size="lg"
                className="h-14 w-full rounded-none px-8 text-base sm:w-fit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send className="size-5" />
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
