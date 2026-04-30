import { useEffect, useRef, useState } from "react";
import { SlideFrame } from "./SlideFrame";

import type { SlideData } from "../../slides";
import { NoData } from "../molecules/NoData";

const BASE_SLIDE_WIDTH = 1920;
const BASE_SLIDE_HEIGHT = 1080;

type SlidePreviewProps = {
  items: SlideData[];
  theme?: "dark" | "light";
};

export function SlidePreview({ items, theme = "dark" }: SlidePreviewProps) {
  const [selectedSlideId, setSelectedSlideId] = useState(items[0]?.id ?? "");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [thumbWidth, setThumbWidth] = useState(160);
  const measureThumbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = measureThumbRef.current;

    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width;

      if (nextWidth) {
        setThumbWidth(nextWidth);
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [drawerOpen]);

  if (!items.length) {
    return <NoData theme={theme} />;
  }

  const activeSlide =
    items.find((slide) => slide.id === selectedSlideId) ?? items[0];

  return (
    <main
      className={`preview-shell ${theme === "light" ? "theme-light" : "theme-dark"} ${drawerOpen ? "" : "drawer-collapsed"}`}
    >
      <aside
        className={`slide-strip ${drawerOpen ? "" : "is-collapsed"}`}
        aria-label="Slide thumbnails"
      >
        <button
          className="strip-action"
          type="button"
          aria-label={drawerOpen ? "Hide slide drawer" : "Show slide drawer"}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <span aria-hidden="true">{drawerOpen ? "‹" : "›"}</span>
        </button>
        <ol className="thumb-list">
          {items.map((slide, index) => (
            <li key={slide.id} className="thumb-row">
              <span className="thumb-index">{index + 1}</span>
              <button
                type="button"
                className={`thumb-card ${slide.id === activeSlide.id ? "is-active" : ""}`}
                aria-current={slide.id === activeSlide.id ? "true" : undefined}
                aria-label={slide.name ?? `Slide ${slide.id}`}
                onClick={() => setSelectedSlideId(slide.id)}
              >
                <div
                  className="thumb-viewport"
                  ref={index === 0 ? measureThumbRef : undefined}
                >
                  <div
                    className="thumb-scale"
                    style={{
                      width: BASE_SLIDE_WIDTH,
                      height: BASE_SLIDE_HEIGHT,
                      transform: `scale(${thumbWidth / BASE_SLIDE_WIDTH + 0.001})`,
                    }}
                  >
                    <SlideFrame slide={slide} />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </aside>

      <section className="stage" aria-label="Slide canvas preview">
        <SlideFrame slide={activeSlide} />
      </section>
    </main>
  );
}
