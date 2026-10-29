import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="lwp-section" id={id}>
      <Container>
        <div className="lwp-section-heading">
          {eyebrow ? <p className="lwp-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p className="lwp-lede">{intro}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
