import { Container } from "./container";
import type { FirmProfile, NavItem } from "./types";

export function SiteFooter({
  firm,
  nav,
}: {
  firm: FirmProfile;
  nav: NavItem[];
}) {
  return (
    <footer className="lwp-footer">
      <Container>
        <div className="lwp-footer-grid">
          <div>
            <p className="lwp-brand">{firm.name}</p>
            <p className="lwp-address">
              {firm.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div>
            <p className="lwp-footer-label">Contact</p>
            <p>
              <a className="lwp-inline-link" href={`tel:${firm.phoneHref}`}>
                {firm.phone}
              </a>
            </p>
            <p>
              <a className="lwp-inline-link" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="lwp-footer-label">Explore</p>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="lwp-disclaimer">{firm.disclaimer}</p>
      </Container>
    </footer>
  );
}
