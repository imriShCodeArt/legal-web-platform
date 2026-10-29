import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { FirmProfile, NavItem } from "./types";

export function SiteFrame({
  firm,
  nav,
  children,
}: {
  firm: FirmProfile;
  nav: NavItem[];
  children: ReactNode;
}) {
  return (
    <div className="lwp-site">
      <a className="lwp-skip" href="#content">
        Skip to content
      </a>
      <SiteHeader firm={firm} nav={nav} />
      <main id="content">{children}</main>
      <SiteFooter firm={firm} nav={nav} />
    </div>
  );
}
