import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SLIDE_BY_SLUG,
  SLIDE_SLUGS,
  type SlideResource,
} from "@/lib/embedded-slides";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SLIDE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slide = SLIDE_BY_SLUG[params.slug];
  if (!slide) return {};
  return {
    title: `${slide.title} | EcoLink`,
    description: slide.title,
    robots: { index: false, follow: false },
  };
}

export default function RecursoPresentacionPage({ params }: Props) {
  const slide = SLIDE_BY_SLUG[params.slug] as SlideResource | undefined;
  if (!slide) notFound();

  return (
    <main className="min-h-svh bg-eco-beige flex flex-col">
      <div className="sr-only">
        <h1>{slide.title}</h1>
      </div>
      <div className="flex-1 w-full max-w-[1600px] mx-auto p-2 sm:p-4 flex flex-col min-h-0">
        <div className="relative w-full aspect-video max-h-[min(100svh,100dvh)] min-h-[320px] sm:min-h-[400px]">
          <iframe
            title={slide.title}
            src={slide.embedSrc}
            className="absolute inset-0 w-full h-full rounded-lg border border-eco-green/25 shadow-md bg-white"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
