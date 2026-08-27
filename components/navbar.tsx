"use client";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import { usePathname } from "next/navigation";
import { TbBrandLinkedin, TbMail } from "react-icons/tb";
import { Button } from "@heroui/react";
import { FiMail } from "react-icons/fi";

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <ul className="flex gap-10 items-center">
            {siteConfig.navItems.map((item) => (
              <li
                key={item.href}
                className={`nav-item transition-colors border-b-2 ${
                  isActive(item.href) ? "active" : ""
                }`}>
                <a href={item.href} className="font-medium font-mono">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button
              onClick={() =>
                window.open("mailto:sarahmudor@gmail.com", "_blank")
              }
              size="sm"
              className="nav-action-button">
              <FiMail />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sarah-alaghbari",
                  "_blank",
                )
              }
              size="sm"
              className="nav-action-button">
              <TbBrandLinkedin />
            </Button>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
