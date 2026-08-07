"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(160),
  message: z.string().trim().min(20).max(3000),
  companyWebsite: z.string().max(0).optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    companyWebsite: formData.get("companyWebsite"),
  });

  if (!result.success) {
    return { status: "error", message: "Please check your details and write at least 20 characters." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      status: "error",
      message: "The contact form is not connected yet. Please use the email link beside this form.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: result.data.email,
      subject: `Portfolio inquiry from ${result.data.name}`,
      text: `${result.data.message}\n\nFrom: ${result.data.name} <${result.data.email}>`,
    });

    if (error) {
      return { status: "error", message: "The message could not be sent. Please email me directly instead." };
    }

    return { status: "success", message: "Message sent. Thank you for reaching out." };
  } catch {
    return { status: "error", message: "The message could not be sent. Please email me directly instead." };
  }
}
