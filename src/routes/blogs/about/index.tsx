
import { AboutPage } from "@/features/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/blogs/about/')({
  component: AboutPage,
})


