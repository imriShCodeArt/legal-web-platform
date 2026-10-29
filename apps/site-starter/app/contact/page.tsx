import type { Metadata } from "next";
import { ContactPanel, Hero, Section, SiteFrame } from "@legal/ui";
import { firm, nav } from "../../content/firm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${firm.name}.`,
};

export default function ContactPage() {
  return (
    <SiteFrame firm={firm} nav={nav}>
      <Hero
        compact
        eyebrow="Office"
        lede="Call, email, or visit. Replace the sample details in the content file."
        title="Contact the firm"
      />
      <Section title="Get in touch">
        <ContactPanel firm={firm} />
      </Section>
    </SiteFrame>
  );
}
