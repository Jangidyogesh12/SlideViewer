import { SlidePreview } from "./components/App/SlidePreviw";
import { slideList } from "./slideManifest";
import { useState } from "react";

function App() {
  const [activeSlideId, setActiveSlideId] = useState(slideList[0]?.id ?? "slide-1");
  const activeSlide = slideList.find((slide) => slide.id === activeSlideId) ?? slideList[0];

  return (
    <SlidePreview
      slides={slideList}
      activeSlideId={activeSlideId}
      onSlideSelect={setActiveSlideId}
    >
      <section
        className="flex w-full items-center justify-center"
        aria-label="Slide canvas preview"
      >
        <iframe
          title={`${activeSlideId} preview`}
          src={activeSlide.path}
          className="h-full w-full overflow-hidden"
        />
      </section>
    </SlidePreview>
  );
}

export default App;
