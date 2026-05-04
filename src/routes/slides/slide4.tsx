import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide4")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 85% 16%, rgba(99, 102, 241, 0.25), transparent 30%), radial-gradient(circle at 12% 78%, rgba(14, 165, 233, 0.2), transparent 32%), linear-gradient(120deg, #111827 0%, #172554 52%, #0f172a 100%)",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "2.4vw",
            display: "grid",
            gridTemplateRows: "auto auto 1fr auto",
            gap: "1.2vw",
            fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.98vw",
              color: "#a5b4fc",
            }}
          >
            <span>OPERATING MODEL</span>
            <span>Execution blueprint</span>
          </header>
          <div>
            <h2 style={{ margin: 0, fontSize: "2.9vw", lineHeight: 1.1 }}>
              12-month AI rollout roadmap
            </h2>
            <p
              style={{
                margin: "0.72vw 0 0",
                fontSize: "1.08vw",
                color: "#cbd5e1",
                maxWidth: "44vw",
              }}
            >
              Build foundations first, then scale use cases with governance,
              MLOps, and cross-functional ownership.
            </p>
          </div>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.9vw",
            }}
          >
            {[
              [
                "Q1",
                "Data + policy baseline",
                "Lakehouse cleanup, access control, prompt policy",
              ],
              [
                "Q2",
                "Pilot 3 use cases",
                "Support assistant, coding copilot, campaign automation",
              ],
              [
                "Q3",
                "Scale + integrate",
                "Deploy to 5 business units, add monitoring and guardrails",
              ],
              [
                "Q4",
                "Optimize ROI",
                "Cost tuning, model mix, retraining cadence and scorecards",
              ],
            ].map(([q, title, desc]) => (
              <article
                key={q}
                style={{
                  background: "rgba(15, 23, 42, 0.64)",
                  border: "0.08vw solid rgba(129, 140, 248, 0.35)",
                  borderRadius: "0.9vw",
                  padding: "1vw",
                  display: "grid",
                  gap: "0.45vw",
                  alignContent: "start",
                }}
              >
                <span style={{ fontSize: "0.84vw", color: "#93c5fd" }}>
                  {q}
                </span>
                <h3 style={{ margin: 0, fontSize: "1.18vw", lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.86vw",
                    color: "#c7d2fe",
                    lineHeight: 1.4,
                  }}
                >
                  {desc}
                </p>
              </article>
            ))}
          </section>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.84vw",
              color: "#a5b4fc",
              borderTop: "0.08vw solid rgba(129, 140, 248, 0.3)",
              paddingTop: "0.75vw",
            }}
          >
            <span>
              Critical success factor: shared ownership across tech + business
            </span>
            <span>04 / 05</span>
          </footer>
        </div>
      </SlideFrame>
    </SlidePage>
  );
}
