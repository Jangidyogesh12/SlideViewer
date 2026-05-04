import { SlideFrame, type SlideContent } from "./SlideFrame";

type SlidePageProps = {
  slide: SlideContent;
};

export function SlidePage({ slide }: SlidePageProps) {
  const isThumbnail =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("thumbnail") === "1";

  if (isThumbnail) {
    return (
      <div className="h-screen overflow-hidden bg-[#0d0d0d]">
        <SlideFrame slide={slide} />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center px-[10%]">
      <SlideFrame slide={slide} />
    </main>
  );
}
