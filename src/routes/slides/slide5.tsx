import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide5")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 18% 82%, rgba(16, 185, 129, 0.26), transparent 34%), radial-gradient(circle at 90% 18%, rgba(45, 212, 191, 0.18), transparent 30%), linear-gradient(120deg, #0b1a1f 0%, #0f2a2f 52%, #0b1f24 100%)",
          color: "#ecfeff",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "2.5vw",
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gap: "1.4vw",
            fontFamily: "'Space Grotesk', 'Manrope', sans-serif",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.98vw",
              color: "#99f6e4",
            }}
          >
            <span>DECISION SLIDE</span>
            <span>Next 30 days</span>
          </header>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "1.4vw",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: "3.25vw", lineHeight: 1.08 }}>
                Move now to capture
                <br />
                first-mover AI advantage
              </h2>
              <p
                style={{
                  margin: "0.8vw 0 0",
                  fontSize: "1.1vw",
                  color: "#ccfbf1",
                  maxWidth: "40vw",
                  lineHeight: 1.45,
                }}
              >
                Approve phase-one funding, appoint functional AI owners, and
                launch three production pilots within 90 days.
              </p>
            </div>
            <div
              style={{
                background: "rgba(15, 23, 42, 0.56)",
                border: "0.08vw solid rgba(94, 234, 212, 0.35)",
                borderRadius: "1vw",
                padding: "1.3vw",
                display: "grid",
                gap: "0.6vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.05vw" }}>
                Immediate commitments
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "0.55vw",
                  fontSize: "0.93vw",
                  color: "#99f6e4",
                }}
              >
                <span>1. Approve AI operating budget and success KPIs</span>
                <span>
                  2. Stand up governance council with legal + security
                </span>
                <span>
                  3. Launch support, engineering, and marketing pilots
                </span>
                <span>
                  4. Review impact monthly with executive steering group
                </span>
              </div>
            </div>
          </section>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.84vw",
              color: "#99f6e4",
              borderTop: "0.08vw solid rgba(94, 234, 212, 0.3)",
              paddingTop: "0.8vw",
            }}
          >
            <span>Target outcome: 15-25% productivity gain in year one</span>
            <span>05 / 05</span>
          </footer>
        </div>
      </SlideFrame>
    </SlidePage>
  );
}
