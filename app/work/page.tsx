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
      title: "AI Transparency — UX & Interface Interpretation Concepts",
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
      id: "ux_full_cycle_product_work",
      title: "Full-Cycle UX Work — Requirements to Implementation",
      year: "2021–present",
      content:
        "Worked across the full feature lifecycle: gathering requirements, translating them into structured work packages, creating mockups, supporting frontend implementation, and iterating based on user feedback.",
      attachments: [],
      tags: ["product design", "UX", "agile", "stakeholder communication"],
    },
    {
      id: "thesis_gamification_2020",
      title: "Master’s Thesis — Gamification in Software Systems",
      year: 2020,
      content:
        "Researched gamification mechanics in digital systems, focusing on motivational design and behavioral reinforcement patterns in interactive environments.",
      attachments: [
        {
          label: "Thesis",
          url: "https://imld.de/study/theses/theses-2019/masterarbeit-sarah-alaghbari/",
        },
      ],
      tags: ["research", "behavioral design", "UX", "gamification"],
    },
  ];
  return (
    <div>
      <h1 className={title()}>Complex workflows? 🪄 Happy experiences 🎉</h1>
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
                      View {attr.label}
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
