import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";

export const Route = createFileRoute("/slides/slide4")({
  component: RouteComponent,
});

function RouteComponent() {
  const isThumbnail = new URLSearchParams(window.location.search).get("thumbnail") === "1";

  const slide = {
    canvasStyle:
      "radial-gradient(circle at 80% 18%, rgba(80, 130, 255, 0.2), transparent 28%), linear-gradient(110deg, #131a2f 0%, #0a1023 50%, #060914 100%)",
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">JULY 2026</span></header>
      <div class="slide-content"><p class="pill">growth</p><h1>Twelve months<span>of compounding growth.</span></h1><p class="summary">A single operating model for engineering and platform teams with measurable outcomes.</p><ul class="badges"><li>$48.2M Processed</li><li>2,847 Releases</li><li>0 Major Incidents</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>04 / 05</span></footer>
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
