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

type SlidePreviewTheme = "dark" | "light";

function SlideList({
  slides,
  activeSlideId,
  onSlideSelect,
  theme,
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
                      className={`w-6 shrink-0 text-center text-[12px] ${
                        isActive
                          ? "text-[var(--sp-slide-index-active)]"
                          : "text-[var(--sp-slide-index-inactive)]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {open ? (
                      <span
                        className={`sp-slide-card block flex-1 overflow-hidden rounded-lg border p-0.5 transition-colors ${
                          isActive
                            ? "sp-slide-card-active"
                            : "sp-slide-card-inactive"
                        }`}
                      >
                        <iframe
                          title={`${slide.name} thumbnail`}
                          src={`${slide.path}?thumbnail=1&theme=${theme}`}
                          className="pointer-events-none block aspect-video w-full overflow-hidden rounded-md border-none bg-[var(--sp-slide-frame-bg)]"
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
  theme?: SlidePreviewTheme;
};

export function SlidePreview({
  children,
  slides,
  activeSlideId,
  onSlideSelect,
  theme = "dark",
}: SlidePreviewProps) {
  return (
    <SidebarProvider defaultOpen>
      <div
        className="slide-preview min-h-screen bg-[var(--sp-app-bg)] text-[var(--sp-app-text)]"
        data-theme={theme}
      >
        <header className="sp-header flex h-10 items-center justify-end border-b px-5">
          <div className="flex items-center justify-center gap-4">
            <Button size="xs" variant="ghost" className="sp-action-button">
              <Download className="size-4" />
              Export
            </Button>
            <Button size="xs" variant="ghost" className="sp-action-button">
              <Play className="size-4" />
              Present
            </Button>
          </div>
        </header>
        <main className="flex h-[calc(100vh-4rem)] bg-[var(--sp-content-bg)]">
          <Sidebar className="border-[var(--sp-divider)] bg-[var(--sp-sidebar-bg)]">
            <SlideList
              slides={slides}
              activeSlideId={activeSlideId}
              onSlideSelect={onSlideSelect}
              theme={theme}
            />
            <SidebarTrigger className="text-[var(--sp-sidebar-trigger-text)] hover:bg-[var(--sp-sidebar-trigger-hover)] focus-visible:bg-[var(--sp-sidebar-trigger-hover)]" />
          </Sidebar>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
