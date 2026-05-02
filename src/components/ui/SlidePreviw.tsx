import { SlideFrame } from "./SlideFrame";

import type { SlideData } from "../../slides";
import { useState } from "react";

type SlidePreviewProps = {
  items: SlideData[];
  theme?: "dark" | "light";
};

export function SlidePreview({ items }: SlidePreviewProps) {
  const activeSlide = items[0];

  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <main className="slide-previewer">
      <aside
        className={`drawer ${drawerOpen ? "open" : "closed"}`}
        aria-label="Slide thumbnails"
      >
        <button
          className="DrawerActionButton"
          type="button"
          title={drawerOpen ? "Collapse sidebar" : "Expand sidebar"}
          aria-label={drawerOpen ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? "<" : ">"}
        </button>
      </aside>
      <section
        className="slide-canvas-section"
        aria-label="Slide canvas preview"
      >
        <SlideFrame slide={activeSlide} />
      </section>
    </main>
  );
}
