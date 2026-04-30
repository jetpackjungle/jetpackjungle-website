import { Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "http://instagram.com/JETPACKJUNGLE",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jetpackjungle",
    icon: Linkedin,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-background"
        >
          <Icon size={19} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
