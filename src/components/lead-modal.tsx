"use client";

import { useEffect } from "react";
import { LeadForm } from "@/components/lead-form";

type LeadModalProps = { type: "request-call" | "find-cost"; onClose: () => void };

export function LeadModal({ type, onClose }: LeadModalProps) {
  const isCost = type === "find-cost";
  const title = isCost ? "Узнать стоимость" : "Заказать звонок";

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="lead-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section id={`modal-${type}`} className="lead-modal__dialog _bg-light-blue _pt-32 _xs-pt-48 _sm-pt-64 _pb-48 _xs-pb-56 _sm-pt-72" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        <button className="lead-modal__close" type="button" aria-label="Закрыть" onClick={onClose}>×</button>
        <p id="lead-modal-title" className="_text-white _text-center _font-medium _mb-24 _xs-mb-32 _sm-mb-48">{title}</p>
        <LeadForm formId={type} title="" buttonText={title} onSuccess={() => window.setTimeout(onClose, 1200)} />
      </section>
    </div>
  );
}
