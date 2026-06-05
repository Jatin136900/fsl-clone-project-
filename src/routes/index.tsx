import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TalentBridge AI — Hire the world's best talent, on video" },
      {
        name: "description",
        content:
          "TalentBridge AI connects international employers with verified, video-first candidates across 147 countries. AI matching, visa support, and hiring in days.",
      },
      { property: "og:title", content: "TalentBridge AI — Hiring without borders" },
      {
        property: "og:description",
        content:
          "Video-first global recruitment platform powered by AI. From verified candidates to visa-ready hires in days.",
      },
    ],
  }),
  component: Landing,
});
