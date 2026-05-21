import { link } from "fs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sarah Alaghbari",
  description: "My lil page",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About me",
      href: "/about",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Interests",
      href: "/interests",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/sarah-alaghbari/",
  },
};
