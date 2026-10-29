import { Container } from "./container";
import type { FirmProfile, NavItem } from "./types";

export function SiteHeader({
  firm,
  nav,
}: {
  firm: FirmProfile;
  nav: NavItem[];
}) {
  return (
    <header className="lwp-header">
      <Container>
        <div className="lwp-header-inner">
          <a className="lwp-brand" href="/">
            {firm.name}
          </a>
          <nav aria-label="Primary" className="lwp-nav">
            {nav.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="lwp-button lwp-button-primary"
              href={`tel:${firm.phoneHref}`}
            >
              {firm.phone}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
