import type { SlideData } from "../../slides";
import type { CSSProperties } from "react";

type SlideFrameProps = {
  slide: SlideData;
};

export function SlideFrame({ slide }: SlideFrameProps) {
  const canvasStyle: CSSProperties = {
    background: slide.canvas_style,
  };

  return (
    <article style={canvasStyle}>
      <div dangerouslySetInnerHTML={{ __html: slide.content }}></div>
    </article>
  );
}
