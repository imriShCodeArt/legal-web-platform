import type { Attorney, FirmProfile, NavItem, PracticeArea } from "@legal/ui";

/** Sample content. Replace this file when you copy the starter for a firm. */
export const firm: FirmProfile = {
  name: "Sample Law Firm",
  tagline: "Steady counsel for families and owner-led businesses.",
  description:
    "This is placeholder copy for a new firm site. Replace it with the firm's positioning, then keep building on the shared components.",
  phone: "(555) 010-2000",
  phoneHref: "+15550102000",
  email: "office@example.com",
  address: ["100 Market Street", "Suite 200", "Sample City"],
  disclaimer:
    "Sample website content for development. It is not legal advice and does not create an attorney-client relationship.",
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Contact", href: "/contact" },
];

export const practiceAreas: PracticeArea[] = [
  {
    title: "Business",
    summary: "Contracts, formations, and disputes for closely held companies.",
    href: "/contact",
  },
  {
    title: "Family",
    summary: "Divorce, custody, and agreements, explained in plain language.",
    href: "/contact",
  },
  {
    title: "Estate planning",
    summary: "Wills, trusts, and the documents a family actually needs.",
    href: "/contact",
  },
];

export const attorneys: Attorney[] = [
  {
    name: "Jordan Hale",
    role: "Partner",
    focus: "Business counsel",
    bio: "Placeholder biography. Describe this attorney's practice and the clients they represent.",
  },
  {
    name: "Riley Chen",
    role: "Partner",
    focus: "Family law",
    bio: "Placeholder biography. Describe how this attorney guides clients through family matters.",
  },
  {
    name: "Avery Cole",
    role: "Counsel",
    focus: "Estate planning",
    bio: "Placeholder biography. Describe the planning work this attorney handles.",
  },
];
