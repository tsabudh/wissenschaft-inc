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
    <div className="relative w-full max-w-4xl mx-auto">
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
            <div className="flex items-center justify-center min-h-[220px] md:min-h-[280px] px-6 py-10 bg-gray-50 rounded-xl shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl leading-relaxed">
                {item.textContent}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <button
          className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </Swiper>
    </div>
  );
}
