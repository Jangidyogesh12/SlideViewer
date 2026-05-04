import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";

export const Route = createFileRoute("/slides/slide5")({
  component: RouteComponent,
});

function RouteComponent() {
  const isThumbnail = new URLSearchParams(window.location.search).get("thumbnail") === "1";

  const slide = {
    canvasStyle:
      "radial-gradient(circle at 10% 75%, rgba(35, 131, 255, 0.18), transparent 30%), radial-gradient(circle at 90% 20%, rgba(110, 160, 255, 0.14), transparent 32%), linear-gradient(110deg, #151f36 0%, #0b1327 48%, #050b18 100%)",
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">AUGUST 2026</span></header>
      <div class="slide-content"><p class="pill">next step</p><h1>Ready to transform<span>your workflow?</span></h1><p class="summary">Adopt the same blueprint top cloud-native teams use to ship faster with less stress.</p><ul class="badges"><li>Migration in 2 weeks</li><li>White-glove onboarding</li><li>Enterprise-ready</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>05 / 05</span></footer>
    `,
  };

  if (isThumbnail) {
    return <SlideFrame slide={slide} />;
  }

  return (
    <main className="flex min-h-screen items-center px-[10%]">
      <SlideFrame slide={slide} />
    </main>
  );
}
