import { createFileRoute } from "@tanstack/react-router";
import { SlideFrame } from "../../components/molecules/SlideFrame";
import { SlidePage } from "../../components/molecules/SlidePage";

export const Route = createFileRoute("/slides/slide2")({
  component: RouteComponent,
});

function RouteComponent() {
  const bars = [42, 57, 71, 83, 91];

  return (
    <SlidePage>
      <SlideFrame
        canvasStyle={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(56, 189, 248, 0.2), transparent 35%), radial-gradient(circle at 85% 90%, rgba(16, 185, 129, 0.15), transparent 32%), linear-gradient(120deg, #0a1525 0%, #0f1f34 54%, #122036 100%)",
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
              color: "#94a3b8",
            }}
          >
            <span>MARKET LANDSCAPE</span>
            <span>Trend Analysis</span>
          </header>

          <div>
            <h2 style={{ margin: 0, fontSize: "2.9vw", lineHeight: 1.12 }}>
              Enterprise AI adoption accelerates every year
            </h2>
            <p
              style={{
                margin: "0.7vw 0 0",
                fontSize: "1.1vw",
                color: "#cbd5e1",
                maxWidth: "44vw",
              }}
            >
              Adoption is strongest in support, engineering, and marketing;
              laggards are compliance and finance where controls are stricter.
            </p>
          </div>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: "1.2vw",
            }}
          >
            <div
              style={{
                background: "rgba(15, 23, 42, 0.62)",
                border: "0.08vw solid rgba(148, 163, 184, 0.24)",
                borderRadius: "1vw",
                padding: "1.2vw",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.02vw" }}>
                Organizations with production AI programs (%)
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  alignItems: "end",
                  height: "12vw",
                  gap: "0.7vw",
                  marginTop: "0.8vw",
                }}
              >
                {bars.map((value, index) => (
                  <div
                    key={value}
                    style={{
                      display: "grid",
                      justifyItems: "center",
                      gap: "0.4vw",
                    }}
                  >
                    <span style={{ fontSize: "0.82vw", color: "#7dd3fc" }}>
                      {value}%
                    </span>
                    <div
                      style={{
                        width: "3.1vw",
                        height: `${(value / 100) * 9.2}vw`,
                        borderRadius: "0.35vw 0.35vw 0.2vw 0.2vw",
                        background:
                          "linear-gradient(180deg, #22d3ee 0%, #2563eb 100%)",
                      }}
                    ></div>
                    <span style={{ fontSize: "0.78vw", color: "#94a3b8" }}>
                      202{index + 2}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "rgba(15, 23, 42, 0.62)",
                border: "0.08vw solid rgba(148, 163, 184, 0.24)",
                borderRadius: "1vw",
                padding: "1.2vw",
                display: "grid",
                gap: "0.6vw",
                alignContent: "start",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.02vw" }}>Top constraints</p>
              <div
                style={{
                  height: "0.9vw",
                  borderRadius: "999vw",
                  background: "#1e293b",
                }}
              >
                <div
                  style={{
                    width: "76%",
                    height: "100%",
                    borderRadius: "999vw",
                    background: "#22d3ee",
                  }}
                ></div>
              </div>
              <span style={{ fontSize: "0.86vw", color: "#bae6fd" }}>
                Data quality and readiness (76%)
              </span>
              <div
                style={{
                  height: "0.9vw",
                  borderRadius: "999vw",
                  background: "#1e293b",
                }}
              >
                <div
                  style={{
                    width: "63%",
                    height: "100%",
                    borderRadius: "999vw",
                    background: "#38bdf8",
                  }}
                ></div>
              </div>
              <span style={{ fontSize: "0.86vw", color: "#bae6fd" }}>
                Governance and policy (63%)
              </span>
              <div
                style={{
                  height: "0.9vw",
                  borderRadius: "999vw",
                  background: "#1e293b",
                }}
              >
                <div
                  style={{
                    width: "58%",
                    height: "100%",
                    borderRadius: "999vw",
                    background: "#60a5fa",
                  }}
                ></div>
              </div>
              <span style={{ fontSize: "0.86vw", color: "#bae6fd" }}>
                Skills and change management (58%)
              </span>
            </div>
          </section>

          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.84vw",
              color: "#94a3b8",
              borderTop: "0.08vw solid rgba(148, 163, 184, 0.25)",
              paddingTop: "0.75vw",
            }}
          >
            <span>Source: Global enterprise AI benchmarking, 2026</span>
            <span>02 / 05</span>
          </footer>
        </div>
      </SlideFrame>
    </SlidePage>
  );
}
