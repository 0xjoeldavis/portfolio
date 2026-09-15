import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Stack } from "@/components/site/Stack";
import { Work } from "@/components/site/Work";
import { Experience } from "@/components/site/Experience";
import { Reviews } from "@/components/site/Reviews";
import { Now } from "@/components/site/Now";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riku Kato — Fullstack + AI Engineer" },
      { name: "description", content: "Portfolio of Riku Kato — fullstack web systems and AI-native apps. React, Next.js, Node, Claude, GPT." },
      { property: "og:title", content: "Riku Kato — Fullstack + AI Engineer" },
      { property: "og:description", content: "Shipping fullstack web systems and AI-native apps, fast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Stack />
          <Work />
          <Experience />
          <Reviews />
          <Now />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
