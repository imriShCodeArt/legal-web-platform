import type { Attorney } from "./types";

export function AttorneyGrid({
  attorneys,
  showBio = false,
}: {
  attorneys: Attorney[];
  showBio?: boolean;
}) {
  return (
    <div className="lwp-grid">
      {attorneys.map((attorney) => (
        <article className="lwp-card" key={attorney.name}>
          <h3>{attorney.name}</h3>
          <p className="lwp-role">{attorney.role}</p>
          <p>{attorney.focus}</p>
          {showBio && attorney.bio ? (
            <p className="lwp-bio">{attorney.bio}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
