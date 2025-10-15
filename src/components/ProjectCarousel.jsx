"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { extractYoutubeId, getProjectMedia } from "@/utils";
import { Dialog, DialogContent } from "./ui/dialog";

export default function ProjectCarousel({ media, mediaPath }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  if (mediaPath) {
    const imgMedia = getProjectMedia(mediaPath);
    media = media.concat(imgMedia);
  }

  const next = () => setIndex((index + 1) % media.length);
  const prev = () => setIndex((index - 1 + media.length) % media.length);

  const current = media[index];

  return (
    <div className="relative h-96 bg-black flex items-center justify-center">
      {current?.type === "image" && (
        <img
          src={current?.src}
          alt=""
          className="object-contain h-full w-full cursor-zoom-in"
          onClick={() => setZoomed(true)}
        />
      )}
      {current?.type === "video" && (
        <video
          src={current?.src}
          controls
          className="object-contain h-full w-full"
        />
      )}
      {current?.type === "youtube" && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${extractYoutubeId(
            current?.src
          )}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <Button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
      >
        ‹
      </Button>
      <Button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
      >
        ›
      </Button>

      <Dialog open={zoomed} onOpenChange={setZoomed}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-none shadow-none">
          <img
            src={current?.src}
            alt=""
            className="w-full h-auto object-contain rounded-lg cursor-zoom-out"
            onClick={() => setZoomed(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
