import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide1")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.24), transparent 35%), radial-gradient(circle at 88% 80%, rgba(16, 185, 129, 0.22), transparent 34%), linear-gradient(130deg, #081120 0%, #0d1b2e 48%, #101827 100%)",
          color: "#e5e7eb",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "2.5vw",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gap: "1.6vw",
            fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1vw",
              color: "#94a3b8",
            }}
          >
            <span>EXECUTIVE PRESENTATION</span>
            <span>Q2 2026</span>
          </header>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr",
              gap: "1.4vw",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "1vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.1vw",
                  color: "#67e8f9",
                }}
              >
                Intro
              </p>
              <h1
                style={{ margin: "0.7vw 0", fontSize: "4vw", lineHeight: 1.05 }}
              >
                AI Transformation
                <br />
                2026 Playbook
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.2vw",
                  lineHeight: 1.45,
                  color: "#cbd5e1",
                  maxWidth: "38vw",
                }}
              >
                A practical roadmap to scale AI from isolated experiments to a
                measurable, organization-wide growth engine.
              </p>
            </div>

            <div
              style={{
                background: "rgba(15, 23, 42, 0.62)",
                border: "0.08vw solid rgba(148, 163, 184, 0.25)",
                borderRadius: "1vw",
                padding: "1.3vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.05vw" }}>Agenda</p>
              <ol
                style={{
                  margin: "0.7vw 0 0",
                  paddingLeft: "1.4vw",
                  display: "grid",
                  gap: "0.55vw",
                  fontSize: "0.98vw",
                  color: "#bfdbfe",
                }}
              >
                <li>Market momentum and adoption trends</li>
                <li>High-value AI use cases by function</li>
                <li>Operating model, governance, and risk</li>
                <li>12-month rollout plan and expected ROI</li>
              </ol>
            </div>
          </section>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.85vw",
              color: "#94a3b8",
              borderTop: "0.08vw solid rgba(148, 163, 184, 0.25)",
              paddingTop: "0.8vw",
            }}
          >
            <span>Prepared for leadership review</span>
            <span>01 / 05</span>
          </footer>
        </div>
      </SlideFrame>
    </SlidePage>
  );
}
