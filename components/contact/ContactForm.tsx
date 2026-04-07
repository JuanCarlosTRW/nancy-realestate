"use client";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type FormState } from "@/app/contact/actions";

const initial: FormState = { success: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-base bg-gold text-white border border-gold w-full hover:bg-goldDark disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

const inputCls =
  "w-full bg-warmWhite border border-bordr px-4 py-3 text-[14px] text-darkText font-light focus:outline-none focus:border-gold transition-colors";
const labelCls =
  "block text-[11px] tracking-button uppercase font-semibold text-mediumText mb-2";

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initial);

  if (state.success) {
    return (
      <div className="border border-gold p-12 text-center bg-cream">
        <p className="font-display text-3xl text-darkText mb-3">Thank you</p>
        <p className="body-p">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelCls}>Name</label>
        <input id="name" name="name" required className={inputCls} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className={labelCls}>I'm Interested In</label>
        <select id="interest" name="interest" className={inputCls} defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Buying</option>
          <option>Selling</option>
          <option>Both</option>
          <option>Investment</option>
          <option>Home Valuation</option>
          <option>Just have questions</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea id="message" name="message" rows={5} className={inputCls} />
      </div>
      <SubmitButton />
      <p className="text-[11px] text-lightText text-center font-light">
        Your information is private and never shared.
      </p>
    </form>
  );
}
