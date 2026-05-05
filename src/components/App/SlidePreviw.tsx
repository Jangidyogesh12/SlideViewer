import {
  Sidebar,
  SidebarProvider,
  SidebarState,
  SidebarTrigger,
} from "../ui/sidebar";
import type { SlideMeta } from "../../slideManifest";
import { type ReactNode } from "react";
import { Download, Play } from "lucide-react";
import { Button } from "../ui/button";

function SlideList({
  slides,
  activeSlideId,
  onSlideSelect,
}: Omit<SlidePreviewProps, "children">) {
  return (
    <SidebarState>
      {({ open }) => (
        <div className="h-[calc(100vh-4rem)] overflow-y-auto px-2 pb-5 pt-12">
          <ol className="m-0 list-none space-y-4 p-0">
            {slides.map((slide, index) => {
              const isActive = slide.id === activeSlideId;

              return (
                <li key={slide.id}>
                  <button
                    type="button"
                    onClick={() => onSlideSelect(slide.id)}
                    className="group flex w-full items-center rounded-md border-none bg-transparent p-0 text-left"
                    aria-label={`Open ${slide.name}`}
                  >
                    <span
                      className={`w-6 shrink-0 text-center text-[12px] ${isActive ? "text-amber-50" : "text-gray-400"}`}
                    >
                      {index + 1}
                    </span>
                    {open ? (
                      <span
                        className={`block flex-1 overflow-hidden rounded-lg border bg-[#10131a] p-0.5 transition-colors ${
                          isActive
                            ? "border-[#2383ff]"
                            : "border-[#2a2d39] group-hover:border-[#4b5563]"
                        }`}
                      >
                        <iframe
                          title={`${slide.name} thumbnail`}
                          src={`${slide.path}?thumbnail=1`}
                          className="pointer-events-none block aspect-video w-full overflow-hidden rounded-md border-none bg-[#0d0d0d]"
                          loading="lazy"
                        />
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </SidebarState>
  );
}

type SlidePreviewProps = {
  children: ReactNode;
  slides: SlideMeta[];
  activeSlideId: string;
  onSlideSelect: (slideId: string) => void;
};

export function SlidePreview({
  children,
  slides,
  activeSlideId,
  onSlideSelect,
}: SlidePreviewProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen bg-[#0b0d12] text-[#e5e7eb]">
        <header className="flex h-10 items-center justify-end border-b border-[#2a2d39] bg-[#0d0d0d] px-5">
          <div className="flex items-center justify-center gap-4">
            <Button size="xs" variant="default">
              <Download className="size-4" />
              Export
            </Button>
            <Button size="xs" variant="default">
              <Play className="size-4" />
              Present
            </Button>
          </div>
        </header>
        <main className="flex h-[calc(100vh-4rem)]">
          <Sidebar>
            <SlideList
              slides={slides}
              activeSlideId={activeSlideId}
              onSlideSelect={onSlideSelect}
            />
            <SidebarTrigger />
          </Sidebar>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
