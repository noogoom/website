"use client";
import { useTheme } from "next-themes";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { Button } from "@heroui/react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={
        "bg-[var(--secondary-background)] border-transparent text-[var(--on-secondary-background)] hover:border-[var(--hover-color)]"
      }
      variant="outline">
      {isLightTheme ? (
        <MoonFilledIcon size={22} />
      ) : (
        <SunFilledIcon size={22} />
      )}
    </Button>
  );
}
