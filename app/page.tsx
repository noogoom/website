"use client";
import { Avatar, Card, CardContent, Chip, CardHeader } from "@heroui/react";
import { Image } from "@heroui/image";
import { useTheme } from "next-themes";

const chipContents = ["sustainability 🌱", "art", "figma", "emojis ✨", "يمن"];
const cardContents = [
  {
    title: "about me",
    content:
      "M.Sc. in Media Computer Science, passionate about gamification, interactive technologies, and psychology.",
    icon: "school",
    page: "about",
  },
  {
    title: "work",
    content:
      "Software & UX Engineer. Bridging structural frontend development with holistic human-centered product systems.",
    icon: "keyboard",
    page: "work",
  },
  {
    title: "interests",
    contentChips: ["Drawing", "Choir", "Languages"],
    icon: "stock_media",
    page: "interests",
  },
];

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-16 h-full">
      <header className="flex flex-row gap-6">
        {theme === "light" ? (
          <Image width={150} alt="Sun Picture" src="/sun.png" />
        ) : (
          <Image width={150} alt="Moon Picture" src="/image.png" />
        )}
        <div className="flex flex-col gap-6">
          <span className="text-4xl">Hi! 🐢</span>
          <span className="text-2xl text-[hsl(var(--nextui-foreground-600))]">
            I'm Sarah, a software engineer with a passion for user experience
            and design.
          </span>
          <div className="flex gap-4">
            {chipContents.map((chipContent) => (
              <Chip key={chipContent} className="pretty-chips text-sm">
                {chipContent}
              </Chip>
            ))}
          </div>
        </div>
      </header>
      <div className="gap-3 grid grid-cols-3 lg:grid-cols-3 w-full">
        {cardContents.map((item, index) => (
          <Card
            key={index}
            className="site-card site-card-hover"
            onClick={() => (window.location.href = `/${item.page}`)}>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Avatar className="item-icon rounded-lg">
                <span className="material-symbols-outlined">{item.icon}</span>
              </Avatar>
              <h2>{item.title}</h2>
            </CardHeader>
            <CardContent className="overflow-visible">
              <div className="flex gap-4 justify-center">
                {item.content}
                {item.contentChips?.map((chip, i) => (
                  <Chip key={i} className="pretty-chips text-sm">
                    {chip}
                  </Chip>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
