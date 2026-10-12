import nodemailer from "nodemailer";

type LeadMessage = {
  formId: string;
  name: string;
  tel: string;
  email: string;
  message: string;
};

export async function sendLead(lead: LeadMessage) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;

  if (!host || !user || !password || !from || !to) {
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
    auth: {
      user,
      pass: password,
    },
  });

  await transporter.sendMail({
    from: `"BPO.by" <${from}>`,
    to,
    subject: `Заявка с сайта: ${lead.formId}`,
    text: [
      `Имя: ${lead.name}`,
      `Телефон: ${lead.tel}`,
      lead.email ? `E-mail: ${lead.email}` : "",
      lead.message ? `Сообщение: ${lead.message}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    ...(lead.email ? { replyTo: lead.email } : {}),
  });
}
