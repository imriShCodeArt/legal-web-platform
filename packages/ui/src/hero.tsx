import { Button } from "./button";
import { Container } from "./container";

type Action = {
  href: string;
  label: string;
};

export function Hero({
  eyebrow,
  title,
  lede,
  primaryAction,
  secondaryAction,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "lwp-hero lwp-hero-compact" : "lwp-hero"}>
      <Container>
        {eyebrow ? <p className="lwp-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="lwp-lede">{lede}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="lwp-actions">
            {primaryAction ? (
              <Button href={primaryAction.href}>{primaryAction.label}</Button>
            ) : null}
            {secondaryAction ? (
              <Button href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
