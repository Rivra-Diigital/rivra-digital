import Image from "next/image";
import { carouselData } from "./data";

export const Carousel = () => {
  return (
    <div className="relative overflow-hidden w-full py-16">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#2d195f] to-transparent z-10"></div>

      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#2d195f] to-transparent z-10"></div>

      <div className="carousel-track">
        {[...carouselData, ...carouselData].map((item, index) => (
          <div key={index} className="carousel-item">
            <Image
              src={item.image}
              alt={item.name}
              width={86}
              height={86}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};