"use client";

import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  const isDark = mounted && resolvedTheme === "dark";
  const ariaLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        aria-hidden="true"
        tabIndex={-1}
        className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground md:inline-flex"
      >
        <span className="size-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      title={ariaLabel}
      className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="relative grid size-5 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 grid place-items-center"
            >
              <Sun className="size-5" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: 45, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 grid place-items-center"
            >
              <Moon className="size-5" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
