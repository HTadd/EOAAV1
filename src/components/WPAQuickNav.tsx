import React from "react";

const WPAQuickNav: React.FC = () => {
  return (
    <section aria-labelledby="wpa-quick-nav" className="mt-8">
      <h3 id="wpa-quick-nav" className="text-xl font-semibold text-foreground mb-2">WPA Classification — Quick Navigation</h3>

      <p className="text-sm text-muted-foreground mb-4">5 toggle sections. Each “Read more” opens the official PDF at the most relevant page.</p>

      <div className="space-y-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>1) Scope & Application</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.6</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Explains why classification exists for Para athletics, who it applies to, and how the rules interact with other WPA regulations. Good starting point before beginning the classification process.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2024-07/2023_02_17%20WPA%20Classification%20Rules%20and%20Regulations_Edition%20February%202023_Final%20%282%29.pdf#page=6">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>2) Definitions & Key Terms</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.6</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Defines essential terms used throughout the classification rules (impairments, eligible events, assessment terms) to reduce ambiguity for athletes and officials.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2024-07/2023_02_17%20WPA%20Classification%20Rules%20and%20Regulations_Edition%20February%202023_Final%20%282%29.pdf#page=6">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>3) Classification Process</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.10</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Overview of medical, technical, and competition observation steps used to assign classes in Track & Field events.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2024-07/2023_02_17%20WPA%20Classification%20Rules%20and%20Regulations_Edition%20February%202023_Final%20%282%29.pdf#page=10">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>4) Track / Running Rules & Modifications</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.20</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Key guidance for track events (start procedures, guide runners for visually impaired classes, wheelchair racing rules) and how classification specifics affect running events.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2024-07/2023_02_17%20WPA%20Classification%20Rules%20and%20Regulations_Edition%20February%202023_Final%20%282%29.pdf#page=20">Read more in the PDF</a>
          </details>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <details>
            <summary className="cursor-pointer font-semibold flex items-center justify-between">
              <span>5) Field Events & Equipment</span>
              <span className="inline-flex items-center text-sm px-2 py-0.5 border border-border rounded-full text-muted-foreground">PDF p.30</span>
            </summary>
            <p className="mt-3 text-muted-foreground">
              Rules for field event adaptations (seated vs standing throws), equipment checks, and how classifiers determine appropriate modifications.
            </p>
            <a className="inline-block mt-3 font-medium text-sport-blue" target="_blank" rel="noopener noreferrer" href="https://www.paralympic.org/sites/default/files/2024-07/2023_02_17%20WPA%20Classification%20Rules%20and%20Regulations_Edition%20February%202023_Final%20%282%29.pdf#page=30">Read more in the PDF</a>
          </details>
        </div>

      </div>

      <footer className="text-sm text-muted-foreground mt-4">Note: “PDF p.X” uses the PDF viewer page number (the “Read more” link jumps to that page).</footer>
    </section>
  );
};

export default WPAQuickNav;
