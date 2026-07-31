"use client";

import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  Link,
  Separator,
} from "@heroui/react";

export default function Work() {
  const workItems = [
    {
      id: "ai_transparency_publication_2024_2025",
      title: "AI Transparency: UX & Interface Interpretation Concepts",
      year: "2024–2025",
      content:
        "Exploration of how AI systems can be made more interpretable through interface design, focusing on transparency, controllability, and human understanding of algorithmic outputs.",
      attachments: [
        {
          label: "LinkedIn Article",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7379822456179691520/",
        },
      ],
      tags: ["AI", "UX", "transparency", "human-AI interaction"],
    },
    {
      id: "choir_vis",
      title: "Social Media Content production for Choir",
      year: "2022–today",
      content:
        "Visual communication work for my acapella choir. Includes designing Instagram layouts, video production, sound editing, poster templates.",
      attachments: [
        {
          label: "Instagram 'Vokalwerk Dresden'",
          url: "https://www.instagram.com/vokalwerkdresden",
        },
      ],
      tags: ["visual design", "social media", "content production"],
    },
    {
      id: "case_study_tm",
      title: "Case Study: Survey of User Requirements for Frontend Feature",
      year: "2023–2024",
      content:
        "Conducted a survey and analysis of user requirements for a task management feature, focusing on user needs, pain points, and desired functionalities to inform the design and development process.",
      attachments: [
        {
          label: "Case Study (PDF)",
          url: "./tm-case-study.pdf",
        },
      ],
      tags: [
        "UX",
        "requirements analysis",
        "case study",
        "frontend development",
      ],
    },
    {
      id: "thesis_gamification_2020",
      title: "Master’s Thesis: Gamification in Software Systems",
      year: 2020,
      content:
        "Researched gamification mechanics in digital systems, focusing on motivational design and behavioral reinforcement patterns in interactive environments.",
      attachments: [
        {
          label: "Master's Thesis",
          url: "https://imld.de/study/theses/theses-2019/masterarbeit-sarah-alaghbari/",
        },
      ],
      tags: ["research", "behavioral design", "UX", "gamification"],
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-6 items-center">
        <img
          src="/work.png"
          alt="colorful pink blob"
          className="h-full w-18 overflow-hidden object-cover object-left"
        />
        <h1 className={title()}>Complex workflows? Happy experiences 🪄</h1>
      </div>
      <div className="text-lg text-[hsl(var(--nextui-foreground-600))] mt-4">
        I enjoy working at the intersection between technology, design,
        communication, and psychology.
      </div>
      <div className="flex flex-col mt-12">
        {workItems.map((item) => (
          <Card key={item.id} className="site-card mb-6">
            <CardHeader>
              <h2>
                {item.year}: {item.title}
              </h2>
            </CardHeader>
            <CardContent>
              <div>{item.content}</div>
            </CardContent>
            <Separator orientation="horizontal" className="w-full" />
            <Card.Footer className="justify-between">
              {item.tags?.length ? (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((t) => (
                    <Chip key={t} className="pretty-chips">
                      {t}
                    </Chip>
                  ))}
                </div>
              ) : null}
              {item.attachments?.length
                ? item.attachments.map((attr, i) => (
                    <Link
                      key={i}
                      href={attr.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {attr.label}
                      <Link.Icon />
                    </Link>
                  ))
                : null}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}
