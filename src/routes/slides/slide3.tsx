import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide3")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 10% 90%, rgba(251, 146, 60, 0.22), transparent 36%), radial-gradient(circle at 92% 12%, rgba(250, 204, 21, 0.16), transparent 34%), linear-gradient(120deg, #21140a 0%, #2b1c0f 52%, #1f160f 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "2.4vw",
            display: "grid",
            gridTemplateRows: "auto auto 1fr auto",
            gap: "1.25vw",
            fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.98vw",
              color: "#cbd5e1",
            }}
          >
            <span>USE CASE VALUE</span>
            <span>Where ROI comes from</span>
          </header>
          <div>
            <h2 style={{ margin: 0, fontSize: "2.9vw", lineHeight: 1.1 }}>
              High-impact AI applications by function
            </h2>
            <p
              style={{
                margin: "0.72vw 0 0",
                fontSize: "1.08vw",
                color: "#fde68a",
                maxWidth: "42vw",
              }}
            >
              Focus investment on workflows with repeated decisions, high data
              volume, and measurable cycle-time impact.
            </p>
          </div>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1vw",
            }}
          >
            <article
              style={{
                background: "rgba(41, 24, 13, 0.65)",
                border: "0.08vw solid rgba(253, 186, 116, 0.3)",
                borderRadius: "1vw",
                padding: "1.1vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.02vw", color: "#fed7aa" }}>
                Customer Support
              </p>
              <p
                style={{ margin: "0.5vw 0", fontSize: "2vw", fontWeight: 700 }}
              >
                -34%
              </p>
              <p style={{ margin: 0, fontSize: "0.9vw", color: "#fde68a" }}>
                Average ticket handling time
              </p>
            </article>
            <article
              style={{
                background: "rgba(41, 24, 13, 0.65)",
                border: "0.08vw solid rgba(253, 186, 116, 0.3)",
                borderRadius: "1vw",
                padding: "1.1vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.02vw", color: "#fed7aa" }}>
                Engineering
              </p>
              <p
                style={{ margin: "0.5vw 0", fontSize: "2vw", fontWeight: 700 }}
              >
                +29%
              </p>
              <p style={{ margin: 0, fontSize: "0.9vw", color: "#fde68a" }}>
                Developer throughput on routine tasks
              </p>
            </article>
            <article
              style={{
                background: "rgba(41, 24, 13, 0.65)",
                border: "0.08vw solid rgba(253, 186, 116, 0.3)",
                borderRadius: "1vw",
                padding: "1.1vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.02vw", color: "#fed7aa" }}>
                Marketing
              </p>
              <p
                style={{ margin: "0.5vw 0", fontSize: "2vw", fontWeight: 700 }}
              >
                +22%
              </p>
              <p style={{ margin: 0, fontSize: "0.9vw", color: "#fde68a" }}>
                Campaign velocity and content output
              </p>
            </article>
          </section>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.84vw",
              color: "#cbd5e1",
              borderTop: "0.08vw solid rgba(253, 186, 116, 0.25)",
              paddingTop: "0.75vw",
            }}
          >
            <span>Benchmark window: first 6 months after rollout</span>
            <span>03 / 05</span>
          </footer>
        </div>
      </SlideFrame>
    </SlidePage>
  );
}
