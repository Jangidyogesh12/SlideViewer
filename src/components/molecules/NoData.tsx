export function NoData({ theme = "dark" }: { theme?: "dark" | "light" }) {
  return (
    <main
      className={`preview-shell empty-preview-shell ${theme === "light" ? "theme-light" : "theme-dark"}`}
    >
      <section className="stage empty-stage" aria-label="Slide canvas preview">
        <div className="empty-state" role="status" aria-live="polite">
          <div className="empty-icon" aria-hidden="true">
            🔍
          </div>
          <h2>No Data Found</h2>
          <p>There is no data to show right now.</p>
        </div>
      </section>
    </main>
  );
}
