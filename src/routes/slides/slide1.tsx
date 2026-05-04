import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { slidesData } from "../../slides";

export const Route = createFileRoute("/slides/slide1")({
  component: RouteComponent,
});

function RouteComponent() {
  const slide = slidesData[1];

  return (
    <main className="flex min-h-screen items-center">
      <SlideFrame slide={slide} />
    </main>
  );
}
