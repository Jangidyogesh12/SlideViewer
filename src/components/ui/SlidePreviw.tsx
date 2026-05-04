import { SlideFrame } from "../molecules/SlideFrame";
import { Sidebar, SidebarProvider, SidebarTrigger } from "./sidebar";

import type { SlideData } from "../../slides";

type SlidePreviewProps = {
  items: SlideData[];
  theme?: "dark" | "light";
};

export function SlidePreview({ items }: SlidePreviewProps) {
  const activeSlide = items[0];

  return (
    <SidebarProvider defaultOpen>
      <main className="flex min-h-screen">
        <Sidebar>
          <SidebarTrigger />
        </Sidebar>
        <section
          className="flex w-full items-center justify-center"
          aria-label="Slide canvas preview"
        >
          <SlideFrame slide={activeSlide} />
        </section>
      </main>
    </SidebarProvider>
  );
}
