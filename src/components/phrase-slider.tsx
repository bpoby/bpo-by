"use client";

import { useEffect, useState } from "react";

export function PhraseSlider({ phrases }: { phrases: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (phrases.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % phrases.length), 3000);
    return () => window.clearInterval(timer);
  }, [phrases.length]);

  return <>
    <div className="phrase-slider__slides" aria-live="polite">
      {phrases.map((phrase, index) => <div className="phrase-slider__slide _h2 _px-32 _py-24 _text-white" aria-hidden={index !== active} key={`${phrase}-${index}`}>{phrase}</div>)}
    </div>
    <div className="swiper-pagination phrase-slider__pagination" aria-label="Слайды">
      {phrases.map((phrase, index) => <button className={`swiper-pagination-bullet${index === active ? " swiper-pagination-bullet-active" : ""}`} type="button" aria-label={`Показать слайд ${index + 1}: ${phrase}`} aria-pressed={index === active} onClick={() => setActive(index)} key={`${phrase}-${index}`} />)}
    </div>
  </>;
}
