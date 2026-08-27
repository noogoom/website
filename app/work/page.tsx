"use client";

import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  Separator,
  Button,
} from "@heroui/react";
import { PiImageDuotone } from "react-icons/pi";

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
      tags: ["ai", "ux", "transparency", "human-ai interaction"],
      image: "/aitransp.png",
    },
    {
      id: "choir_vis",
      title: "Social Media Content production for Choir",
      year: "2022–today",
      content:
        "Visual communication work for my acapella choir. Includes designing Instagram layouts, video production, sound editing, poster templates.",
      attachments: [
        {
          label: "Choir Instagram",
          url: "https://www.instagram.com/vokalwerkdresden",
        },
      ],
      tags: ["visual design", "social media", "content production"],
      image: "/vwp.png",
    },
    // {
    //   id: "case_study_tm",
    //   title: "Case Study: Survey of User Requirements for Frontend Feature",
    //   year: "2023–2024",
    //   content:
    //     "Conducted a survey and analysis of user requirements for a task management feature, focusing on user needs, pain points, and desired functionalities to inform the design and development process.",
    //   attachments: [
    //     {
    //       label: "Case Study (PDF)",
    //       url: "./tm-case-study.pdf",
    //     },
    //   ],
    //   tags: [
    //     "UX",
    //     "requirements analysis",
    //     "case study",
    //     "frontend development",
    //   ],
    // },
    {
      id: "thesis_gamification_2020",
      title: "Master’s Thesis: Gamification for Data Annotation",
      year: 2020,
      content:
        "Researched gamification mechanics and developed a user-centered gamification approach for the annotation of training data for AI models.",
      attachments: [
        {
          label: "Master's Thesis",
          url: "https://www.degruyterbrill.com/document/doi/10.1515/icom-2020-0030/html",
        },
      ],
      image: "/robtut.png",
      tags: [
        "research",
        "user-centered design",
        "ux",
        "frontend design",
        "gamification",
      ],
    },
    {
      id: "mcm",
      title: "Website Rework & Content Management for Medical Career Mentoring",
      year: "2016–2019",
      content:
        "Optimized the website for medical career mentoring, using a website builder. Focused on comprehensive design, content clarity, and readability enhancement.",
      attachments: [
        {
          label: "MCM Website",
          url: "https://www.mcm-giessen.com",
        },
      ],
      tags: ["website", "cms", "content management"],
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
        <h1 className={title()}>All about happy experiences 🪄</h1>
      </div>
      <div className="text-lg text-[hsl(var(--nextui-foreground-600))] mt-4">
        I enjoy working at the intersection between technology, design,
        communication, and psychology.
      </div>
      <div className="flex flex-col mt-12">
        {workItems.map((item) => (
          <Card
            key={item.id}
            className="site-card mb-6 w-full items-stretch md:flex-row gap-6">
            <div className="bg-[var(--accent-background)] relative w-full shrink-0 overflow-hidden rounded-2xl h-[140px] sm:w-[200px]">
              {item.image ? (
                <img
                  alt="avatar"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none object-[25%_44%]"
                  loading="lazy"
                  src={"/work/" + item.image}
                />
              ) : (
                <div className="pointer-events-none text-[var(--accent)] text-7xl absolute inset-0 flex h-120px w-full items-center justify-center select-none">
                  <PiImageDuotone />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <CardHeader>
                <h2>
                  {item.year}: {item.title}
                </h2>
              </CardHeader>
              <CardContent>
                <div>{item.content}</div>
              </CardContent>
              <Separator orientation="horizontal" className="w-full" />
              <Card.Footer className="justify-between mt-3">
                {item.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Chip key={t} className="pretty-chips">
                        {t}
                      </Chip>
                    ))}
                  </div>
                ) : null}
                {item.attachments?.length
                  ? item.attachments.map((attr, i) => (
                      <Button
                        key={i}
                        size="sm"
                        onPress={() => window.open(attr.url, "_blank")}>
                        {attr.label}
                      </Button>
                    ))
                  : null}
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
