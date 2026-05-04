import type { ReactNode } from "react";

type SlidePageProps = {
  children: ReactNode;
};

export function SlidePage({ children }: SlidePageProps) {
  const isThumbnail =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("thumbnail") === "1";

  if (isThumbnail) {
    return (
      <div className="h-screen overflow-hidden bg-[#0d0d0d]">{children}</div>
    );
  }

  return (
    <main className="flex min-h-screen items-center px-[10%]">{children}</main>
  );
}
