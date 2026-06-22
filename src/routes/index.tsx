import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorkInEurope — Find jobs and hire verified global talent in Europe" },
      {
        name: "description",
        content:
          "WorkInEurope connects international professionals with verified European employers. Find visa-sponsored roles, showcase your skills on video, and relocate in days.",
      },
      { property: "og:title", content: "WorkInEurope — Your European Career Gateway" },
      {
        property: "og:description",
        content:
          "Streamlined cross-border hiring for European employers. Hire verified candidates with built-in visa relocation support.",
      },
    ],
  }),
  component: Landing,
});
