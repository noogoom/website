"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardContent } from "@heroui/react";

export default function Interests() {
  const interests = [
    {
      title: "Drawing and Visual Arts",
      image: "/sailormoon.png",
      emoji: "🎨",
      content:
        "Growing up, I was obsessed with Sailor Moon which led to me always drawing faces with way too big eyes (till date). I love drawing <b>portraits</b>, but in the recent years have gotten more into <b>landscapes</b> and doodling sun/moon aesthetics (who would have thought?)",
    },
    {
      title: "Music & Choir",
      emoji: "🎶",
      content:
        "A Mezzo, cosplaying as an Alto. There is so much music to love: Cartoon theme songs, 80s Britpop, Arabic 90s, Grunge, 70s Funk, New German Wave, the Mario Kart Soundtrack, and many many more. I have learned that singing with others is an absolutely magical experience that helps me charge my batteries. Besides, I am a part-time mimic of emergency car sirens in order to find my fourths.",
    },
    {
      title: "Languages and Linguistics (and being a Grammar Nerd)",
      emoji: "💬",
      content:
        "Growing up bilingual, I was lucky enough to learn two phonetically quite distinct languages <b>German</b> & <b>Arabic</b> as my mother tongues. I believe, this unlocked some areas in my brain that help me quickly grasp new languages. In school, I learned <b>English</b>, <b>French</b>, and <b>Italian</b>, the latter of which I then based learning <b>Spanish</b> on, resulting in a peculiar mixture of Italian and Spanish that I carry in my head and call my own Esperanto. Also, I am highly fascinated by the evolution of languages and love looking at <u><a href='https://www.worldhistory.org/image/1028/indo-european-language-family-tree/' target='_blank' rel='noopener noreferrer'>trees that visualize the connections among languages</a></u> 🤌. Did you know that in theory, Persian and German are actually part of the same language family, and therefore more closely related than, e.g., Persian and Arabic? And evolution is still happening, for example with the rise of internet slang and emojis – love it! 👾",
    },

    {
      title: "Emojis",
      emoji: "🫏",
      content:
        "Since I know that <u><a href='https://emojipedia.org/' target='_blank' rel='noopener noreferrer'>emojipedia</a></u> exists, my life has not been the same. Despite a refused request for a donkey emoji in 2017 (which DOES exists now, take that <i>'not distinctive enough from existing horse emoji'</i>!), I still have a list of emojis I am planning to request at one point 🤓 Also, if you have never used <u><a href='https://emojipedia.org/emoji-mashup' target='_blank' rel='noopener noreferrer'>emoji kitchen</a></u>, take a look, now!",
    },
    {
      title: "The Number 7",
      emoji: "7️⃣",
      content:
        "Believe it or not, I once created a presentation about sevenths cause ... they're cyclic! I am very fond of mental maths which is why I was absolutely bedazzled when I noticed that fractions of 7 were actually magical. All you need to know is the string 142857 (which, funny enough, is 2*7, 4*7 and 8*7+1). Any fraction of 7 will be a cyclic permutation of this string and this makes me really happy 🌈",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-6 items-center">
        <img
          src="/interest.png"
          alt="goose picture"
          className="h-full w-20 overflow-hidden object-cover object-left"
        />
        <h1 className={title()}>What fuels my creativity?</h1>
      </div>
      <div className="flex flex-col mt-12">
        {interests.map((item, index) => (
          <Card
            key={index}
            className="site-card mb-6 w-full items-stretch md:flex-row items-center gap-10">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-20 object-cover rounded-lg"
              />
            ) : (
              <span className="text-6xl">{item.emoji}</span>
            )}
            <div className="flex flex-1 flex-col gap-3">
              <CardHeader className="w-full items-stretch md:flex-row">
                <h2>{item.title}</h2>
              </CardHeader>
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
