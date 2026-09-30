"use client";

import type { ReactNode, WheelEvent } from "react";
import { useRef } from "react";

export function ServiceCarousel({ children }: { children: ReactNode }) {
  const slider = useRef<HTMLDivElement>(null);

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || !slider.current) return;
    event.preventDefault();
    slider.current.scrollLeft += event.deltaY;
  }

  return <div className="services-provided__slider swiper-container" aria-label="Услуги" onWheel={handleWheel} ref={slider} tabIndex={0}>
    <div className="swiper-wrapper">{children}</div>
  </div>;
}
