import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide5")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 10% 75%, rgba(35, 131, 255, 0.18), transparent 30%), radial-gradient(circle at 90% 20%, rgba(110, 160, 255, 0.14), transparent 32%), linear-gradient(110deg, #151f36 0%, #0b1327 48%, #050b18 100%)",
        }}
      >
        <header className="slide-topbar">
          <div className="brand">
            <span className="brand-dot"></span>
            <span>acme.cloud</span>
          </div>
          <span className="meta">AUGUST 2026</span>
        </header>
        <div className="slide-content">
          <p className="pill">next step</p>
          <h1>
            Ready to transform<span>your workflow?</span>
          </h1>
          <p className="summary">
            Adopt the same blueprint top cloud-native teams use to ship faster
            with less stress.
          </p>
          <ul className="badges">
            <li>Migration in 2 weeks</li>
            <li>White-glove onboarding</li>
            <li>Enterprise-ready</li>
          </ul>
        </div>
        <footer className="slide-foot">
          <span>ACME CLOUD, INC.</span>
          <span>05 / 05</span>
        </footer>
      </SlideFrame>
    </SlidePage>
  );
}
