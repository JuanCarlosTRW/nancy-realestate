"use server";

export type FormState = { success: boolean; message: string };

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  console.log("[Contact Submission]", data);
  // TODO: wire to Resend / Formspree / email service
  return {
    success: true,
    message: "Thank you — Nancy will be in touch within 24 hours.",
  };
}
