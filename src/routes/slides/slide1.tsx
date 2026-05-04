import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide1")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "linear-gradient(rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2vw 2.2vw, linear-gradient(90deg, rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2vw 2.2vw, radial-gradient(circle at 16% 100%, rgba(155, 109, 255, 0.9) 0%, transparent 40%), radial-gradient(circle at 84% 12%, rgba(85, 137, 255, 0.85) 0%, transparent 35%), linear-gradient(100deg, #19254f 0%, #060b26 58%, #020617 100%)",
        }}
      >
        <header className="slide-topbar">
          <div className="brand">
            <span className="brand-dot"></span>
            <span>acme.cloud</span>
          </div>
          <span className="meta">APRIL 2026</span>
        </header>
        <div className="slide-content">
          <p className="pill">introducing v2.0</p>
          <h1>
            Acme Cloud<span>built for what's next.</span>
          </h1>
          <p className="summary">
            A faster, calmer infrastructure platform for teams shipping the next
            generation of software.
          </p>
          <ul className="badges">
            <li>99.99% Uptime</li>
            <li>Edge in 38 regions</li>
            <li>SOC 2 Type II</li>
          </ul>
        </div>
        <footer className="slide-foot">
          <span>ACME CLOUD, INC.</span>
          <span>01 / 05</span>
        </footer>
      </SlideFrame>
    </SlidePage>
  );
}
