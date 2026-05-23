"use client";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <ul className="flex gap-10 items-center">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`font-medium font-mono transition-colors pb-2 border-b-2 ${
                    isActive(item.href)
                      ? "border-b-[var(--secondary)]"
                      : "border-transparent hover:text-[var(--primary)]"
                  }`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
