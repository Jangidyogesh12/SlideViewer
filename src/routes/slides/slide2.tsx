import { createFileRoute } from "@tanstack/react-router";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide2")({
  component: RouteComponent,
});

function RouteComponent() {
  const slide = {
    canvasStyle:
      "radial-gradient(circle at 12% 20%, rgba(0, 214, 255, 0.18), transparent 32%), radial-gradient(circle at 88% 80%, rgba(0, 255, 153, 0.14), transparent 28%), linear-gradient(110deg, #06202a 0%, #041119 45%, #020b12 100%)",
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">MAY 2026</span></header>
      <div class="slide-content"><p class="pill">performance</p><h1>Built for scale.<span>Designed for speed.</span></h1><p class="summary">From API latency to deploy throughput, every part of the stack is tuned for momentum.</p><ul class="badges"><li>6x Faster Builds</li><li>p95 &lt; 120ms</li><li>Global Caching</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>02 / 05</span></footer>
    `,
  };

  return <SlidePage slide={slide} />;
}
