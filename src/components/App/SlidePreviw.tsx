import { Sidebar, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { type ReactNode } from "react";

export function SlidePreview({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <main className="flex min-h-screen">
        <Sidebar>
          <SidebarTrigger />
        </Sidebar>
        {children}
      </main>
    </SidebarProvider>
  );
}
