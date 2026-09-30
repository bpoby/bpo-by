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
      <section id={`modal-${type}`} className="lead-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        <button className="lead-modal__close" type="button" aria-label="Закрыть" onClick={onClose}>×</button>
        <LeadForm formId={type} title={title} buttonText={title} className="lead-modal__form" onSuccess={() => window.setTimeout(onClose, 1200)} />
      </section>
    </div>
  );
}
