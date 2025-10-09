"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProjectCarousel({ media }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % media.length);
  const prev = () => setIndex((index - 1 + media.length) % media.length);

  const current = media[index];

  return (
    <div className="relative h-96 bg-black flex items-center justify-center">
      {current.type === "image" ? (
        <img src={current.src} className="object-contain h-full w-full" />
      ) : (
        <video
          src={current.src}
          controls
          className="h-full w-full object-contain"
        />
      )}
      <Button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        ‹
      </Button>
      <Button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        ›
      </Button>
    </div>
  );
}
