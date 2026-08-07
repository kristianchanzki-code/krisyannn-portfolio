"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return <span className="theme-toggle theme-toggle-placeholder" aria-hidden="true" />;
  }

  const evening = resolvedTheme === "evening";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(evening ? "day" : "evening")}
      aria-label={`Switch to ${evening ? "Day" : "Evening"} theme`}
      title={`Switch to ${evening ? "Day" : "Evening"}`}
    >
      {evening ? <SunMedium size={16} /> : <MoonStar size={16} />}
      <span>{evening ? "Day" : "Evening"}</span>
    </button>
  );
}
