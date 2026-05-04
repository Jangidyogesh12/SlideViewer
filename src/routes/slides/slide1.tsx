import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";

export const Route = createFileRoute("/slides/slide1")({
  component: RouteComponent,
});

function RouteComponent() {
  const isThumbnail =
    new URLSearchParams(window.location.search).get("thumbnail") === "1";

  const slide = {
    canvasStyle:
      "linear-gradient(rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2vw 2.2vw, linear-gradient(90deg, rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2vw 2.2vw, radial-gradient(circle at 16% 100%, rgba(155, 109, 255, 0.9) 0%, transparent 40%), radial-gradient(circle at 84% 12%, rgba(85, 137, 255, 0.85) 0%, transparent 35%), linear-gradient(100deg, #19254f 0%, #060b26 58%, #020617 100%)",
    content: `
      <header class="slide-topbar">
        <div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div>
        <span class="meta">APRIL 2026</span>
      </header>
      <div class="slide-content">
        <p class="pill">introducing v2.0</p>
        <h1>Acme Cloud<span>built for what's next.</span></h1>
        <p class="summary">A faster, calmer infrastructure platform for teams shipping the next generation of software.</p>
        <ul class="badges"><li>99.99% Uptime</li><li>Edge in 38 regions</li><li>SOC 2 Type II</li></ul>
      </div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>01 / 05</span></footer>
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
