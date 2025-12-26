import React from "react";

const WSPSQuickNav: React.FC = () => {
  return (
    <section aria-labelledby="wsps-quick-nav" className="mt-8">
      <h3 id="wsps-quick-nav" className="text-xl font-semibold text-foreground mb-2">WSPS Rulebook — Quick Navigation</h3>

      <p className="text-sm text-muted-foreground mb-4">5 toggle sections. Each “Read more” opens the official PDF.</p>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>1) Introduction</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.5</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Sets the purpose of the rulebook and how it’s used at WSPS recognised competitions. Explains how WSPS governance fits within IPC structures and related documents. Clarifies the document layout (regulations vs. discipline rules) and points readers to companion material such as classification rules.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2025-12/WSPS%20Rulebook%202026_vFinal_0.pdf#page=5">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>2) Definitions</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.5</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Defines key terms used throughout the rulebook (roles, scoring/entry terms, procedures). Reduces ambiguity so athletes, teams, and officials interpret requirements consistently.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2025-12/WSPS%20Rulebook%202026_vFinal_0.pdf#page=5">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>3) Competition Regulations (core governance)</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.11</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Competition-level rules for how WSPS recognised events are run and controlled. Covers management, participation standards, and overarching compliance expectations.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2025-12/WSPS%20Rulebook%202026_vFinal_0.pdf#page=11">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>4) Rifle Rules</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.38</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Discipline rules governing para rifle events, formats, timing, and positions. Includes WSPS-specific procedures and competition expectations for rifle matches.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2025-12/WSPS%20Rulebook%202026_vFinal_0.pdf#page=38">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>5) Pistol Rules</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.45</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Discipline rules covering pistol event formats, timing, and position requirements. Includes operational and handling/safety expectations used in sanctioned competition.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2025-12/WSPS%20Rulebook%202026_vFinal_0.pdf#page=45">Read more in the PDF</a>
          </details>
        </div>

      </div>

      <footer className="text-sm text-muted-foreground mt-4">Note: “PDF p.X” uses the PDF viewer page number (the “Read more” link jumps to that page).</footer>
    </section>
  );
};

export default WSPSQuickNav;
