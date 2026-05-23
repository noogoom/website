"use client";

import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "./theme-switch";
import { Separator } from "@heroui/react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <ul className="flex gap-6 items-center">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-lg font-medium font-mono">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <ThemeSwitch /> */}
        </div>
        <Separator orientation="horizontal" className="w-full" />
      </div>
    </nav>
  );
};
