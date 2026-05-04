import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide3")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 0% 100%, rgba(255, 129, 66, 0.22), transparent 36%), radial-gradient(circle at 100% 0%, rgba(255, 199, 86, 0.2), transparent 35%), linear-gradient(115deg, #2a1410 0%, #180c09 45%, #0f0806 100%)",
        }}
      >
        <header className="slide-topbar">
          <div className="brand">
            <span className="brand-dot"></span>
            <span>acme.cloud</span>
          </div>
          <span className="meta">JUNE 2026</span>
        </header>
        <div className="slide-content">
          <p className="pill">metrics</p>
          <h1>
            The proof<span>is in the metrics.</span>
          </h1>
          <p className="summary">
            Clear operational wins across reliability, cost efficiency, and
            release confidence.
          </p>
          <ul className="badges">
            <li>3.5x Throughput</li>
            <li>99.99% Success</li>
            <li>40% Lower Cost</li>
          </ul>
        </div>
        <footer className="slide-foot">
          <span>ACME CLOUD, INC.</span>
          <span>03 / 05</span>
        </footer>
      </SlideFrame>
    </SlidePage>
  );
}
