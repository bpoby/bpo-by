type LeadMessage = { formId: string; name: string; tel: string; email: string; message: string };

export async function sendLead(lead: LeadMessage) {
  if (process.env.EMAIL_PROVIDER !== "resend") throw new Error("Email provider is not configured");

  const apiKey = process.env.EMAIL_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;
  if (!apiKey || !from || !to) throw new Error("Email provider is not configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Заявка с сайта: ${lead.formId}`,
      text: [`Имя: ${lead.name}`, `Телефон: ${lead.tel}`, lead.email ? `E-mail: ${lead.email}` : "", lead.message ? `Сообщение: ${lead.message}` : ""].filter(Boolean).join("\n"),
      ...(lead.email ? { reply_to: lead.email } : {}),
    }),
  });
  if (!response.ok) throw new Error("Email provider rejected the message");
}
