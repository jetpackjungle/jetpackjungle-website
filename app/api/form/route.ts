import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FORM_FROM = "Jetpack Jungle <website@jetpackjungle.com>";
const CONTACT_FORM_TO = "jite@jetpackjungle.com";
const isProduction = process.env.NODE_ENV === "production";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

interface RequestBody {
  firstName: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
  website?: string;
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: NextRequest) {
  try {
    const data: RequestBody = await request.json();

    console.log("Received contact form submission:", {
      firstName: data.firstName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      website: data.website,
      messageLength: data.message?.length ?? 0,
    });

    if (!data.firstName || !data.email || !isValidEmail(data.email)) {
      return NextResponse.json({ error: "first name and email are required" }, { status: 400 });
    }

    if (isProduction) {
      if (!resend) {
        console.error("RESEND_API_KEY is missing");
        return NextResponse.json({ error: "email service is not configured" }, { status: 500 });
      }

      const safeData = {
        firstName: escapeHtml(data.firstName),
        company: escapeHtml(data.company || "Not provided"),
        email: escapeHtml(data.email),
        phone: escapeHtml(data.phone || "Not provided"),
        website: escapeHtml(data.website || "Not provided"),
        message: escapeHtml(data.message || "Not provided").replaceAll("\n", "<br />"),
      };

      const { data: email, error } = await resend.emails.send({
        from: CONTACT_FORM_FROM,
        to: CONTACT_FORM_TO,
        replyTo: data.email,
        subject: "New Jetpack Jungle contact form submission",
        html: `
          <p><strong>Name:</strong> ${safeData.firstName}</p>
          <p><strong>Company:</strong> ${safeData.company}</p>
          <p><strong>Email:</strong> ${safeData.email}</p>
          <p><strong>Phone:</strong> ${safeData.phone}</p>
          <p><strong>Website:</strong> ${safeData.website}</p>
          <p><strong>Message:</strong><br />${safeData.message}</p>
        `,
      });

      if (error) {
        console.error("Resend failed to send contact form email:", error);
        return NextResponse.json({ error: "failed to send email" }, { status: 502 });
      }

      console.log("Resend contact form email sent:", { id: email?.id });
    } else {
      console.log("Contact form submission in development:", data);
    }

    return NextResponse.json({ message: "form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json({ error: "internal server error" }, { status: 500 });
  }
}
