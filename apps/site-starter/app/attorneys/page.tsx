import type { Metadata } from "next";
import { AttorneyGrid, Hero, Section, SiteFrame } from "@legal/ui";
import { attorneys, firm, nav } from "../../content/firm";

export const metadata: Metadata = {
  title: "Attorneys",
  description: `Attorneys at ${firm.name}.`,
};

export default function AttorneysPage() {
  return (
    <SiteFrame firm={firm} nav={nav}>
      <Hero
        compact
        eyebrow="People"
        lede="Replace these profiles with the firm's attorneys."
        title="Attorneys"
      />
      <Section title="The team">
        <AttorneyGrid attorneys={attorneys} showBio />
      </Section>
    </SiteFrame>
  );
}
