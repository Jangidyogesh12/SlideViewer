import { SlidePreview } from "./components/App/SlidePreviw";

function App() {
  return (
    <SlidePreview>
      <section
        className="flex w-full items-center justify-center"
        aria-label="Slide canvas preview"
      >
        <iframe
          title="Slide 1 preview"
          src="slides/slide1"
          className="h-full w-full overflow-hidden"
        />
      </section>
    </SlidePreview>
  );
}

export default App;
