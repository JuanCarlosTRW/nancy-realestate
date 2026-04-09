"use server";

export type FormState = { success: boolean; message: string };

/**
 * Contact form server action.
 *
 * Currently logs submissions to the server console and returns a success
 * response. To wire up real email delivery, plug one of these in below:
 *
 *   — Formspree:
 *       await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *         method: "POST",
 *         headers: { "Content-Type": "application/json", Accept: "application/json" },
 *         body: JSON.stringify(data),
 *       });
 *
 *   — Resend:
 *       import { Resend } from "resend";
 *       const resend = new Resend(process.env.RESEND_API_KEY);
 *       await resend.emails.send({
 *         from: "Nancy Website <noreply@yourdomain.com>",
 *         to: "nmusselmanrealty@gmail.com",
 *         subject: `New inquiry from ${data.name}`,
 *         text: JSON.stringify(data, null, 2),
 *       });
 */
export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  console.log("[Contact Submission]", data);

  return {
    success: true,
    message:
      "Thanks — I'll be in touch within 24 hours. Talk soon. — Nancy",
  };
}
