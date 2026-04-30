import type { SlideData } from "../../slides";
import type { CSSProperties } from "react";

type SlideFrameProps = {
  slide: SlideData;
};

export function SlideFrame({ slide }: SlideFrameProps) {
  const canvasStyle: CSSProperties = {
    background: slide.canvas_style,
    borderColor: slide.canvas_border_color,
  };

  return (
    <article className="slide-canvas" style={canvasStyle}>
      <div
        className="slide-markup"
        dangerouslySetInnerHTML={{ __html: slide.content }}
      ></div>
    </article>
  );
}
