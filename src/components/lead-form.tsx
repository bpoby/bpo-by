"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = { formId: string; title: string; buttonText: string; onSuccess?: () => void; className?: string };

export function LeadForm({ formId, title, buttonText, onSuccess, className = "" }: LeadFormProps) {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("");
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...fields, formId }) });
      if (!response.ok) throw new Error("send-failed");
      setStatus("Спасибо! Мы свяжемся с вами.");
      event.currentTarget.reset();
      onSuccess?.();
    } catch {
      setStatus("Не удалось отправить заявку. Пожалуйста, позвоните нам.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className={`lead-form _flex _flex-column _flex-cross-center _flex-items-center ${className}`.trim()} onSubmit={submit}>
      <input type="hidden" name="formId" value={formId} />
      {title && <h2 className="lead-form__title _mb-32 _text-center">{title}</h2>}
      <label className="_sr-only" htmlFor={`${formId}-name`}>Имя</label>
      <input id={`${formId}-name`} className="_mb-24" type="text" name="name" placeholder="Имя" required />
      <label className="_sr-only" htmlFor={`${formId}-tel`}>Номер телефона</label>
      <input id={`${formId}-tel`} className="_mb-24" type="tel" name="tel" placeholder="Номер телефона" required />
      {formId === "feedbackForm" && <>
        <label className="_sr-only" htmlFor={`${formId}-email`}>Ваш E-mail</label>
        <input id={`${formId}-email`} className="_mb-24" type="email" name="email" placeholder="Ваш E-mail" required />
        <label className="_sr-only" htmlFor={`${formId}-message`}>Текст сообщения</label>
        <textarea id={`${formId}-message`} className="_mb-24" name="message" placeholder="Текст сообщения" required />
      </>}
      <button className="btn btn_blue _mt-32 _mx-auto" type="submit" disabled={pending}>{pending ? "Отправка…" : buttonText}</button>
      <p className="lead-form__status" role="status" aria-live="polite">{status}</p>
      <span className="_none" aria-hidden="true"><input tabIndex={-1} autoComplete="off" name="website" /></span>
    </form>
  );
}
