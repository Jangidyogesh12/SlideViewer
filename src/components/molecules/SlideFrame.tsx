import type { CSSProperties, ReactNode } from "react";

type SlideFrameProps = {
  canvasStyle?: CSSProperties;
  children: ReactNode;
};

export function SlideFrame({ canvasStyle, children }: SlideFrameProps) {
  return (
    <article
      className="flex aspect-video w-full flex-col overflow-hidden rounded-[0.4vw] p-[2.2vw] text-[#eaf0ff] shadow-[0_0_0_0.08vw_rgba(255,255,255,0.15),0_2.2vw_4vw_rgba(0,0,0,0.35)] [&_.badges]:mt-[1.5vw] [&_.badges]:pl-[2.2vw] [&_.badges]:text-[1.25vw] [&_.badges]:leading-normal [&_.brand]:text-[1.25vw] [&_.meta]:text-[1.25vw] [&_.pill]:text-[1.25vw] [&_.slide-content]:mt-[3.2vw] [&_.slide-foot]:mt-auto [&_.slide-foot]:text-[1.25vw] [&_.slide-topbar]:items-center [&_.slide-topbar]:justify-between [&_.slide-topbar]:text-[1.25vw] [&_.slide-topbar]:flex [&_.summary]:mt-[2.2vw] [&_.summary]:max-w-[62vw] [&_.summary]:text-[1.25vw] [&_.slide-foot]:flex [&_.slide-foot]:items-center [&_.slide-foot]:justify-between [&_h1]:mt-[1.2vw] [&_h1]:text-[4.1vw] [&_h1]:leading-[1.05] [&_h1_span]:block"
      style={canvasStyle}
    >
      {children}
    </article>
  );
}
