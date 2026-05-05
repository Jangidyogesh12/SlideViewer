import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../lib/utils";

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

type SidebarProviderProps = PropsWithChildren<{
  defaultOpen?: boolean;
}>;

export function SidebarProvider({
  children,
  defaultOpen = true,
}: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((state) => !state),
    }),
    [open],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar components must be used inside SidebarProvider");
  }

  return context;
}

type SidebarStateProps = {
  children: (state: { open: boolean }) => ReactNode;
};

export function SidebarState({ children }: SidebarStateProps) {
  const { open } = useSidebar();
  return <>{children({ open })}</>;
}

type SidebarProps = PropsWithChildren<{
  className?: string;
}>;

export function Sidebar({ children, className }: SidebarProps) {
  const { open } = useSidebar();

  return (
    <aside
      className={cn(
        "relative overflow-visible border-r-[0.5px] border-[#2a2d39] bg-[#0d0d0d] transition-[width] duration-200 ease-out data-[state=collapsed]:w-9 data-[state=expanded]:w-60",
        className,
      )}
      data-state={open ? "expanded" : "collapsed"}
      aria-label="Slide thumbnails"
    >
      {children}
    </aside>
  );
}

type SidebarTriggerProps = {
  className?: string;
};

export function SidebarTrigger({ className }: SidebarTriggerProps) {
  const { open, toggle } = useSidebar();

  return (
    <button
      className={cn(
        "absolute right-1 top-3 cursor-pointer rounded-lg border-none bg-transparent px-2 py-px text-base text-white hover:bg-white/10 focus-visible:bg-white/10",
        className,
      )}
      type="button"
      title={open ? "Collapse sidebar" : "Expand sidebar"}
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      onClick={toggle}
    >
      {open ? "<" : ">"}
    </button>
  );
}
