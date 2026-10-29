import {
  AttorneyGrid,
  ContactPanel,
  Hero,
  PracticeAreas,
  Section,
  SiteFrame,
} from "@legal/ui";
import { attorneys, firm, nav, practiceAreas } from "../content/firm";

export default function HomePage() {
  return (
    <SiteFrame firm={firm} nav={nav}>
      <Hero
        eyebrow={firm.name}
        lede={firm.description}
        primaryAction={{ href: "/contact", label: "Request a consultation" }}
        secondaryAction={{ href: "/attorneys", label: "Meet the attorneys" }}
        title={firm.tagline}
      />
      <Section
        eyebrow="Practice"
        intro="Each new site passes its own practice areas into this shared grid."
        title="How the firm can help"
      >
        <PracticeAreas areas={practiceAreas} />
      </Section>
      <Section eyebrow="People" title="Attorneys">
        <AttorneyGrid attorneys={attorneys} />
      </Section>
      <Section eyebrow="Office" title="Speak with the firm">
        <ContactPanel firm={firm} />
      </Section>
    </SiteFrame>
  );
}
