"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardContent } from "@heroui/react";

export default function Interests() {
  const interests = [
    {
      title: "Languages",
      emoji: "💬",
      gradient: `from-[var(--blue-1)] to-[var(--purple-2)]/70`,
      border: `border-[var(--blue-2)]/80`,
      text: `text-[var(--blue-font)]`,
      tags: ["🇩🇪 GE", "🇾🇪 AR", "🇬🇧 EN", "🇪🇸 ES", "🇫🇷 FR", "🇮🇹 ITA"],
      content:
        "I was lucky enough to grow up bilingual, learning <b>German</b> & <b>Arabic</b> as my mother tongues. In school, I learned <b>English</b>, <b>French</b>, and <b>Italian</b>, the latter of which I then based learning <b>Spanish</b> on, resulting in a peculiar itañol mixture that I still blab every now and then 🐥",
    },
    {
      title: "The Number 7",
      emoji: "7️⃣",
      gradient: `from-[var(--emerald-1)] to-[var(--cyan-2)]/70`,
      border: `border-[var(--emerald-2)]/80`,
      text: `text-[var(--emerald-font)]`,
      content:
        "I once created a presentation about sevenths cause ... they're cyclic! I am very fond of mental math which is why I was absolutely bedazzled when I noticed that fractions of 7 were actually magical. All you need to know is the string 142857. Any fraction of 7 will then be a cyclic permutation of this string 🌈",
    },
    {
      title: "Drawing",
      image: "/sailormoon.png",
      emoji: "🎨",
      gradient: `from-[var(--pink-1)] to-[var(--red-2)]/70`,
      border: `border-[var(--pink-2)]/80`,
      text: `text-[var(--pink-font)]`,
      content:
        "Growing up, I was obsessed with Sailor Moon which led to me always drawing faces with way too big eyes (till date). I love drawing <b>portraits</b>, but have recently gotten more into <b>landscapes</b> and sun/moon aesthetics 🌗",
    },
    {
      title: "Music & Choir",
      emoji: "♪",
      gradient: `from-[var(--violet-1)] to-[var(--fuchsia-2)]/70`,
      border: `border-[var(--violet-2)]/80`,
      text: `text-[var(--violet-font)]`,
      content:
        "A Mezzo, cosplaying as an Alto. I have learned that singing with others is an absolutely magical experience that helps me charge my batteries.",
    },
    {
      title: "Emojis",
      emoji: "🫏",
      gradient: `from-[var(--orange-1)] to-[var(--yellow-2)]/70`,
      border: `border-[var(--orange-2)]/80`,
      text: `text-[var(--orange-font)]`,
      content:
        "Since I know that <u><a href='https://emojipedia.org/' target='_blank' rel='noopener noreferrer'>emojipedia</a></u> exists, my life has not been the same. Despite a refused request for a donkey emoji in 2017, I still have a list of emojis I am planning to request at one point.",
    },
  ];

  const images = [
    {
      src: "geesi.jpg",
      alt: "geese",
      rotation: "-15deg",
    },
    {
      src: "cake.jpg",
      alt: "cake sketch",
      rotation: "5deg",
    },
    {
      src: "moonmoon.jpg",
      alt: "waterpainting of a fullmoon",
      rotation: "-10deg",
    },
  ];

  return (
    <div>
      <h1 className={title()}>
        <span className="font-mono text-3xl font-light">
          Things that fuel my creativity ♡
        </span>
      </h1>

      <div className="mt-12 space-y-6">
        <div className="grid gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
          {interests.map((item, index) => (
            <div key={index} className="grid justify-items-end">
              <Card
                className={`group col-span-full row-span-full rounded-none border bg-gradient-to-br ${item.gradient} ${item.border} lg:max-w-[28rem] p-0 shadow-sm shadow-current/5 backdrop-blur-sm font-mono hover:shadow-lg hover:scale-[1.01]`}>
                <div className="flex-1 flex-col items-start p-5 md:p-6 flex min-w-0 gap-3">
                  <CardHeader className="p-0">
                    <h2 className={`text-lg font-semibold ${item.text}`}>
                      {item.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="p-0 text-sm leading-relaxed text-[var(--neutral-text)]">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </CardContent>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--neutral-color)]/25 bg-[var(--neutral-color)]/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--neutral-text)] backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="col-span-full row-span-full z-10 -mt-[20px] -mr-[15px] h-16 w-14 flex-none rounded-xl object-cover rotate-[-15deg] hover:rotate-[5deg] hover:scale-[1.1]"
                />
              ) : (
                <span className="col-span-full row-span-full z-10 -mt-[10px] -mr-[20px] h-14 w-14 items-center rounded-xl text-4xl rotate-[-15deg]  hover:rotate-[10deg] hover:scale-[1.1]">
                  {item.emoji}
                </span>
              )}
            </div>
          ))}
          <div className="flex gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={"/drawings/" + image.src}
                alt={image.alt}
                className="z-10 h-26 border-4 border-[var(--neutral-color)]/25 shadow-xl/20 flex-none rounded-md object-cover rotate-[image.rotation] hover:rotate-[5deg] hover:scale-[1.1]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
