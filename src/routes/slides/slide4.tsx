import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide4")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 80% 18%, rgba(80, 130, 255, 0.2), transparent 28%), linear-gradient(110deg, #131a2f 0%, #0a1023 50%, #060914 100%)",
        }}
      >
        <header className="slide-topbar">
          <div className="brand">
            <span className="brand-dot"></span>
            <span>acme.cloud</span>
          </div>
          <span className="meta">JULY 2026</span>
        </header>
        <div className="slide-content">
          <p className="pill">growth</p>
          <h1>
            Twelve months<span>of compounding growth.</span>
          </h1>
          <p className="summary">
            A single operating model for engineering and platform teams with
            measurable outcomes.
          </p>
          <ul className="badges">
            <li>$48.2M Processed</li>
            <li>2,847 Releases</li>
            <li>0 Major Incidents</li>
          </ul>
        </div>
        <footer className="slide-foot">
          <span>ACME CLOUD, INC.</span>
          <span>04 / 05</span>
        </footer>
      </SlideFrame>
    </SlidePage>
  );
}
