"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface HotelGalleryProps {
  images: string[];
}

export default function HotelGallery({ images }: HotelGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-125 rounded-xl overflow-hidden">
        {images.slice(0, 5).map((src, i) => (
          <div
            key={i}
            className={`relative cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image src={src} alt="Hotel" fill className="object-cover" />

            {i === 4 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold">
                +{images.length - 5} fotoğraf
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images.map((src) => ({ src }))} />
    </>
  );
}
