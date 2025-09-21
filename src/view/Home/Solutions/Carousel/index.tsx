import Image from "next/image";
import { carouselData } from "./data";

export const Carousel = () => {
  return (
    <div className="overflow-hidden w-full py-16">
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