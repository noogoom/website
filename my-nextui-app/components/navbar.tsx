import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <nav className="top-0 z-40 min-w-sm border-b border-separator backdrop-blur-lg">
      <header>
        <ul className="flex flex-col gap-6 h-16 justify-between px-6 text-lg">
          {siteConfig.navItems.map((item) => (
            <li key={item.href} color="foreground">
              <a href={item.href} className="text-lg font-medium font-mono">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </nav>
  );
};
