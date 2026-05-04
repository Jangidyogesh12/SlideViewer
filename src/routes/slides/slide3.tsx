import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";

export const Route = createFileRoute("/slides/slide3")({
  component: RouteComponent,
});

function RouteComponent() {
  const isThumbnail =
    new URLSearchParams(window.location.search).get("thumbnail") === "1";

  const slide = {
    canvasStyle:
      "radial-gradient(circle at 0% 100%, rgba(255, 129, 66, 0.22), transparent 36%), radial-gradient(circle at 100% 0%, rgba(255, 199, 86, 0.2), transparent 35%), linear-gradient(115deg, #2a1410 0%, #180c09 45%, #0f0806 100%)",
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">JUNE 2026</span></header>
      <div class="slide-content"><p class="pill">metrics</p><h1>The proof<span>is in the metrics.</span></h1><p class="summary">Clear operational wins across reliability, cost efficiency, and release confidence.</p><ul class="badges"><li>3.5x Throughput</li><li>99.99% Success</li><li>40% Lower Cost</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>03 / 05</span></footer>
    `,
  };

  if (isThumbnail) {
    return (
      <div className="h-screen overflow-hidden bg-[#0d0d0d]">
        <SlideFrame slide={slide} />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center px-[10%]">
      <SlideFrame slide={slide} />
    </main>
  );
}
