"use server";

import { Resend } from "resend";

export type FormState = { success: boolean; message: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not provided";
  const interest = (formData.get("interest") as string) || "Not specified";
  const message = (formData.get("message") as string) || "No message";

  try {
    await resend.emails.send({
      from: "Nancy Website <noreply@nancymusselman.com>",
      to: "jcpl-07@hotmail.com",
      subject: `New Website Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F2; border: 1px solid #E8DDD0;">
          <h2 style="color: #2C2218; font-size: 24px; font-weight: 400; margin-bottom: 24px;">
            New Website Inquiry
          </h2>
          <hr style="border: none; border-top: 1px solid #C8A97E; margin: 16px 0 24px;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #7A6855; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #2C2218; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6855; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #2C2218; font-size: 15px;"><a href="mailto:${email}" style="color: #A8845A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6855; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #2C2218; font-size: 15px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6855; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Interested In</td>
              <td style="padding: 10px 0; color: #2C2218; font-size: 15px;">${interest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6855; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #2C2218; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E8DDD0; margin: 24px 0 16px;" />
          <p style="color: #7A6855; font-size: 12px; margin: 0;">
            Sent from nancymusselman.com contact form
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thanks for reaching out. Nancy will get back to you shortly.",
    };
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return {
      success: false,
      message:
        "Something went wrong sending your message. Please try again or call Nancy directly at 214.797.8040.",
    };
  }
}
