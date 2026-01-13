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
      {/* GRID GÖRÜNÜMÜ */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-125 rounded-xl overflow-hidden">
        {images.slice(0, 5).map((src, i) => (
          <div
            key={i}
            className={`relative group w-full h-full cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            onClick={() => {
              setIndex(i); // Hangi resme tıklandıysa ondan başla
              setOpen(true); // Lightbox'ı aç
            }}
          >
            <Image src={src} alt="Hotel" fill className="object-cover group-hover:scale-105 transition duration-500" />

            {/* +X FOTOĞRAF YAZISI */}
            {i === 4 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold">
                +{images.length - 5} fotoğraf
              </div>
            )}
          </div>
        ))}
      </div>

      {/* LIGHTBOX (SLIDER) - Tıklanınca Açılır */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))} // Tüm resimleri slider'a yükle
      />
    </>
  );
}
