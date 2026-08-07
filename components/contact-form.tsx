"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form className="contact-form" action={formAction}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>What can we work on?</span>
        <textarea
          name="message"
          rows={7}
          required
          minLength={20}
          placeholder="Tell me about the role, project, workflow, or problem."
        />
      </label>
      <input className="honeypot" type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"} <Send size={17} />
      </button>
      {state.message ? (
        <p className={`form-message ${state.status}`} role="status">{state.message}</p>
      ) : null}
    </form>
  );
}
