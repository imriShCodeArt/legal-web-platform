import type { PracticeArea } from "./types";

export function PracticeAreas({ areas }: { areas: PracticeArea[] }) {
  return (
    <div className="lwp-grid">
      {areas.map((area) => (
        <a className="lwp-card" href={area.href} key={area.title}>
          <h3>{area.title}</h3>
          <p>{area.summary}</p>
        </a>
      ))}
    </div>
  );
}
