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
