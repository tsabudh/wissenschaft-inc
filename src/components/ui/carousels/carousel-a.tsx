"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselAProps {
  data: { textContent: string; indicatorText?: string }[];
}

export default function CarouselA({ data }: CarouselAProps) {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} text-xs sm:text-sm px-3 py-1 text-gray-500 cursor-pointer">${data[index]?.indicatorText ?? ""}</span>`;
          },
        }}
        className="w-full"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex min-h-[220px] items-center justify-center rounded-xl bg-gray-50 px-6 py-10 shadow-sm md:min-h-[280px]">
              <p className="max-w-2xl text-center text-lg leading-relaxed text-gray-700 md:text-xl">
                {item.textContent}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <button
          className="prev-btn bg-background absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full p-2 shadow hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <button
          className="next-btn bg-background absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full p-2 shadow hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </Swiper>
    </div>
  );
}
