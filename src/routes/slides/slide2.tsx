import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 12% 20%, rgba(0, 214, 255, 0.18), transparent 32%), radial-gradient(circle at 88% 80%, rgba(0, 255, 153, 0.14), transparent 28%), linear-gradient(110deg, #06202a 0%, #041119 45%, #020b12 100%)",
        }}
      >
        <header className="slide-topbar">
          <div className="brand">
            <span className="brand-dot"></span>
            <span>acme.cloud</span>
          </div>
          <span className="meta">MAY 2026</span>
        </header>
        <div className="slide-content">
          <p className="pill">performance</p>
          <h1>
            Built for scale.<span>Designed for speed.</span>
          </h1>
          <p className="summary">
            From API latency to deploy throughput, every part of the stack is
            tuned for momentum.
          </p>
          <ul className="badges">
            <li>6x Faster Builds</li>
            <li>p95 &lt; 120ms</li>
            <li>Global Caching</li>
          </ul>
        </div>
        <footer className="slide-foot">
          <span>ACME CLOUD, INC.</span>
          <span>02 / 05</span>
        </footer>
      </SlideFrame>
    </SlidePage>
  );
}
