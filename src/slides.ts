export type SlideData = {
  id: string
  name: string
  canvas_style?: string
  canvas_border_color?: string
  content: string
}

export const slidesData: SlideData[] = [
  {
    id: 'slide-1',
    name: 'Slide 1',
    canvas_style:
      'linear-gradient(rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2rem 2.2rem, linear-gradient(90deg, rgba(168, 186, 255, 0.08) 1px, transparent 1px) 0 0 / 2.2rem 2.2rem, radial-gradient(circle at 16% 100%, rgba(155, 109, 255, 0.9) 0%, transparent 40%), radial-gradient(circle at 84% 12%, rgba(85, 137, 255, 0.85) 0%, transparent 35%), linear-gradient(100deg, #19254f 0%, #060b26 58%, #020617 100%)',
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
  },
  {
    id: 'slide-2',
    name: 'Slide 2',
    canvas_style:
      'radial-gradient(circle at 12% 20%, rgba(0, 214, 255, 0.18), transparent 32%), radial-gradient(circle at 88% 80%, rgba(0, 255, 153, 0.14), transparent 28%), linear-gradient(110deg, #06202a 0%, #041119 45%, #020b12 100%)',
    canvas_border_color: 'rgba(93, 228, 255, 0.35)',
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">MAY 2026</span></header>
      <div class="slide-content"><p class="pill">performance</p><h1>Built for scale.<span>Designed for speed.</span></h1><p class="summary">From API latency to deploy throughput, every part of the stack is tuned for momentum.</p><ul class="badges"><li>6x Faster Builds</li><li>p95 &lt; 120ms</li><li>Global Caching</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>02 / 05</span></footer>
    `,
  },
  {
    id: 'slide-3',
    name: 'Slide 3',
    canvas_style:
      'radial-gradient(circle at 0% 100%, rgba(255, 129, 66, 0.22), transparent 36%), radial-gradient(circle at 100% 0%, rgba(255, 199, 86, 0.2), transparent 35%), linear-gradient(115deg, #2a1410 0%, #180c09 45%, #0f0806 100%)',
    canvas_border_color: 'rgba(255, 183, 119, 0.35)',
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">JUNE 2026</span></header>
      <div class="slide-content"><p class="pill">metrics</p><h1>The proof<span>is in the metrics.</span></h1><p class="summary">Clear operational wins across reliability, cost efficiency, and release confidence.</p><ul class="badges"><li>3.5x Throughput</li><li>99.99% Success</li><li>40% Lower Cost</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>03 / 05</span></footer>
    `,
  },
  {
    id: 'slide-4',
    name: 'Slide 4',
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">JULY 2026</span></header>
      <div class="slide-content"><p class="pill">growth</p><h1>Twelve months<span>of compounding growth.</span></h1><p class="summary">A single operating model for engineering and platform teams with measurable outcomes.</p><ul class="badges"><li>$48.2M Processed</li><li>2,847 Releases</li><li>0 Major Incidents</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>04 / 05</span></footer>
    `,
  },
  {
    id: 'slide-5',
    name: 'Slide 5',
    content: `
      <header class="slide-topbar"><div class="brand"><span class="brand-dot"></span><span>acme.cloud</span></div><span class="meta">AUGUST 2026</span></header>
      <div class="slide-content"><p class="pill">next step</p><h1>Ready to transform<span>your workflow?</span></h1><p class="summary">Adopt the same blueprint top cloud-native teams use to ship faster with less stress.</p><ul class="badges"><li>Migration in 2 weeks</li><li>White-glove onboarding</li><li>Enterprise-ready</li></ul></div>
      <footer class="slide-foot"><span>ACME CLOUD, INC.</span><span>05 / 05</span></footer>
    `,
  },
]
