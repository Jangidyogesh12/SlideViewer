import type { ReactNode } from "react";

type SlidePageProps = {
  children: ReactNode;
};

export function SlidePage({ children }: SlidePageProps) {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const isThumbnail = searchParams?.get("thumbnail") === "1";
  const theme = searchParams?.get("theme") === "light" ? "light" : "dark";
  const pageBg = theme === "light" ? "bg-[#f6f6f4]" : "bg-[#0d0d0d]";

  if (isThumbnail) {
    return <div className={`h-screen overflow-hidden ${pageBg}`}>{children}</div>;
  }

  return (
    <main className={`flex min-h-screen items-center px-[10%] ${pageBg}`}>
      {children}
    </main>
  );
}
