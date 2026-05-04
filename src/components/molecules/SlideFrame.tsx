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
    <article
      className="mx-[10%] flex aspect-video w-full flex-col overflow-hidden p-[2.2vw] text-[#eaf0ff] [&_.badges]:mt-[1.5vw] [&_.badges]:pl-[2.2vw] [&_.badges]:text-[1.25vw] [&_.badges]:leading-normal [&_.brand]:text-[1.25vw] [&_.meta]:text-[1.25vw] [&_.pill]:text-[1.25vw] [&_.slide-content]:mt-[3.2vw] [&_.slide-foot]:mt-auto [&_.slide-foot]:text-[1.25vw] [&_.slide-topbar]:items-center [&_.slide-topbar]:justify-between [&_.slide-topbar]:text-[1.25vw] [&_.slide-topbar]:flex [&_.summary]:mt-[2.2vw] [&_.summary]:max-w-[62vw] [&_.summary]:text-[1.25vw] [&_.slide-foot]:flex [&_.slide-foot]:items-center [&_.slide-foot]:justify-between [&_h1]:mt-[1.2vw] [&_h1]:text-[4.1vw] [&_h1]:leading-[1.05] [&_h1_span]:block"
      style={canvasStyle}
    >
      <div dangerouslySetInnerHTML={{ __html: slide.content }}></div>
    </article>
  );
}
