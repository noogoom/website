"use client";
import { Card, CardContent, Chip, CardHeader, Separator } from "@heroui/react";
import { Image } from "@heroui/image";
import { useTheme } from "next-themes";

const chipContents = ["emojis ✨", "sustainability 🌱", "art", "figma", "يمن"];
const cardContents = [
  {
    title: "studies",
    content: "Masters in Media Computer Science",
    icon: "school",
  },
  {
    title: "work",
    content: "Software Engineer / UX Engineer",
    icon: "keyboard",
  },
  {
    title: "interests",
    contentChips: ["Drawing", "Choir", "Languages"],
    icon: "stock_media",
  },
];

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-6 h-full">
      {theme === "light" ? (
        <Image width={150} alt="Sun Picture" src="/sun.png" />
      ) : (
        <Image width={150} alt="Moon Picture" src="/image.png" />
      )}
      <span className="text-4xl font-bold">Hi, I'm Sarah</span>
      <span className="text-2xl text-[hsl(var(--nextui-foreground-600))]">
        I'm a software engineer with a passion for user experience and design.
      </span>
      <div className="flex gap-4">
        {chipContents.map((chipContent) => (
          <Chip key={chipContent} className="pretty-chips">
            <b>{chipContent}</b>
          </Chip>
        ))}
      </div>
      <Separator orientation="horizontal" />
      <div className="gap-3 grid grid-cols-3 lg:grid-cols-3 w-full">
        {cardContents.map((item, index) => (
          <Card key={index} className="site-card">
            <CardHeader className="flex flex-col items-center justify-center gap-2 pb-2">
              <span className="material-symbols-outlined item-icon">
                {item.icon}
              </span>
              <h2 className="text-xl font-bold tracking-tight">{item.title}</h2>
            </CardHeader>
            <CardContent className="overflow-visible">
              <div className="flex gap-4 justify-center text-sm font-medium">
                {item.content}
                {item.contentChips?.map((chip, i) => (
                  <Chip key={i} className="pretty-chips">
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
