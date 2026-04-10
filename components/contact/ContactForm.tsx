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
  "w-full bg-warmWhite border border-bordr rounded-[2px] px-4 py-3 text-[14px] text-darkText font-light focus:outline-none focus:border-gold transition-colors";
const labelCls =
  "block text-[11px] tracking-button uppercase font-medium text-mediumText mb-2";

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initial);

  if (state.success) {
    return (
      <div className="border border-gold/60 rounded-[2px] p-12 text-center bg-bgSection shadow-warm">
        <p className="font-display text-3xl text-darkText mb-3">Thank you</p>
        <div className="gold-divider w-12 mx-auto mb-4" />
        <p className="body-p">{state.message}</p>
      </div>
    );
  }

  const hasError = state.message && !state.success;

  return (
    <div>
      <p className="label">Get in Touch</p>
      <h2 className="h-display mt-4">
        Let&apos;s Start{" "}
        <span className="italic text-gold">the Conversation</span>
      </h2>
      <div className="gold-divider w-14 mt-6" />
      <p className="body-p mt-6 max-w-md">
        No pressure, no sales pitch. Just tell me what you&apos;re thinking
        and I&apos;ll get back to you quickly.
      </p>

      {hasError && (
        <div className="mt-8 border border-red-300 rounded-[2px] p-5 bg-red-50/50">
          <p className="text-[14px] text-red-800 font-light">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-6 mt-10">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name
          </label>
          <input id="name" name="name" required className={inputCls} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className={labelCls}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>
              Phone (optional)
            </label>
            <input id="phone" name="phone" type="tel" className={inputCls} />
          </div>
        </div>
        <div>
          <label htmlFor="interest" className={labelCls}>
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Buying</option>
            <option>Selling</option>
            <option>Just Exploring</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className={labelCls}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a bit about what you're looking for..."
            className={inputCls}
          />
        </div>
        <SubmitButton />
        <p className="text-[11px] text-lightText text-center font-light">
          I typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
