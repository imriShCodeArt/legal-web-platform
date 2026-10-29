import type { FirmProfile } from "./types";

export function ContactPanel({ firm }: { firm: FirmProfile }) {
  return (
    <div className="lwp-contact">
      <div>
        <p className="lwp-footer-label">Office</p>
        <p className="lwp-address">
          {firm.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
      <div>
        <p className="lwp-footer-label">Phone and email</p>
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
    </div>
  );
}
